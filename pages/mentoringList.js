import s from "./mentoringList.module.css";
import f from "./userProfile.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios'
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
      <text>Equipes</text>
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


function select_mentor(id) {
  throw new Error("not implemented error");
}

// não consegui finalizar
const Options = () => (
  <>
    <button className={s.button_selector_mentor}>Selecionar mentoria</button>
  </>
);


const MentoringList = (props) => {
  const [mentors, set_mentors] = useState([]);
  useEffect(() => {
    alert("mostrando o que tem nos mentorings")
    alert(JSON.stringifyg(props.disposable_mentors));
  }, []);
  return (
    <div className={s.mentoring_list}>
      {
        props.disposable_mentors.all_mentorings.map(function(mentor) {
          var date = new Date(mentor.data_for_meeting)
          
          var date_formatter = new Intl.DateTimeFormat('pt-br',{
            dateStyle : 'short',
          }).format(date)
          var time_formatter = new Intl.DateTimeFormat('pt-br',{
            timeStyle : 'short',
          }).format(date)
          

          return (
            <div>
              <text>Mentoria</text>
              <text>{date_formatter}</text>
              <text>{time_formatter}</text>
              <Options />
            </div>
          )








        })
      }
      <div>
        <text>Time 1</text>
        <text>07/09/2020</text>
        <text>13:30h</text>
        <Options />
      </div>
      <div>
        <text>Time 1</text>
        <text>07/09/2020</text>
        <text>13:30h</text>
        <Options />
      </div>
      <div>
        <text>Time 1</text>
        <text>07/09/2020</text>
        <text>13:30h</text>
        <Options />
      </div>
      <div>
        <text>Time 1</text>
        <text>07/09/2020</text>
        <text>13:30h</text>
        <Options />
      </div>
      <div>
        <text>Time 1</text>
        <text>07/09/2020</text>
        <text>13:30h</text>
        <Options />
      </div>
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
/*
// apenas no lado do servidor, ou seja, nenhum console.log funcionará aqui
export async function getServerSideProps(context) {

  var token = localStorage.getItem("token");
  

  const options = {
      method: "GET",
      headers: new Headers({'Access-Control-Allow-Origin': '*',
      "authorization" : "Bearer " + token,
    }),
      mode: 'cors',
      
      
    };
    
    const result = await fetch(url,options);
    alert(typeof result)
    alert(JSON.stringify(result))


  //capturando a informação
  const url = "http://127.0.0.1:8000/etc/mentors"
  const resultado = await result.json();


  const data = "Henrique Mauler Borges - getstaticprops";
  const information = await fetch(
    "https://api.github.com/repos/vercel/next.js"
  );
  //const internal_ = await fetch('/api/endpointer');

  return {
    props: {
      data: data,
      resultado : resultado,
      information: await information.json(),
    },
  };
}
*/

async function getMentors() {

}

export default function Main(props) {
  const api = axios.create({
      baseURL : 'http://localhost:8000',
  });

  api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Headers"] = "*";
  api.defaults.headers.post["Access-Control-Allow-Method"] = "*";
  api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
  api.defaults.withCredentials = true;
  const [disposable_mentors,set_mentor_object] = useState({})


  useEffect(() => {
    var token = localStorage.getItem("token");
    alert("token: " + token);
   

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
      })
    } catch(error) {
      alert("algo de errado não está certo");
    }


  },[]);

  return (
    <div className={s.container}>
      <Sidebar />
      {disposable_mentors ? <Dashboard disposable_mentors = {disposable_mentors} /> : null}
    </div>
  );
}
