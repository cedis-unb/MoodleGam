import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function DinamicasDeCompromisso(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Dinâmicas de Compromisso</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Appointment Dynamics</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Dinâmicas de Compromisso" é uma estratégia de gamificação que envolve criar um evento ou 
                            atividade que ocorre em um horário específico, incentivando os usuários a retornar ou 
                            participar naquele momento. Isso pode ajudar a criar um hábito ou rotina, além de aumentar 
                            o engajamento dos usuários.

                            A técnica dá um momento exato e absoluto para que o usuário possa agir e 
                            provocar algo na gamificação.
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
                                Em aplicativos de aprendizado de idiomas, as "Dinâmicas de Compromisso" podem ser usadas para 
                                organizar aulas ao vivo ou eventos de prática de idiomas em horários específicos. Isso incentiva 
                                os alunos a retornarem ao aplicativo naquele horário específico e ajuda a criar uma rotina de aprendizado.

                            </p>
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}