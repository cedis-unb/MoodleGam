import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Monitoramento(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Monitoramento</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Monitoring</i></h2>
                            
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    &quot;Monitoramento&quot; é uma estratégia de gamificação que envolve o rastreamento e a 
                                    análise do comportamento e das atividades do usuário. Isso pode permitir um 
                                    melhor entendimento do usuário, feedback personalizado e ajustes no sistema 
                                    para aumentar o engajamento e a satisfação do usuário.

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
                                        Em um LMS(Sistemas de Gestão de Aprendizagem), o &quot;Monitoramento&quot; é usado para acompanhar o progresso do aluno, o 
                                        tempo gasto em cada módulo e as notas obtidas. Isso permite feedback 
                                        personalizado e intervenções educacionais direcionadas para melhorar o 
                                        aprendizado do aluno.

                                    </p>
                                </div> 
                                
                                
                            </div>
                            
                        </div>

                        
                    
                    </div>

        </Background>
        

    );
}