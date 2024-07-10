import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function RecompensasAleatorias(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Recompensas Aleatórias</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Mystery Boxes / Random Rewards</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Caixas Misteriosas" ou "Recompensas Aleatórias" é uma estratégia de gamificação que 
                            envolve oferecer recompensas ou prêmios que são desconhecidos pelo usuário até que 
                            ele os receba ou os desbloqueie. Isso pode criar um senso de expectativa e emoção, 
                            pois os usuários não sabem o que vão receber.

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
                                Em um ambiente de aprendizado, os professores podem usar "recompensas aleatórias" para 
                                incentivar o engajamento dos alunos. Por exemplo, os alunos podem receber uma "caixa misteriosa" 
                                de materiais de aprendizagem ou recursos após a conclusão de uma tarefa ou projeto. 
                                Isso pode tornar o aprendizado mais emocionante e motivador.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}