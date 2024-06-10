"use client"
import "./style.css"
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import Modal from "@/app/components/Modal";
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Image from "next/image";

export default function Narrativa(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">
                    <h1>Narrativa</h1>
                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Narrative</i></h2>
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A maioria dos jogos começam com uma narrativa que dá ao jogador algum contexto sobre por que eles deveriam jogar o jogo.
                        <br></br> <br></br>
                        A técnica da "Narrativa" é um recurso amplamente utilizado em gamificação para envolver e motivar os usuários através da contação de histórias. 
                        Esse método pode criar um contexto atraente e imersivo para uma experiência de gamificação, tornando-a mais envolvente e interessante. 
                        A narrativa também pode fornecer estrutura e significado para as atividades e metas de gamificação, ajudando os usuários a entenderem e 
                        se conectarem com a gamificação em um nível mais profundo

                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">MoodleGame</span></h3>
                           
                            <a>(www.moodle.com.br)</a>
                        </div>
                        
                        <div className="how-to-install">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Image 
                                src="/img/logo_image.png"
                                width={500}
                                height={500}
                                unoptimized={true}
                            />

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. with the release of Letraset sheets containing Lorem Ipsum passages, and 
                                more recently with desktop publishing software like Aldus PageMaker including versions of 
                                Lorem Ipsum.
                            </p>
                        </div>

                    </div>
                
                </div>
            </div>

            
            

        </Background>



    )
}