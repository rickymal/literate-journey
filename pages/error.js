import s from './error.module.css'
import Image from 'next/image'
export default function Main() {
    return (
        <div className = {s.container}>
            <div className ={s.container}>
                <Image
                src = '/images/oops.svg'
                layout = "fill"
                />
                <Image
                src = '/images/oops.text.svg'
                width = {500}
                height = {500}
                />
            </div>
        </div>
    )
}