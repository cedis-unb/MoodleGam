import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"

export default function CronometroRegressivo(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Cronômetro Regressivo</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Countdown Timer</i></h2>
                    
                    
                    <BlackHatBox/>
                    
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Cronômetro Regressivo&quot; é uma estratégia de gamificação que introduz um elemento 
                            de tempo em uma atividade ou tarefa. Isso cria uma sensação de urgência, que 
                            pode incentivar os usuários a se envolverem mais rapidamente e manterem o foco 
                            na tarefa em mãos.

                            Nesse frenesi, as pessoas rapidamente se superam antes que o tempo se esgote. 
                            Este efeito é uma combinação de um “Cronometro regressivo” onde os usuários 
                            sentem que estão tão perto do objetivo que correm para completá-lo.

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
                                    existe uma forma de implementar em uma disciplina, que é utilizando a tarefa (<a href="https://producao-cead.gitbook.io/aprender-moodle/v/docentes-configuracoes-pedagogicas/configuracoes-pedagogicas/atividades/tarefa">Clique aqui</a>)
                                    , ou olhando descrição abaixo.
                                </span>
                            </h3>


                            
                        
                        </div>
                        
                        <div className="how-to-install">


                            <p>
                                Alguns cursos online ou testes usam &quot;Cronômetros Regressivos&quot; para limitar 
                                o tempo que os alunos têm para completar um módulo ou responder a uma pergunta. 
                                Isso pode ajudar a garantir que os alunos se mantenham focados e engajados.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}