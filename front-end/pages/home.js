import styles from "./_modules_css/home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const size = 6;
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <h1 className={styles.text}>
          Bem vindo ao <strong>MECHATON</strong>
        </h1>
        <h2 className={styles.text}>
          o primeiro hackaton do curso de Engenharia Mecânica da UFPR
        </h2>
        <div className={styles.box_login}>
          <button className={styles.button}>ENTRAR</button>

          <p className={styles.p}>ou</p>
          <Link href="/">
            <p className={styles.p_registration}>registre-se</p>
          </Link>
        </div>
      </div>
      <div className={styles.ludiclogo}>
        <Image
          priority
          src="/images/content.svg"
          height={size * 144}
          width={size * 144}
          alt="Henrique Mauler"
        />
      </div>
    </div>
  );
}
