import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PreenchimentoDeLacunas(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Preenchimento de Lacunas</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Blank Fills</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Preenchimento de Lacunas&quot; é uma estratégia de gamificação que envolve permitir que 
                            os usuários completem ou personalizem algo com suas próprias entradas ou escolhas. 
                            Isso pode ajudar a aumentar o engajamento dos usuários, proporcionando uma sensação 
                            de poder e liberdade, permitindo que os usuários expressem sua criatividade.

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
                                Em uma plataforma de aprendizado online, os alunos podem ser solicitados a 
                                preencher lacunas em uma história ou resolver problemas preenchendo as 
                                informações em falta. Este é um exemplo de &quot;Preenchimento de Lacunas&quot;, 
                                pois envolve os alunos de maneira ativa e criativa no processo de aprendizado.
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}