import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function CombinacoesEmCadeia(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Combinações em Cadeia</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Chain Combos</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Quando um conjunto encadeado de ações produz um efeito maior do que a soma individual 
                            das partes. As "Combinações em Cadeia" são uma estratégia de gamificação que envolve 
                            recompensar os usuários quando eles realizam uma série de ações ou tarefas em 
                            uma sequência específica. Isso pode ajudar a motivar os usuários a se 
                            envolverem mais profundamente e a explorar diferentes aspectos de uma experiência.


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
                                Em uma plataforma de aprendizado online, os alunos podem 
                                receber uma recompensa extra por completar uma série de cursos 
                                relacionados em uma ordem específica. Este é um exemplo de 
                                "Combinações em Cadeia", pois incentiva os alunos a aprofundar 
                                seu conhecimento em uma área específica.
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}