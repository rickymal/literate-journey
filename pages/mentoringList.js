import s from "./mentoringList.module.css";
import f from "./userProfile.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'
import api_axios from '../lib/_axios'

import Container from '../components/singleDashboardNavbar'
import Link from "next/link";




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
      <Link href = '/userProfile'><text>Tela principal</text></Link>
      <text>Minha equipe</text>
      <text>Mentorias</text>
      <text>Submissão de projetos</text>
      <text>Ajuda</text>
      <text>{data}</text>
    </div>
  </div>
);

// usado para anexo
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




async function select_mentor(id) {
  alert("the implementation has been comming... the id is: " + id);
  var token = localStorage.getItem("token");
  const response = await api_axios.post('etc/select_mentor?id=' + id,null, {
    headers : {
      authorization : "Bearer " + token,
    },
  });


  alert(response.data)


  
}



const MentoringList = (props) => {
  const [mentors, set_mentors] = useState([]);
  useEffect(() => {
    console.log("log funcionando")
    console.log(JSON.stringify(props.disposable_mentors))
    console.log('especificamente todas as mentorias')
    console.log(JSON.stringify(props.disposable_mentors.all_mentorings))
  }, []);
  return (
    <div className={s.mentoring_list}>
      {
        

        
        props.disposable_mentors.all_mentorings.map(function(mentor) {
          var date = new Date(mentor.data_for_meeting)
          console.log(`date : ${date}`)
          var date_formatter = new Intl.DateTimeFormat('pt-br',{
            dateStyle : 'short',
          }).format(date)
          console.log(`date formatted : ${date_formatter}`)
          var time_formatter = new Intl.DateTimeFormat('pt-br',{
            timeStyle : 'short',
          }).format(date)
          console.log(`time formatted : ${time_formatter}`)
          

          return (
            <div>
              <text>Mentoria</text>
              <text>{date_formatter}</text>
              <text>{time_formatter}</text>
              <button className = {s.button_selector_mentor} onClick = {async () => await select_mentor(mentor.id)}>Selecionar mentoria</button>
            </div>
          )








        })
        
      }
      
    </div>
  );
};

const Dashboard = (props) => (
  <div className={s.dashboard_mainly}>
    <text className={s.submition_project}>Lista de mentorias</text>
    <div className={s.third_dashboard_edited}>
      <NavbarMentoring />
      <MentoringList disposable_mentors = {props.disposable_mentors} />
    </div>
  </div>
);

  
// alert
export default function Main(props) {
  const api = axios.create({
      baseURL : 'http://localhost:8000',
  });

  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Method"] = "*";
  api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
  api.defaults.withCredentials = true;
  const [disposable_mentors,set_mentor_object] = useState(null)


  useEffect(() => {
    var token = localStorage.getItem("token");
    // alert("token: " + token);
   

    const url = "etc/mentors";
    try {
      // não boto fé que esse tempo todo era o nome do objeto que estava errado...
      var resultado = api.get(url,{
        headers : {
          authorization : "Bearer " + token,
        }
      })

      resultado.then(function(e) {
        
        set_mentor_object(e.data);
        // alert(disposable_mentors);
      })
    } catch(error) {
      // alert("algo de errado não está certo");
    }


  },[]);


  
  return (
    <div className={s.container}>
      <Sidebar />
      {disposable_mentors ? <Dashboard disposable_mentors = {disposable_mentors} /> : null}
    </div>
  );
}
