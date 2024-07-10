import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function ConstruirDoZero(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Construir do Zero</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Build from Scratch</i></h2>
                            
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    Transmite a ideia que é bom começar “do início”, ao invés de receber 
                                    algo já pronto. "Construir do Zero" é uma estratégia de gamificação que 
                                    envolve dar aos usuários a oportunidade de criar ou personalizar algo 
                                    desde o início. Isso pode aumentar o envolvimento do usuário, já que 
                                    as pessoas tendem a valorizar mais as coisas que ajudaram a criar. 
                                    Além disso, essa estratégia pode proporcionar uma sensação de propriedade e 
                                    realização.

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
                                        Em um ambiente educacional, os alunos podem ter a tarefa de 
                                        "construir do zero" um projeto de pesquisa ou uma apresentação. 
                                        Este processo pode melhorar a compreensão do material e proporcionar 
                                        um sentido de realização.
                                    </p>
                                </div> 
                                
                                
                            </div>
                            
                        </div>

                        
                    
                    </div>

        </Background>
        

    );
}