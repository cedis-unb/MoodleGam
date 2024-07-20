import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function BotaoDaOstentacao(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Botão da Ostentação</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Brag Buttons</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Botões de Ostentação (Brag buttons) é quando uma pessoa de forma explícita e 
                            vocalmente expressa suas realizações e conquistas, enquanto que um Trophy 
                            Shelf permite ao jogador mostrar implicitamente o que têm feito, mesmo sem 
                            falar a respeito. &quot;Botões de Ostentação&quot; é uma estratégia de gamificação que 
                            permite aos usuários compartilhar suas conquistas ou progresso com outros. 
                            Isso pode aumentar o engajamento ao estimular a motivação intrínseca dos usuários 
                            e encorajá-los a buscar maiores realizações.

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
                                Em plataformas de aprendizagem online, a &quot;Mentoria&quot; pode ser incentivada ao 
                                permitir que usuários mais experientes forneçam feedback e orientação para 
                                aqueles que estão aprendendo. Isso pode criar uma comunidade de aprendizagem 
                                colaborativa e aumentar o engajamento dos usuários.

                                <br></br><br></br>

                                Um exemplo dessa técnica está nas turmas de Cálculo 1 do Professor Fragelli no Campus do Gama. Após uma avaliação, são formados grupos de alunos.
                                Os alunos que foram bem se tornam líderes de grupos, e os alunos que ficaram abaixo da média são os integrantes.
                                Esses grupos tem o objetivo dos líderes serem mentores do integrantes, onde listas de exercícios são resolvidas pelos grupos
                                e os líderes tiram dúvidas e acompanham o rendimento dos outros membros. Após o prazo da lista de exercícios
                                terminar, uma outra avaliação valendo somente uma porcentagem da primeira avaliação é realizada para os estudantes que não 
                                alcançaram a média, como uma &quot;segunda chance&quot;. Se os estudantes aumentarem a nota após essa &quot;segunda chance&quot;, suas notas
                                são alteradas e os líderes do grupo ganham nota também caso os membros do seu grupo tenham um bom desempenho na &quot;segunda chance&quot;.
                                O nome desse método é 300, inspirado nos 300 de esparta. Leia mais sobre esse método no link: <a href="https://www.metodo300.com/">https://www.metodo300.com/</a> 
                                

                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}