import Image from "next/image";
import s from "./registration.module.css";

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
    <div className={s.container}>
      <div className={s.Registration}>
        <Image
          src={"/images/mecathon-logo.svg"}
          width={500}
          height={70}
          alt={"Mecathon logo"}
        />
        <Info placeholder="" name="Primeiro nome" />
        <Info placeholder="" name="Sobrenome" />
        <Info placeholder="" name="Email" />
        <Info placeholder="DD/MM/AAAA" name="Data de nascimento" />
        <Info placeholder="M ou F" name="Sexo" />
        <Info placeholder="" name="CPF" />
        <Info placeholder="" name="Qual sua área de atuação?" />
        <Info placeholder="Empresa" name="Você trabalha onde?" />
        <Info placeholder="" name="Qual área?" />
        <Info placeholder="com DDD" name="Telefone para contato" />

        <button className={s.button}>ENVIAR</button>
      </div>
    </div>
  );
}
