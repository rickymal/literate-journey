import s from './userProfile.module.css'
import Image from 'next/image'
import Container from '../components/singleDashboardNavbar'
import { useEffect, useState } from 'react';

/*
export async function getServerSideProps() {
    var data = localStorage.getItem("mecathon_global_variables");
    var data_converted = JSON.parse(data);
    
    return {
        props : {
            User : {
                status : data_converted.status,
                name : data_converted.name,
                function_user : data_converted.function,
                description : data_converted.description,
                team : data_converted === null ? null : data_converted.team.id,
            }
        }
    }
    
}
*/

export async function getStaticProps() {
    return {
        props : {},
        revalidate : 1,
    }
}

export default function Main({User}){
    const [status,set_status] = useState("")
    const [name,set_name] = useState("")
    const [function_user,set_function_user] = useState("")
    const [description,set_description] = useState("")
    const [team,set_team] = useState("")
    

    
    useEffect(function(){
        var data = localStorage.getItem("mecathon_global_variables");
        var data_converted = JSON.parse(data);
        set_name(data_converted.name);
        set_description(data_converted.description);

    },[name])

    return (
        <Container>
            <div className = {s.uiop}>
                        <text className = {s.user1}>{name}</text>
                        <text className = {s.short_description}>{description}</text>
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
                        <text className = {s.description}>lorem  alorem {name} ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        </text>
                    </div>
                    <hr/>
        </Container>
    )
}