import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function Ostentacao(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Ostentação</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Bragging</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Vangloriar-se&quot;, ou popularmente conhecido como &quot;Ostentação&quot;, é uma estratégia 
                            de gamificação que permite que os usuários compartilhem e celebrem suas conquistas. 
                            Esse recurso de exibir as realizações pessoais estimula a competição saudável entre os 
                            usuários e incentiva-os a alcançar mais objetivos.


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
                                Em plataformas de aprendizado, após a conclusão de um curso ou a 
                                obtenção de uma pontuação alta em uma avaliação, os alunos podem ter a 
                                opção de compartilhar suas conquistas nas redes sociais. Isso aumenta o 
                                engajamento e motiva outros estudantes a se empenharem mais em seus estudos.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}