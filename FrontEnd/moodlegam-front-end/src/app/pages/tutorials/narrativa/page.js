"use client"
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"

export default function Narrativa(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">
                    <h1>Narrativa</h1>
                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Narrative</i></h2>
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A maioria dos jogos começam com uma narrativa que dá ao jogador algum contexto sobre por que eles deveriam jogar o jogo.
                        <br></br> <br></br>
                        A técnica da &quot;Narrativa&quot; é um recurso amplamente utilizado em gamificação para envolver e motivar os usuários através da contação de histórias. 
                        Esse método pode criar um contexto atraente e imersivo para uma experiência de gamificação, tornando-a mais envolvente e interessante. 
                        A narrativa também pode fornecer estrutura e significado para as atividades e metas de gamificação, ajudando os usuários a entenderem e 
                        se conectarem com a gamificação em um nível mais profundo

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
                                Muitos cursos on-line e sistemas de aprendizagem usam a 
                                narrativa para tornar o conteúdo do curso mais envolvente. 
                                Por exemplo, um curso de história pode apresentar o conteúdo 
                                como uma série de histórias interligadas, com cada lição 
                                apresentando um novo &apos;capítulo&apos; na história.
                            </p>
                        </div>

                    </div>
                
                </div>
            </div>

            
            

        </Background>



    )
}