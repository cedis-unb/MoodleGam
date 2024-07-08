import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"

export default function CartaEscarlate(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Carta Escarlate</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Scarlet Letter</i></h2>
                    
                    
                    <BlackHatBox/>
                    
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Carta Escarlate" é uma estratégia de gamificação que envolve a exposição 
                            de um erro ou fracasso de um jogador para motivar uma mudança de comportamento 
                            ou incentivar a melhoria. O nome faz referência ao romance de Nathaniel Hawthorne, 
                            onde a personagem principal é obrigada a usar uma letra "A" escarlate como uma 
                            marca de sua transgressão.

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
                                Em um aplicativo de aprendizado de idiomas, a "Carta Escarlate" pode 
                                ser utilizada para marcar palavras ou frases que o usuário frequentemente erra. 
                                Isso pode motivar o usuário a concentrar seus esforços de estudo nessas áreas problemáticas.
                            </p>
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}