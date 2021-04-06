import s from './userSubmission.module.css'
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

const Dashboard = () => (
    <div className = {s.dashboard_mainly}>
        <text className = {s.submition_project}>Submeter projeto</text>
        <div className = {s.third_dashboard}>
            <div className = {s.partial_dashboard_view}>
                <text className = {s.text_styles_default}>Nome do projeto</text>
                <input type = "text" className = {s.textbox}/>
                <text className = {s.text_styles_default}>Links do projeto</text>
                <input type = "text" className = {s.textbox}/>
                <text className = {s.text_styles_default}>Descrição</text>
                <textarea  className = {s.textbox}/>
            </div>
            <div className = {s.partial_dashboard_view}>
                <text className = {s.text_styles_default}>Apresentação em PDF</text>
                <Attachment_box className = {s.attachment_textbox_view}/>
                <text style = {{fontSize : '12px',paddingBottom : '30px', paddingTop : '5px'}}>arquivo.pdf</text>
                <button className = {s.attachment_button}>Anexar</button>
                <button className = {s.send_button}>Enviar</button>
            </div>
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