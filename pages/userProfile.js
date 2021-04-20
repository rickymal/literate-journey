import s from './userProfile.module.css'
import Image from 'next/image'
import Container from '../components/singleDashboardNavbar'
import { useEffect, useState } from 'react';

/*
export async function getServerSideProps() {
    
    
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

export default function Main({User}){
    const [status,set_status] = useState("")
    const [name,set_name] = useState("")
    const [function_user,set_function_user] = useState("")
    const [description,set_description] = useState("")
    const [team,set_team] = useState("")
    const [hasTeam, set_hasTeam] = useState(false);

    useEffect(function() {
        var data = localStorage.getItem("mecathon_global_variables");
        var data_converted = JSON.parse(data);
        set_status(data_converted.status);
        set_name(data_converted.name);
        set_function_user(data_converted.function);
        set_description(data_converted.description);
        set_team(data_converted.team);
        console.log(data_converted);
        console.log(data_converted.team)
        console.log(typeof data_converted.team)
        console.log(data_converted.team === null);


        set_hasTeam(data_converted.team === null ? false : true)
        console.log(hasTeam);

        
    },[])


    return (
        <Container hasTeam = {hasTeam}>
            <div className = {s.uiop}>
                <text className = {s.user1}>{name}</text>
                <text className = {s.short_description}>{description}</text>
            </div>
            <hr/>
            <div className = {s.tersw}>
                <text className = {s.txt_information}>informações</text>
                <div className ={s.yyop}>
                    <text className = {s.mainly_function}>Função principal</text>
                    <text className = {s.descr_function}>{function_user}</text>
                </div>
                <div className ={s.yyop}>
                    <text className = {s.mainly_function}>Status</text>
                    <text className = {s.descr_function}>{status}</text>
                </div>
                <div className ={s.yyop}>
                    <text className = {s.mainly_function}>Equipe atual</text>
                    <text className = {s.descr_function}>{hasTeam ? "Equipe " + team.id : "Sem equipe"}</text>
                </div>
                <div className ={s.yyop}>
                    <text className = {s.mainly_function}>Desafio</text>
                    <text className = {s.descr_function}>[a implementar]</text>
                </div>

            </div>
            <div className = {s.tersw_description}>
                <text className = {s.complete_lorem_description}>descrição</text>
                <text className = {s.description}>
                    {description}
                </text>
            </div>
            <hr/>
        </Container>
    )
}