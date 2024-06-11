"use client"
import "./style.css"
import "../loginPage/style.css"
import Image from "next/image";
import {useRouter} from "next/navigation";
export default function Unauthorized(){
    const router = useRouter()
    const redirect = () =>{
        router.push("/pages/homepage")
    }
    return(

        <div className="unauthorized-conteiner">
            <Image 
                src="/img/logo_image.png"
                width={300}
                height={300}
                unoptimized={true}
            />
            <h1>Acesso negado</h1>
            <a onClick={redirect}>Voltar ao menu inicial</a>
        </div>
    )
}