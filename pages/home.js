import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Home(){
    const size = 5;
    return (
        <div className = {styles.container}>
            <div className = {styles.presentation }>
                <h1>
                Bem vindo ao <strong>MECHATON</strong> 
                </h1>
                <h2>
                o primero hackaton do curso de Engenharia Mecânica da UFPR
                </h2>
                <button>
                    ENTRAR
                </button>
                ou
                <a>registre-se</a>
                <Link href = "/">registre-se</Link>
            </div>
            <div className = {styles.ludiclogo}>
                <Image
                priority
                src = "/images/content.svg"
                height = {size * 144}
                width = {size * 144}
                alt = "Henrique Mauler"
                />
            </div>
        </div>
    )
}