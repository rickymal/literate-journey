import s from './singleDashboardNavbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Container = ({children}) => (
    <div className = {s.container}>
            <div className = {s.sidebar}>
                
                <Image
                src = "/images/mecathon-transparent-logo.svg"
                width = {500}
                height = {500}
                alt = "Mecathon"
                className = {s.logo_mecathon}
                />
                <text>Meu perfil</text>

                <hr/>
                <div className = {s.options}>
                    <Link href = '/error'><text>Equipes</text></Link>
                    <Link href = '/error'><text>Minha equipe</text></Link>
                    <Link href = '/mentoringList'><text>Mentorias</text></Link>
                    <Link href = '/error'><text>Submissão de projetos</text></Link>
                    <Link href = '/error'><text>Ajuda</text></Link>
                    <Link href = '/error'><text>Equipes</text></Link>
                    
                </div>

            </div>
            <div className = {s.main_dashboard}>
                <div className = {s.hjyh}>
                    <text className ={s.text_profile}>Meu Perfil</text>
                    <text className ={s.user_profile_navbar}>Usuario</text>
                </div>
                    
                <div className = {s.wrgew}>
                    <text className = {s.team_status}>Atualmente você não está em nenhuma equipe</text>
                    <text className = {s.create_team}>criar equipe</text>
                </div>

                <div className = {s.second_dashboard}>
                    {children}
                </div>
            </div>
        </div>
)


export default function Test(){
    return (
        <Container>
            <div className = {s.uiop}>
                        <text className = {s.user1}>Usuario 1</text>
                        <text className = {s.short_description}>Short user description</text>
                    </div>
                    <hr/>
                    <div className = {s.tersw}>
                        <text className = {s.txt_information}>informações</text>
                        <div className ={s.yyop}>
                            <text className = {s.mainly_function}>Função principal</text>
                            <text className = {s.descr_function}>Design UX/UI</text>
                        </div>
                        <div className ={s.yyop}>
                            <text className = {s.mainly_function}>Email</text>
                            <text className = {s.descr_function}>henriquemauler@gmail.com</text>
                        </div>
                        <div className ={s.yyop}>
                            <text className = {s.mainly_function}>Equipe atual</text>
                            <text className = {s.descr_function}>Time X</text>
                        </div>

                    </div>
                    <div className = {s.tersw_description}>
                        <text className = {s.complete_lorem_description}>descrição</text>
                        <text className = {s.description}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        </text>
                    </div>
                    <hr/>
        </Container>
    )
}