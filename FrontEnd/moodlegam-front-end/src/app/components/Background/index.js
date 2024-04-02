import "./style.css"
import Image from "next/image";


export default function Background(props){

    return (

        <div className="background-page">
            <div className="navbar">
                <h1><span id='orange-moodle'>Moodle</span>Gam</h1>
                <div className="navbar-buttons">
                    <div className="button-navbar">
                        <Image 
                            src="/img/books.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Disciplinas</h2>
                        
                    </div>

                    <div className="button-navbar">
                        
                        <Image 
                            src="/img/content.svg"
                            width={25}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Conteúdos</h2>

                    </div>

                    <div className="button-navbar">
                        
                        <Image 
                            src="/img/info.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <h2>Sobre nós</h2>
                    </div>

                    <div  className="button-navbar">
                        
                        <Image 
                            src="/img/help.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Ajuda</h2>

                    </div>
                </div>
                <div className="user-area">
                    <Image 
                        src="/img/user_icon.svg"
                        width={40}
                        height={40}
                        unoptimized={true}
                    />

                    <span>Olá Fulano</span>

                </div>
            </div>
            {props.children}

        </div>
    
    );



}