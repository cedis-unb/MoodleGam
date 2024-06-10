import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function RitmoDePremios(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Ritmo de Premios</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Prize Pacing</i></h2>
                    
                    <ExtrinsicBox/>
                    <BlackHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        "Ritmo de Prêmios" é uma estratégia de gamificação que envolve a distribuição estratégica de 
                        recompensas ou prêmios ao longo do tempo ou com base no progresso do usuário. 
                        Isso pode ajudar a manter o engajamento do usuário e a incentivar a participação contínua.

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