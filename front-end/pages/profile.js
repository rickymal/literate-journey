import s from "./_modules_css/userProfile.module.css";
import Image from "next/image";
import Container from "../components/singleDashboardNavbar";
import { useEffect, useState } from "react";

export default function Main({ User }) {
  const [status, set_status] = useState("");
  const [name, set_name] = useState("");
  const [function_user, set_function_user] = useState("");
  const [description, set_description] = useState("");
  const [team, set_team] = useState("");
  const [hasTeam, set_hasTeam] = useState(false);

  useEffect(function () {
    var data = localStorage.getItem("mecathon_global_variables");
    var data_converted = JSON.parse(data);

    var username = data_converted.user.name;
    var description = data_converted.student.description;
    var function_user = data_converted.student.function_user;
    var teamId = data_converted.student.teamId;

    set_status(teamId);
    set_name(username);
    set_function_user(function_user);
    set_description(description);
    set_team(teamId);
    set_hasTeam(data_converted.teamId === null ? false : true);
  }, []);

  return (
    <Container hasTeam={hasTeam}>
      <div className={s.uiop}>
        <text className={s.user1}>{name}</text>
        <text className={s.short_description}>{description}</text>
      </div>
      <hr />
      <div className={s.tersw}>
        <text className={s.txt_information}>informações</text>
        <div className={s.yyop}>
          <text className={s.mainly_function}>Função principal</text>
          <text className={s.descr_function}>{function_user}</text>
        </div>
        <div className={s.yyop}>
          <text className={s.mainly_function}>Status</text>
          <text className={s.descr_function}>Participante</text>
        </div>
        <div className={s.yyop}>
          <text className={s.mainly_function}>Equipe atual</text>
          <text className={s.descr_function}>
            {team ? "Equipe " + team : "Sem equipe"}
          </text>
        </div>
        <div className={s.yyop}>
          <text className={s.mainly_function}>Desafio</text>
          <text className={s.descr_function}>[a implementar]</text>
        </div>
      </div>
      <div className={s.tersw_description}>
        <text className={s.complete_lorem_description}>descrição</text>
        <text className={s.description}>{description}</text>
      </div>
      <hr />
    </Container>
  );
}
