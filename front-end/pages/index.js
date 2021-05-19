import s from "./_modules_css/login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import api from "../lib/_axios";

const CircleOptions = () => (
  <div className={s.container_circle_options}>
    <div>
      <input type="radio" className={s.circle_div} name="gender" />
      <input type="radio" className={s.circle_div} name="gender" checked />
      <input type="radio" className={s.circle_div} name="gender" />
    </div>
  </div>
);

const LoginField = ({ state_hook }) => (
  <div>
    <div className={s.textbox_field}>
      <div className={s.squared_div} />
      <input
        type="textbox"
        className={s.input_field}
        placeholder="login"
        onChange={(e) => state_hook.login(e.target.value)}
      />
    </div>
    <div className={s.textbox_field}>
      <div className={s.squared_div} />
      <input
        type="textbox"
        className={s.input_field}
        placeholder="senha"
        onChange={(e) => state_hook.password(e.target.value)}
      />
    </div>
  </div>
);

const Login = () => {
  const [login, set_login] = useState("");
  const [password, set_password] = useState("");
  const router = useRouter();

  async function handleLogin(login, password, e) {
    e.preventDefault();
    const url = "/auth/authenticate";
    const result = await api.post(url, {
      email: login,
      password: password,
    });

    localStorage.setItem("token", result.data.token);
    localStorage.setItem(
      "mecathon_global_variables",
      JSON.stringify(result.data)
    );

    router.push("/userProfile");
  }

  return (
    <div className={s.login_field}>
      <text className={s.text_entrecom}>Entre com</text>
      <CircleOptions />
      <text className={s.text_entrecom}>ou</text>
      <LoginField state_hook={{ login: set_login, password: set_password }} />

      <button
        className={s.button_style}
        onClick={(e) => handleLogin(login, password, e)}
      >
        ENTRAR
      </button>

      <text className={s.smaller_text}>ou</text>
      <Link href="/home">
        <text className={s.register_link}>registre-se</text>
      </Link>
    </div>
  );
};
export default function Main() {
  return (
    <div className={s.container}>
      <div className={s.sub_container}>
        <text className={s.text_logar}>Logar</text>
        <Login />
      </div>
    </div>
  );
}
