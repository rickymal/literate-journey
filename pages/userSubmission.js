import s from './userSubmission.module.css'
const Sidebar = () => (
    <h1>OI</h1>
)
// usado para anexo
const Attachment_box = ({className}) => (
    <div className = {className} style = {{width : 100, height : 100}}>
    </div>
)

const Dashboard = () => (
    <div className = {s.dashboard_mainly}>
        <text>Submeter projeto</text>
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
                <text style = {{fontSize : '10px'}}>arquivo.pdf</text>
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