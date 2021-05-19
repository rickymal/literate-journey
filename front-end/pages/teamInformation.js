import s from "./_modules_css/teamInformation.module.css";
import Image from "next/image";

const TeamOption = () => (
  <div className={s.circle_team_icon}>
    <div>
      <text>TD</text>
    </div>
    <text>Time D</text>
  </div>
);

export default function Main() {
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <Image
          src="/images/mecathon-transparent-logo.svg"
          width={500}
          height={500}
          alt="Mecathon"
          className={s.logo_mecathon}
        />
        <text>Meu perfil</text>

        <hr />
        <div className={s.options}>
          <text>Equipes</text>
          <text>Minha equipe</text>
          <text>Mentorias</text>
          <text>Submissão de projetos</text>
          <text>Ajuda</text>
        </div>
      </div>
      <div className={s.main_dashboard}>
        <div className={s.hjyh}>
          <text className={s.text_profile}>Equipes </text>
          <text className={s.user_profile_navbar}>Usuario</text>
        </div>
        <div className={s.wrgew}>
          <text className={s.team_status}>você está na equipe D</text>
          <text className={s.create_team}>gerenciar equipes</text>
        </div>
        <div className={s.second_dashboard}>
          <div className={s.uiop}>
            <text className={s.user1}>Usuario 1</text>
            <text className={s.short_description}>Short user description</text>
          </div>
          <hr />
          <div className={s.tersw}>
            <div className={s.team_options}>
              <TeamOption />
              <TeamOption />
              <TeamOption />
              <TeamOption />
              <TeamOption />
              <TeamOption />
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
}
