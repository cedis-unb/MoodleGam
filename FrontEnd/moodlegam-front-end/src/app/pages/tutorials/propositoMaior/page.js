import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"

export default function PropositoMaior(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Propósito Maior</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Higher Meaning</i></h2>
                    
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Essa técnica refere-se à incorporação de elementos 
                            de jogo em uma atividade ou contexto com o objetivo de fornecer um sentido mais profundo, 
                            relevância ou propósito aos participantes.

                            A técnica busca envolver os jogadores em uma experiência que vá além do 
                            entretenimento superficial. Ela visa despertar emoções mais profundas, promover a 
                            conexão emocional com a atividade e aumentar o engajamento dos participantes.
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