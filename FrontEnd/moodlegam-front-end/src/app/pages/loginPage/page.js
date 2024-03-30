import "../loginPage/style.css";
import Image from "next/image";

export default function LoginPage(){



    return (
        <div className="background-login-page">
            
            
            <div className="login-container">
                <p>Faça Login no <span id='orange-moodle'>Moodle</span>Gam</p>

                <form>
                    <input type="text" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    <a>Esqueci minha senha</a>
                    <a>Fazer cadastro</a>
                    <div className="button-login-wrapper">
                        <button type="submit">Entrar</button>
                    </div>
                    
                </form>
            </div>
            <div className="moodlegam-logo-login">
                <Image 
                    src="/img/logo_image.png"
                    width={500}
                    height={500}
                    unoptimized={true}
                />
            </div>
        </div>


    );
}