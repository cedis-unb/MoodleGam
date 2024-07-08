import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function MiniMissoes(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Mini Missões</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Mini Quests</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Mini Missões" é uma estratégia de gamificação que envolve a criação de pequenos 
                            desafios ou tarefas que os usuários podem completar para progredir ou ganhar recompensas. 
                            Essa técnica pode aumentar o engajamento e a satisfação dos usuários, 
                            proporcionando-lhes objetivos claros e realizáveis e um senso de progresso e realização.

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
                                Em um aplicativo de aprendizado de idiomas, as "Mini Missões" podem ser usadas 
                                para incentivar os usuários a praticar regularmente. Por exemplo, os usuários 
                                podem receber uma "Mini Missão" para aprender 10 novas palavras por dia ou para 
                                praticar a pronúncia de um som particular.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}