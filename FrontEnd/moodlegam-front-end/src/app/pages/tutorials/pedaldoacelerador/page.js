import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PedalDoAcelerador(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Pedal do Acelerador</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Throttles</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Pedal do acelerador" ou também conhecido como "Reguladores" é uma 
                            estratégia de gamificação que se refere ao controle de acesso ou 
                            limitação da velocidade com a qual os jogadores podem progredir em um jogo. 
                            Isso é feito estabelecendo limites no jogo, tais como limites de tempo, 
                            limites de recursos, ou limites de tentativas. Isso pode criar um senso 
                            de urgência, encorajar jogabilidade estratégica, e ajudar a prolongar a 
                            vida útil do jogo.
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
        

    );
}