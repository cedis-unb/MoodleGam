import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Fossos(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Fossos</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Moats</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Fossos&quot; é uma estratégia de gamificação que envolve a criação de barreiras ou desafios 
                            que os usuários devem superar para alcançar um objetivo. Isso pode aumentar o 
                            engajamento dos usuários, ao adicionar um elemento de desafio e satisfação ao superar 
                            obstáculos.
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
                                Em uma plataforma de aprendizado online, um &quot;fosso&quot; pode ser um exame ou projeto 
                                final que os alunos devem concluir com sucesso para passar no curso. Isso cria um 
                                desafio que os alunos devem superar, aumentando a satisfação quando conseguem.

                            </p>
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}