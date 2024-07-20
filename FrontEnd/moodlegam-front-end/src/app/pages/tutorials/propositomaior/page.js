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
                            <h3 id="plugin-title">
                                Plugin: 
                                <span id="plugin-name">
                                    No momento em que este trabalho foi realizado, não existe plugin que implementa esta técnica. Porém 
                                    existe uma forma de implementar em uma disciplina, que é descrita abaixo.
                                </span>
                            </h3>


                            
                        
                        </div>
                        
                        <div className="how-to-install">


                            <p>
                                Em ambientes educacionais, a técnica &quot;Propósito Maior&quot; pode ser usada 
                                para tornar a aprendizagem mais envolvente e significativa. 
                                Por exemplo, um aplicativo de aprendizagem de idiomas pode adicionar elementos de 
                                progressão, recompensas e desafios para motivar os alunos a continuarem aprendendo 
                                e alcançarem níveis mais elevados de proficiência.

                            </p>
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}