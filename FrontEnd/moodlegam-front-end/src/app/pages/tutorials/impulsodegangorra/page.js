import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function ImpulsoDeGangorra(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Impulso de Gangorra</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>SeeSaw Bump</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Impulso de Gangorra&quot; é uma estratégia de gamificação que envolve balancear as 
                            ações dos usuários de forma que as suas decisões e atividades possam ter um impacto 
                            alternado, semelhante ao movimento de uma gangorra. Isso pode criar um senso de dinamismo 
                            e envolvimento, pois os usuários se sentem incentivados a responder ativamente às mudanças 
                            na situação do jogo.
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
                                Em um ambiente de aprendizagem, o &quot;Impulso de Gangorra&quot; pode ser utilizado para 
                                equilibrar entre diferentes métodos de ensino ou temas de estudo. Por exemplo, 
                                a atenção pode alternar entre aulas teóricas e atividades práticas, incentivando 
                                os alunos a adaptarem-se a diferentes estilos de aprendizagem.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}