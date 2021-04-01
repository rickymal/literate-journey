import s from './login.module.css'
import Link from 'next/link'

const CircleOptions = () => (
    <div className = {s.container_circle_options}>
        <div>
            <input type = 'radio' className = {s.circle_div} name = "gender"/>
            <input type = 'radio' className = {s.circle_div} name = "gender" checked/>
            <input type = 'radio' className = {s.circle_div} name = "gender"/>
        </div>
    </div>
)

const LoginField = () => (
    <div>
        <div className = {s.textbox_field}>
            <div className = {s.squared_div}/>
            <input type = "textbox" className = {s.input_field} placeholder = "login"/>
        </div>
        <div className = {s.textbox_field}>
            <div className = {s.squared_div}/>
            <input type = "textbox" className = {s.input_field} placeholder = "senha"/>
        </div>
    </div>
)

const Login = () => (
    <div className = {s.login_field}>
        <text className = {s.text_entrecom}>Entre com</text>
        <CircleOptions/>
        <text className = {s.text_entrecom}>ou</text>
        <LoginField/>
        <button className = {s.button_style}>ENTRAR</button>
        <text className = {s.smaller_text}>ou</text>
        <Link href = '/home'><text className = {s.register_link}>registre-se</text></Link>
    </div>
)
export default function Main() {
    return (
        <div className = {s.container}>
            <div className = {s.sub_container}>
                <text className = {s.text_logar}>Logar</text>
                <Login/>
            </div>
        </div>
    )
}