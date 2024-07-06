import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function VinculoComOMonitor(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Vínculo com o Monitor</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Monitor Attachment</i></h2>
                    
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Esta técnica de jogo que permite que as pessoas 
                            desenvolvem de forma acentuada a sensação de propriedade 
                            de (ou em direção) a algo. Isto é feito através da 
                            indução de um monitoramento constante ou atenção foca 
                            sobre um determinado item de propriedade do jogador. 
                            "Vínculo com o Monitor" é uma estratégia de 
                            gamificação que envolve criar uma conexão 
                            emocional entre o usuário e um elemento ou 
                            personagem do jogo, neste caso, o monitor, 
                            guia ou mentor. 
                            Esta técnica de gamificação tem o objetivo 
                            de aumentar o engajamento e a lealdade do
                            usuário através do estabelecimento de um relacionamento 
                            emocional.

                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
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
                            Em plataformas de aprendizado online, tutores ou mentores virtuais podem estabelecer um 
                            "vínculo com o monitor" com os alunos. Isso pode aumentar o engajamento dos alunos e 
                            melhorar seu desempenho acadêmico.
                            <br></br><br></br>
                            Ao aplicar a técnica de "Vínculo com o Monitor", é importante garantir que a interação 
                            seja autêntica, útil e agradável. A personalização também pode aumentar a eficácia 
                            dessa técnica, pois ajuda a criar uma conexão mais forte.
                        </p>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}