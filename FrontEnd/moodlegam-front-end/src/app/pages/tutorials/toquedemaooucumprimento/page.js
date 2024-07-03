import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function ToqueDeMaoOuCumprimento(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Toque de Mão ou Cumprimento</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>High Five</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            O "Toque de Mão" ou "Toca aqui" é uma técnica de gamificação que envolve o 
                            reconhecimento de pequenas vitórias ou realizações do usuário. Esta estrátegia 
                            está relacionada com a ideia de dar feedback positivo para encorajar a continuação 
                            do bom comportamento ou desempenho. Um "toque de mão" é geralmente uma forma rápida e 
                            fácil de mostrar aprovação ou apoio.

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
                                Em uma plataforma de aprendizado online, os alunos podem receber um "toque de mão" 
                                na forma de feedback positivo imediato após a conclusão de um módulo de aprendizado 
                                ou após dar uma resposta correta em um questionário.
                                <br></br><br></br>
                                A técnica do "Toque de Mão" mostra a importância de dar feedback positivo e 
                                reconhecimento, mesmo para pequenas conquistas. Ela pode ser uma forma eficaz de 
                                motivar os usuários a continuar seu progresso, pois reforça o comportamento positivo.
                                <br></br><br></br>
                                No entanto, é importante garantir que o "Toque de Mão" seja dado de maneira adequada e autêntica, para que não pareça forçado ou insincero. Um "Toque de Mão" bem implementado pode ajudar a criar uma experiência mais positiva e gratificante para o usuário.
                                
                            </p>
                        </div> 
                        
                        
                        
                    </div>
                    
                </div>
                    
            </div>

        </Background>
        

    );
}