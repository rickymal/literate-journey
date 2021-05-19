import s from "./_modules_css/mentoringList.module.css";
import f from "./_modules_css/userProfile.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import api_axios from "../lib/_axios";

import Container from "../components/singleDashboardNavbar";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = ({ data }) => (
  <div className={f.sidebar}>
    <Image
      src="/images/mecathon-transparent-logo.svg"
      width={500}
      height={500}
      alt="Mecathon"
      className={f.logo_mecathon}
    />
    <text>Meu perfil</text>

    <hr />
    <div className={f.options}>
      <Link href="/userProfile">
        <text>Tela principal</text>
      </Link>
      <text>Minha equipe</text>
      <text>Mentorias</text>
      <text>Submissão de projetos</text>
      <text>Ajuda</text>
      <text>{data}</text>
    </div>
  </div>
);

const Attachment_box = ({ className }) => (
  <div className={className} style={{ width: 200, height: 200 }}></div>
);

const NavbarMentoring = () => (
  <div className={s.navbar_mentoring}>
    <div className={s.grouped_information_mentoring}>
      <text>25</text>
      <text>Mentorias realizadas</text>
    </div>
    <div className={s.grouped_information_mentoring}>
      <text>25</text>
      <text>Mentorias realizadas</text>
    </div>
    <div className={s.grouped_information_mentoring}>
      <text>25</text>
      <text>Mentorias realizadas</text>
    </div>
  </div>
);

async function select_mentor(id, router) {
  var token = localStorage.getItem("token");
  const response = await api_axios.post("etc/select_mentor?id=" + id, null, {
    headers: {
      authorization: "Bearer " + token,
    },
  });

  alert(response.data);
  router.push("profile");
}

const MentoringList = (props) => {
  const [mentors, set_mentors] = useState([]);
  useEffect(() => {
    console.log("log funcionando");
    console.log(JSON.stringify(props.disposable_mentors));
    console.log("especificamente todas as mentorias");
    console.log(JSON.stringify(props.disposable_mentors.all_mentorings));
  }, []);
  return (
    <div className={s.mentoring_list}>
      {props.disposable_mentors.all_mentorings.map(function (mentor) {
        var date = new Date(mentor.data_for_meeting);
        console.log(`date : ${date}`);
        var date_formatter = new Intl.DateTimeFormat("pt-br", {
          dateStyle: "short",
        }).format(date);
        console.log(`date formatted : ${date_formatter}`);
        var time_formatter = new Intl.DateTimeFormat("pt-br", {
          timeStyle: "short",
        }).format(date);
        console.log(`time formatted : ${time_formatter}`);

        return (
          <div>
            <text>Mentoria</text>
            <text>{date_formatter}</text>
            <text>{time_formatter}</text>
            <button
              className={s.button_selector_mentor}
              onClick={async () => await select_mentor(mentor.id, props.router)}
            >
              Selecionar mentoria
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Dashboard = (props) => (
  <div className={s.dashboard_mainly}>
    <text className={s.submition_project}>Lista de mentorias</text>
    <div className={s.third_dashboard_edited}>
      <NavbarMentoring />
      <MentoringList
        disposable_mentors={props.disposable_mentors}
        router={props.router}
      />
    </div>
  </div>
);

export default function Main(props) {
  const router = useRouter();
  const [hasTeam, set_hasTeam] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:8000",
  });

  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Method"] = "*";
  api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
  api.defaults.withCredentials = true;
  const [disposable_mentors, set_mentor_object] = useState(null);

  useEffect(() => {
    var token = localStorage.getItem("token");
    var data = localStorage.getItem("mecathon_global_variables");
    var data_converted = JSON.parse(data);
    set_hasTeam(data_converted.teamId === null ? false : true);
    const url = "etc/mentors";
    try {
      var resultado = api.get(url, {
        headers: {
          authorization: "Bearer " + token,
        },
      });

      resultado.then(function (e) {
        set_mentor_object(e.data);
      });
    } catch (error) {
      throw new Error("Error: " + error);
    }
  }, []);

  return (
    <Container hasTeam={hasTeam}>
      {disposable_mentors ? (
        <Dashboard disposable_mentors={disposable_mentors} router={router} />
      ) : null}
    </Container>
  );
}
