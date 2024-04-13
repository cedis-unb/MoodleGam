"use client";
import "./style.css"
import {useRouter} from "next/navigation";

export default function MenuOption(props){
    const router = useRouter();

    const redirect = () => {
        
        router.push(`/pages/${props.redirect}`);
    }

    return (
        <a className="option-container" onClick={redirect}>
            <div className="option-icon-conteiner">
                
                {props.children}
            </div>

            <div className="option-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </a>


    );
}