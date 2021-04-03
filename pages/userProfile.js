import s from './userProfile.module.css'
import Image from 'next/image'
export default function Main(){
    return (
        <div className = {s.container}>
            <div className = {s.sidebar}>
                
                <Image
                src = "/images/mecathon-transparent-logo.svg"
                width = {500}
                height = {500}
                alt = "Mecathon"
                />
                <text>Meu perfil</text>

                <hr/>

                <text>Equipes</text>
                <text>Minha equipe</text>
                <text>Mentorias</text>
                <text>Submissão de projetos</text>
                <text>Ajuda</text>

            </div>
            <div className = {s.main_dashboard}>
                <div className = {s.hjyh}>
                    <text className ={s.text_profile}>Meu Perfil</text>
                    <text className ={s.user_profile_navbar}>Usuario</text>
                </div>
                    
                <div className = {s.wrgew}>
                    <text className = {s.team_status}>Atualmente você não está em nenhuma equipe</text>
                    <text className = {s.create_team}>criar equipe (clique aqui)</text>
                </div>

                <div className = {s.second_dashboard}>
                    
                    <div className = {s.uiop}>
                        <text className = {s.user1}>Usuario 1</text>
                        <text className = {s.short_description}>Short user description</text>
                    </div>
                    <div className = {s.horizontal_line}/>
                    <hr id = {"horizontal_line"}/>
                    <text>informações</text>
                    <div className ={s.yyop}>
                        <text className = {s.mainly_function}>Função principal</text>
                        <text className = {s.descr_function}>Design UX/UI</text>
                    </div>
                    <text>descrição</text>
                    <text className = {s.description}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </text>
                    <hr id = {"horizontal_line"}/>
                </div>
            </div>
        </div>
    )
}