import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function ControleEmTempoReal(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Controle em Tempo Real</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Real-Time Control</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Permite aos jogadores controlarem suas opções em tempo real em direção a uma meta. 
                            "Controle em Tempo Real" é uma estratégia de gamificação que envolve permitir que 
                            os usuários influenciem ou controlem eventos em tempo real. Isso pode ajudar a aumentar o 
                            engajamento dos usuários, proporcionando uma sensação de agência e influência direta 
                            sobre o resultado.
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
                                Em uma aula online ao vivo, os alunos podem ser convidados a responder 
                                a perguntas ou participar de atividades em tempo real. Este é um exemplo 
                                de "Controle em Tempo Real", pois permite que os alunos influenciem diretamente a aula.
                                <br></br><br></br>
                                Ao discutir a técnica de "Controle em Tempo Real", é 
                                importante entender seu papel em aumentar o engajamento dos 
                                usuários e proporcionar uma sensação de agência.

                                No entanto, é crucial garantir que os usuários tenham as informações e o 
                                suporte necessários para fazer escolhas informadas e que o controle em 
                                tempo real não leve a situações de pressão ou estresse indevidos. 
                                Além disso, é importante considerar a possibilidade de os usuários 
                                fazerem escolhas que possam ter consequências negativas e planejar 
                                como essas situações serão gerenciadas.
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}