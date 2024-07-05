import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function CenouraDoGeneral(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Cenoura do General</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>General's Carrot</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Remetendo à ideia de uma cenoura pendurada na frente de um coelho para engajá-lo, 
                            "Cenoura do General" é uma estratégia de gamificação que envolve fornecer 
                            uma recompensa significativa que só pode ser alcançada após a conclusão 
                            de uma série de tarefas ou objetivos. Isso pode ajudar a motivar os 
                            usuários a continuarem se esforçando e a persistir através de desafios.

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
                                Em uma plataforma de aprendizado online, um aluno pode receber um certificado ou 
                                emblema especial após completar um conjunto de cursos ou atingir um 
                                certo nível de proficiência. Isso é um exemplo de "Cenoura do General", 
                                pois incentiva os alunos a continuar aprendendo para alcançar a recompensa.
                                
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}