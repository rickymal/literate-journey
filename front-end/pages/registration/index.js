import Image from "next/image";
import s from "./registration.module.css";
import Link from "next/link";

const Info = ({ placeholder, name }) => (
  <>
    <text className={s.text_decoration}>{name}</text>
    <input
      type="textbox"
      className={s.input_decoration}
      placeholder={placeholder}
    />
  </>
);

export default function Registration() {
  return (
    <div className={[s.container_option]}>
      <Link href={"/registration/student_registration"}>
        <button className={s.button_choice}>ESTUDANTE</button>
      </Link>
      <Link href={"/registration/mentor_registration"}>
        <button className={s.button_choice}>MENTOR</button>
      </Link>
      <Link href={"/registration/judger_registration"}>
        <button className={s.button_choice}>AVALIADOR</button>
      </Link>
    </div>
  );
}
