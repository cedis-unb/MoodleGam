import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Impulsionadores(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Impulsionadores</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Boosters</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Itens que deixam o jogador mais poderoso e eficaz por um certo tempo. 
                            "Impulsionadores" é uma estratégia de gamificação que envolve fornecer aos 
                            usuários melhorias temporárias ou permanentes que podem ajudá-los a progredir 
                            mais rapidamente ou superar desafios mais facilmente. Isso pode aumentar o engajamento 
                            dos usuários, ao proporcionar alívio de dificuldades, acelerar o progresso ou adicionar 
                            um elemento de estratégia e tomada de decisões.

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
                                Em uma plataforma de aprendizado online, os alunos 
                                podem ter acesso a "impulsionadores" como tutoriais adicionais, dicas ou 
                                ferramentas de estudo que podem ajudá-los a entender melhor os materiais 
                                do curso ou passar nos testes. Este é um exemplo de "Impulsionadores", 
                                pois pode auxiliar os alunos em seu processo de aprendizado.
                                
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}