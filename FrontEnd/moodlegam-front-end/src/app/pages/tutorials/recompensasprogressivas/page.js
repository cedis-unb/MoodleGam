import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function RecompensasProgressivas(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Recompensas Progressivas</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Rolling Rewards</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Recompensas Progressivas" é uma estratégia de gamificação que envolve o 
                            fornecimento de prêmios ou benefícios aos usuários de maneira gradual ou sequencial. 
                            Isso pode aumentar o engajamento dos usuários, incentivando a continuidade e o 
                            progresso constante.

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
                                Em um aplicativo de aprendizado, as "Recompensas Progressivas" podem ser usadas para 
                                incentivar a continuidade do aprendizado. Por exemplo, um usuário pode ganhar medalhas ou 
                                insígnias à medida que completa módulos ou alcança certos marcos no processo de aprendizado.
                                <br></br><br></br>
                                Ao utilizar a técnica de "Recompensas Progressivas", é importante garantir que as 
                                recompensas são atraentes e valiosas para os usuários. Além disso, é importante 
                                garantir que as metas ou marcos são alcançáveis, para evitar a frustração dos usuários.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}