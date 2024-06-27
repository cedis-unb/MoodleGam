import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function VinculoComOMonitor(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Vínculo com o Monitor</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Monitor Attachment</i></h2>
                    
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Esta técnica de jogo que permite que as pessoas 
                            desenvolvem de forma acentuada a sensação de propriedade 
                            de (ou em direção) a algo. Isto é feito através da 
                            indução de um monitoramento constante ou atenção foca 
                            sobre um determinado item de propriedade do jogador. 
                            "Vínculo com o Monitor" é uma estratégia de 
                            gamificação que envolve criar uma conexão 
                            emocional entre o usuário e um elemento ou 
                            personagem do jogo, neste caso, o monitor, 
                            guia ou mentor. 
                            Esta técnica de gamificação tem o objetivo 
                            de aumentar o engajamento e a lealdade do
                            usuário através do estabelecimento de um relacionamento 
                            emocional.

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