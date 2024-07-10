import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function OasisNoDeserto(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Oásis no Deserto</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Desert Oasis</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Essa técnica vem do conceito de Oasis (verde e suculento) o que sugere, 
                            inconscientemente, que há um objetivo por detrás desta opção. "Oásis no Deserto" 
                            é uma estratégia de gamificação que envolve proporcionar um alívio ou recompensa 
                            aos usuários após uma tarefa difícil ou um período de esforço intenso. 
                            Este método pode ajudar a manter a motivação do usuário, dando-lhe algo para 
                            esperar e recompensando-o pelo seu trabalho duro.

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
                                    Em um contexto educacional, um professor pode planejar uma atividade divertida ou 
                                    um dia de jogo após uma série de testes ou exames. Este "oásis" proporciona aos 
                                    alunos uma pausa bem-vinda do estudo intensivo e uma oportunidade para relaxar 
                                    e recarregar as energias.
                                    <br></br><br></br>
                                    Ao discutir a técnica "Oásis no Deserto", é importante entender seu papel na 
                                    manutenção da motivação do usuário. Ao proporcionar um alívio ou recompensa após um 
                                    período de esforço intenso, você pode ajudar a manter a motivação do usuário e a 
                                    evitar a fadiga ou o desgaste.

                                    No entanto, é crucial que o "oásis" seja relevante e valioso para o usuário, 
                                    e que seja visto como uma recompensa justa pelo seu trabalho árduo.
                                </p>
                            </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}