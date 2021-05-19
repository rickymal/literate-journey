import s from "./singleDashboardNavbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Container = ({ children, hasTeam }) => (
  <div className={s.container}>
    <div className={s.sidebar}>
      <Image
        src="/images/mecathon-transparent-logo.svg"
        width={500}
        height={500}
        alt="Mecathon"
        className={s.logo_mecathon}
      />
      <Link href="/profile">
        <text>Meu perfil</text>
      </Link>

      <hr />
      <div className={s.options}>
        <Link href="/profile">
          <text>Área principal</text>
        </Link>
        <Link href="/mentorings">
          <text>Mentorias</text>
        </Link>
        <Link href="/error">
          <text style={{ color: "#AAAAAA" }}>Equipes</text>
        </Link>
        <Link href="/error">
          <text style={{ color: "#AAAAAA" }}>Minha equipe</text>
        </Link>
        <Link href="/error">
          <text style={{ color: "#AAAAAA" }}>Submissão de projetos</text>
        </Link>
        <Link href="/error">
          <text style={{ color: "#AAAAAA" }}>Ajuda</text>
        </Link>
        <Link href="/error">
          <text style={{ color: "#AAAAAA" }}>Equipes</text>
        </Link>
      </div>
    </div>
    <div className={s.main_dashboard}>
      <div className={s.hjyh}>
        <text className={s.text_profile}>Meu Perfil</text>
        <text className={s.user_profile_navbar}>Usuario</text>
      </div>

      <div className={s.wrgew}>
        {hasTeam ? (
          <text className={s.team_status} style={{ color: "blue" }}>
            Com time
          </text>
        ) : (
          <text className={s.team_status}>No momento vocês está sem time</text>
        )}

        <text className={s.create_team}>criar equipe</text>
      </div>

      <div className={s.second_dashboard}>{children}</div>
    </div>
  </div>
);

export default Container;
