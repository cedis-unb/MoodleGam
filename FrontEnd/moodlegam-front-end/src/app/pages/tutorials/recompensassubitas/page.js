import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function RecompensasSubitas(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Recompensas Súbitas</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Sudden Rewards</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Recompensas Súbitas&quot; é uma estratégia de gamificação que envolve surpreender os 
                            usuários com recompensas não previstas. Essa abordagem pode aumentar o engajamento 
                            dos usuários, ao criar uma sensação de prazer e satisfação inesperada, 
                            incentivando os usuários a continuarem interagindo na esperança de receber mais 
                            recompensas surpresas.
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
                                Em uma sala de aula, um professor pode utilizar &quot;Recompensas Súbitas&quot; 
                                para incentivar a participação e o envolvimento dos alunos, oferecendo 
                                pontos extras ou prêmios para respostas corretas não esperadas ou 
                                contribuições úteis para a aula.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}