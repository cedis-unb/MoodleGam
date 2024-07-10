import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function AncoraDeConformidade(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Âncora de Conformidade</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Conformy Anchor</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Cedo nós aprendemos sobre o poder das normas sociais. Esta técnica implementa este efeito em 
                            produtos ou experiências mostrando, através de feedbacks, o quanto os jogadores estão próximos de 
                            uma convenção social. "Âncora de Conformidade" é uma estratégia de gamificação que utiliza o desejo 
                            humano natural de conformidade para motivar comportamentos desejáveis. Isso é feito destacando como 
                            a maioria das pessoas está se comportando ou o que elas estão fazendo, criando assim um 'padrão' que 
                            os outros são incentivados a seguir.
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
                                Em um aplicativo de leitura, os usuários podem ser incentivados a formar 
                                clubes de leitura, discutir livros e recomendar títulos para outros usuários para 
                                ganhar "Tesouros Sociais" na forma de descontos em livros, acesso a títulos 
                                exclusivos ou recursos adicionais.
                                

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}