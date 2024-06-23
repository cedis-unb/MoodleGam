import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"

export default function Elitismo(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Elitismo</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Elitism</i></h2>
                    
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Elitismo instila orgulho de grupo, o que significa 
                            que cada membro tenta assegurar o orgulho do grupo 
                            por meio de ações específicas. Essa técnica 
                            refere-se à incorporação de elementos de 
                            jogo que incentivam a competição e a busca por 
                            status ou privilégios dentro de um grupo ou 
                            comunidade de jogadores.

                            A técnica "Elitismo" busca criar uma 
                            dinâmica em que os jogadores se esforcem 
                            para se destacar dos demais, alcançando uma 
                            posição de prestígio ou superioridade em 
                            relação aos outros participantes. 
                            Essa abordagem pode envolver sistemas de 
                            classificação, recompensas exclusivas ou 
                            acesso a conteúdo restrito para aqueles que 
                            atingem um determinado nível de habilidade 
                            ou desempenho.
                        </p>
                        
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">MoodleGame</span></h3>
                            <a>(www.moodle.com.br)</a>
                        </div>
                        
                        <div className="how-to-install">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Image 
                                src="/img/logo_image.png"
                                width={500}
                                height={500}
                                unoptimized={true}
                            />

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. with the release of Letraset sheets containing Lorem Ipsum passages, and 
                                more recently with desktop publishing software like Aldus PageMaker including versions of 
                                Lorem Ipsum.
                            </p>
                            </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}