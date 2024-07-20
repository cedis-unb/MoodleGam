import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PausaTorturante(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Pausa Torturante</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Torture Break</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Pausa Torturante&quot; é uma estratégia de gamificação que envolve criar uma expectativa ou 
                            suspense que faz o usuário querer voltar para ver o resultado ou a continuação de algo. 
                            Isso pode aumentar o engajamento dos usuários, mantendo-os em suspense e incentivando-os a 
                            retornar regularmente à plataforma ou jogo.

                            Nessa técnica o usuário deve esperar um intervalo de tempo, independentemente de suas ações. 
                            Se o jogador permanecer colado ao monitor por horas, será de grande valia para a gamificação
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
                                Em um curso online, uma &quot;Pausa Torturante&quot; pode ser a promessa de revelar uma informação 
                                importante ou interessante na próxima aula, incentivando os alunos a continuarem com o 
                                curso.
                                <br></br><br></br>
                                Na prática, essa técnica pode funcionar da seguinte forma: Um professor passa uma tarefa
                                para a turma, e essa tarefa deve conter uma dificuldade média, de forma que os alunos
                                pensem bastante ou tenham muito trabalho para resolver o problema, mas nada que seja 
                                impossível ou desanimador. Isso gera uma certa expectativa para a próxima 
                                aula, e os estudantes ficarão curiosos para saber a solução do problema dado na tarefa.
                                Dessa forma, os alunos darão atenção para às intruções passadas pelo professor durante a aula,
                                gerando engajamento.

                        

                            </p>
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}