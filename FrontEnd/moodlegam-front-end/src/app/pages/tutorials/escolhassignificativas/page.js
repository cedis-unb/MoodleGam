import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function EscolhasSignificativas(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Escolhas Significativas / Escolha de Plantas</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Plant Picker / Meaningful Choices</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Além das escolhas que permitem que as pessoas se sentem como eles estão 
                            habilitadas, existem opções que são verdadeiramente significativas e 
                            demonstram preferências. Tais preferências são pessoais e não são 
                            necessariamente superiores a outras. 
                            Esta técnica assemelha-se a decidir o que plantar em um jardim, é muitas
                            vezes uma preferência de estilo e estratégia, algo que é o cerne desta Motivação Básica.
                            <br></br><br></br>
                            "Escolha de Plantas / Escolhas Significativas" é uma estratégia de 
                            gamificação que envolve permitir que os usuários façam escolhas 
                            que têm um impacto real e significativo na sua experiência. 
                            Isso pode ajudar a aumentar o engajamento dos usuários, 
                            proporcionando uma sensação de agência e tornando a 
                            experiência mais pessoal e relevante para eles.

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
                                ter a opção de escolher entre diferentes trajetórias de aprendizado 
                                ou tópicos de estudo, cada um dos quais pode levar a diferentes 
                                resultados de aprendizado. Este é um exemplo de "Escolha de Plantas / Escolhas 
                                Significativas", pois permite que os alunos moldem sua própria experiência de aprendizado.
                                
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}