import s from './projectDescription.module.css'
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


const Dashboard = () => (
    <div className = {s.dashboard_mainly}>
        <text className = {s.submition_project}>[Nome do projeto]</text>
        <div className = {s.third_dashboard}>
            {/* */}
            <div className = {s.video_container}>
                <text className = {s.text_main_description}>descrição do projeto</text>
                <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices augue non laoreet dignissim. Morbi id sagittis tortor, a posuere sapien. Nam ornare tortor quis eros cursus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla vitae lacus nec egestas. Vestibulum malesuada id metus sed pharetra. Fusce at felis varius, fermentum lorem in, tristique lorem. Quisque ut ullamcorper ipsum. Proin eu vestibulum est. Pellentesque blandit purus elit, malesuada consequat odio condimentum in. Mauris justo nisi, aliquam vel scelerisque eget, ultricies ut ipsum.</text>
            </div>
            {/* */}
            <div className = {s.description}>
                <text className = {s.text_main_description}>Links</text>
                <text className = {s.text_h2_description}>www.google.com</text>
            </div>
            {/* */}
            <div className = {s.description}>
                <text className = {s.text_main_description}>Avaliar projeto</text>
                <text className = {s.text_h3_description}>Nota</text>
                <input className = {s.input_style_nameproject} type = "text"/>
                <text className = {s.text_h3_description}>Comentário sobre o projeto</text>
                <input className = {s.input_style_nameproject} type = "text"
                style = {{
                    minWidth : '60%',
                    minHeight : '100px',
                }}
                />
                <button>Submeter avaliação</button>
            </div>
            {/* */}
            <div className = {s.project_avaliation}></div>
            {/* */}
            <div className = {s.etc}></div>
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
