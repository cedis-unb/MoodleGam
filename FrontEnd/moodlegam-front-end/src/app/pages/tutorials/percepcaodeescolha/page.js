import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PercepcaoDeEscolha(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Percepção de Escolha / Escolha do Veneno</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Choice Perception / Poison Picker</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Muitos estudos têm mostrado que as pessoas gostam mais de algo quando lhes 
                            são dadas uma escolha, em comparação com simplesmente ter uma opção. 
                            Isto é verdadeiro mesmo se as múltiplas opções não são tão atraentes 
                            em comparação com a única escolha. Pais com crianças pequenas 
                            reconhecem a influência da percepção escolha.

                            "Escolha do Veneno / Percepção de Escolha" é uma estratégia de 
                            gamificação que envolve permitir que os usuários escolham entre 
                            opções que podem ter consequências positivas e negativas. Isso 
                            pode ajudar a aumentar o engajamento dos usuários, ao proporcionar 
                            uma sensação de agência e influência direta sobre o resultado.

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
                                Em uma plataforma de aprendizado online, os alunos podem ter a 
                                opção de escolher entre diferentes tópicos de estudo, cada 
                                um dos quais pode ter diferentes níveis de dificuldade e 
                                relevância para seus objetivos de aprendizado. 
                                Este é um exemplo de "Escolha do Veneno / Percepção de Escolha", 
                                pois permite que os alunos tomem decisões estratégicas sobre seu aprendizado.
                                
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}