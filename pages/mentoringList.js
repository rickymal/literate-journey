import s from './mentoringList.module.css'
import f from './userProfile.module.css'
import Image from 'next/image'

const Sidebar = ({data}) => (
    <div className = {f.sidebar}>
                
                <Image
                src = "/images/mecathon-transparent-logo.svg"
                width = {500}
                height = {500}
                alt = "Mecathon"
                className = {f.logo_mecathon}
                />
                <text>Meu perfil</text>

                <hr/>
                <div className = {f.options}>
                    <text>Equipes</text>
                    <text>Minha equipe</text>
                    <text>Mentorias</text>
                    <text>Submissão de projetos</text>
                    <text>Ajuda</text>
                    <text>{data}</text>
                </div>

            </div>
)
// usado para anexo
const Attachment_box = ({className}) => (
    <div className = {className} style = {{width : 200, height : 200}}>
    </div>
)

const NavbarMentoring = () => (
    <div className = {s.navbar_mentoring}>
        <div className = {s.grouped_information_mentoring}>
            <text>25</text>
            <text>Mentorias realizadas</text>
        </div>
        <div className = {s.grouped_information_mentoring}>
            <text>25</text>
            <text>Mentorias realizadas</text>
        </div>
        <div className = {s.grouped_information_mentoring}>
            <text>25</text>
            <text>Mentorias realizadas</text>
        </div>
    </div>
)

// não consegui finalizar
const Options = () => (
    <>
        <button className = {s.button_selector_mentor}>Selecionar mentoria</button>
    </>
)

const MentoringList = () => (
    <div className = {s.mentoring_list}>
        <div>
            <text>Time 1</text>
            <text>07/09/2020</text>
            <text>13:30h</text>
            <Options/>
        </div>
        <div>
            <text>Time 1</text>
            <text>07/09/2020</text>
            <text>13:30h</text>
            <Options/>
        </div>
        <div>
            <text>Time 1</text>
            <text>07/09/2020</text>
            <text>13:30h</text>
            <Options/>
        </div>
        <div>
            <text>Time 1</text>
            <text>07/09/2020</text>
            <text>13:30h</text>
            <Options/>
        </div>
        <div>
            <text>Time 1</text>
            <text>07/09/2020</text>
            <text>13:30h</text>
            <Options/>
        </div>
    </div>
)

const Dashboard = () => (
    <div className = {s.dashboard_mainly}>
        <text className = {s.submition_project}>Lista de mentorias</text>
        <div className = {s.third_dashboard_edited}>
            <NavbarMentoring/>
            <MentoringList/>
        </div>
    </div>
)

// apenas no lado do servidor, ou seja, nenhum console.log funcionará aqui
export async function getServerSideProps(context){
    const data = "Henrique Mauler Borges - getstaticprops";
    const information = await fetch('https://api.github.com/repos/vercel/next.js');
    //const internal_ = await fetch('/api/endpointer');

    return {
        props : {
            data : data,
            information : await information.json(),
        }
    }
}


export default function Main(props) {

    const d = props.data;
    const info = props.information;
    console.log(info);
    

    return (
        <div className = {s.container}>
            <Sidebar data = {d}/>
            <Dashboard/>
        </div>
    )
}