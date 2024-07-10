import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function CurvaDeAprendizado(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Curva de Aprendizado</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Learning Curve</i></h2>
                            
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    "Curva de Aprendizado" refere-se à progressão gradual do desafio e complexidade à medida que o 
                                    usuário ganha habilidade e compreensão ao longo do tempo. Isso é comumente usado em jogos 
                                    para manter o engajamento do jogador, ao mesmo tempo em que incentiva o desenvolvimento de habilidades.

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
                                        Em plataformas de educação online, os materiais do curso podem ser estruturados 
                                        de maneira a apresentar conceitos cada vez mais complexos à medida que o aluno 
                                        avança, refletindo uma "Curva de Aprendizado". Isso pode manter os alunos 
                                        envolvidos e motivados à medida que conquistam novos níveis de compreensão.
                                    </p>
                                </div> 
                                
                                
                            </div>
                            
                        </div>

                        
                    
                    </div>

        </Background>
        

    );
}