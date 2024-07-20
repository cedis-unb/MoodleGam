"use client"
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"


export default function Coautor(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">
                    <h1>Coautor</h1>
                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Co-Creator</i></h2>
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Essa técnica refere-se à incorporação de elementos de jogo que envolvem os
                            participantes como coautores ou colaboradores ativos na criação ou 
                            construção de algo dentro do contexto em que a gamificação é aplicada.

                            A técnica &quot;Coautor&quot; ou &quot;Co-Criador&quot; busca promover a participação ativa e a 
                            criatividade dos participantes, permitindo que eles contribuam com ideias, 
                            soluções ou conteúdos para moldar a experiência de jogo ou o resultado 
                            final de um projeto. Essa abordagem incentiva a colaboração, o senso de 
                            propriedade e a sensação de realização dos participantes.
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
                                Na área da educação e treinamento, a técnica &quot;Coautor&quot; pode ser aplicada para 
                                envolver os alunos como coautores no processo de aprendizagem. Por exemplo, 
                                em um curso online, os participantes podem ser convidados a criar conteúdos, 
                                como apresentações ou projetos colaborativos, que serão compartilhados com a turma. 
                                Essa abordagem gamificada estimula a participação ativa, o compartilhamento de 
                                conhecimento e a co-criação de um ambiente de aprendizagem enriquecedor.
                            </p>
                        </div>

                    </div>
                
                </div>
            </div>

            
            

        </Background>



    )
}