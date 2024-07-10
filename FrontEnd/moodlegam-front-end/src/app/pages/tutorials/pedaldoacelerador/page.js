import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PedalDoAcelerador(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Pedal do Acelerador</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Throttles</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Pedal do acelerador" ou também conhecido como "Reguladores" é uma 
                            estratégia de gamificação que se refere ao controle de acesso ou 
                            limitação da velocidade com a qual os jogadores podem progredir em um jogo. 
                            Isso é feito estabelecendo limites no jogo, tais como limites de tempo, 
                            limites de recursos, ou limites de tentativas. Isso pode criar um senso 
                            de urgência, encorajar jogabilidade estratégica, e ajudar a prolongar a 
                            vida útil do jogo.
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
                                Em uma plataforma de aprendizado online, os alunos podem ter um número 
                                limitado de tentativas para completar um teste ou tarefa. Este é um exemplo 
                                de "Reguladores", pois limita o progresso rápido e força os alunos a estudar 
                                e se preparar adequadamente.

                            </p>
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}