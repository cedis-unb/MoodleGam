import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function EscolhaBrilhante(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Escolha Brilhante</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Glowing Choice</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Escolha Brilhante" é uma estratégia de gamificação que envolve 
                            destacar ou ressaltar uma opção específica para orientar os 
                            usuários em uma determinada direção. Isso pode facilitar a 
                            tomada de decisão e ajudar os usuários a entenderem melhor qual 
                            ação eles devem realizar em seguida.

                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin:  
                                <span id="plugin-name">
                                    No momento em que este trabalho foi realizado, não existe plugin que implementa 
                                    esta técnica. Porém 
                                    existe uma forma de implementar em uma disciplina, que é descrita abaixo.
                                </span>
                            </h3>

                        </div>
                        
                        <div className="how-to-install">
                                

                                <p>
                                    Em uma plataforma de aprendizado online, a "Escolha Brilhante" pode ser usada 
                                    para destacar um curso específico ou um recurso de aprendizado que os alunos 
                                    devem utilizar. Isso pode orientar os alunos na direção certa e facilitar a 
                                    navegação pela plataforma.
                                </p>
                            </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}