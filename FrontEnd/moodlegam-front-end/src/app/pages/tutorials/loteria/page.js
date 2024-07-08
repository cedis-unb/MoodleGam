import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function Loteria(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Loteria</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Lottery - Rolling Rewards</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Loteria" é uma estratégia de gamificação que envolve a introdução de elementos de 
                            sorte e aleatoriedade, na qual os usuários têm a oportunidade de ganhar 
                            recompensas através de um sorteio aleatório. Essa técnica pode aumentar a 
                            excitação e a antecipação, incentivando a participação e o engajamento dos usuários.

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
                                Em um ambiente de aprendizado, a "Loteria" pode ser usada para incentivar 
                                a participação dos alunos. Por exemplo, os professores podem criar um 
                                sorteio onde os alunos ganham entradas de cinema por completar tarefas, 
                                participar ativamente das aulas ou alcançar bons resultados, com prêmios 
                                sendo sorteados no final de um período.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}