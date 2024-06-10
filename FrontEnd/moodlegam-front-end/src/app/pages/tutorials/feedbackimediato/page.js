import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
export default function FeedbackImediato(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Feedback Imediato</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Instant Feedback</i></h2>
                            <WhiteHatBox/>
                            <IntrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                Permite ao jogador reconhecer imediatamente os resultados do seu trabalho. 
                                "Feedback Imediato" é uma estratégia de gamificação que envolve fornecer aos usuários uma resposta 
                                rápida e clara sobre suas ações ou desempenho. Isso pode ajudar a motivar os usuários, fornecer 
                                reforço positivo para comportamentos desejados e ajudar os usuários a aprender e melhorar.

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