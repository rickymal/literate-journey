import s from './userProfile.module.css'
import Image from 'next/image'
import Container from '../components/singleDashboardNavbar'
export default function Main(){
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