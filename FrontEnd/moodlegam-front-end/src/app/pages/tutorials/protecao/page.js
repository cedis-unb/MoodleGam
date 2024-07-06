import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Protecao(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Proteção</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Protection</i></h2>
                            
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    "Proteção" é uma estratégia que permite aos jogadores proteger seus recursos, 
                                    progresso ou posições contra perdas ou ataques. Em um contexto de 
                                    gamificação, esta técnica pode aumentar o engajamento ao adicionar 
                                    um elemento de estratégia e a necessidade de planejamento.

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
                                        Em uma plataforma de educação online, a "Proteção" pode se manifestar na forma 
                                        de salvamento automático do progresso do aluno ou de opções para revisar ou 
                                        refazer exames. Este é um exemplo de "Proteção", pois os alunos podem se 
                                        sentir mais à vontade para explorar e aprender sabendo que seu progresso está 
                                        seguro.
                                    </p>
                                </div> 
                                
                                
                            </div>
                            
                        </div>

                        
                    
                    </div>

        </Background>
        

    );
}