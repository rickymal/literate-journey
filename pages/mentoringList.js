import s from './mentoringList.module.css'
import f from './userProfile.module.css'
import Image from 'next/image'

const Sidebar = () => (
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
    <div className = {s.option_mentoring_style}>
        
    </div>
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

export default function Main() {
    return (
        <div className = {s.container}>
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}