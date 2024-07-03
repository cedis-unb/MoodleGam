import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function LutaContraOChefe(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Luta contra o chefe</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Boss fight</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Luta Contra o Chefe" é uma estratégia de gamificação onde os usuários 
                            enfrentam um desafio significativo que serve como uma barreira para o próximo nível 
                            ou etapa. Isso pode criar um senso de conquista e recompensa quando o desafio é superado, 
                            aumentando o engajamento dos usuários.

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
                                Em um curso online, cada módulo poderia terminar com uma avaliação abrangente ou 
                                projeto que testa tudo o que o aluno aprendeu até então. Essa avaliação é o "chefe" 
                                que precisa ser vencido para avançar para o próximo módulo.
                                <br></br><br></br>
                                Ao analisar a técnica "Luta Contra o Chefe", percebemos que ela serve como uma excelente ferramenta 
                                para consolidar aprendizados e motivar usuários através do estabelecimento de desafios significativos. 
                                Estes desafios, quando superados, trazem uma sensação de realização e progresso que motiva o usuário a 
                                continuar.
                                <br></br><br></br>
                                No entanto, é importante que os "chefes" estejam adequadamente alinhados com as habilidades e conhecimentos que os usuários possuem, para que estes desafios sejam difíceis, mas viáveis. Uma "Luta Contra o Chefe" mal planejada pode levar à frustração e desengajamento. Portanto, o planejamento cuidadoso e o alinhamento com os objetivos dos usuários são essenciais ao implementar essa técnica.
                            </p>
                        </div> 
                        
                        
                        
                    </div>
                    
                </div>
                    
            </div>

        </Background>
        

    );
}