import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
export default function BarraDeProgresso(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Barra de Progresso</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Progress Bar</i></h2>
                            <WhiteHatBox/>
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                A "Barra de Progresso" é uma estratégia na gamificação que proporciona aos usuários uma representação 
                                visual do seu progresso em direção a um objetivo ou uma tarefa. Ela oferece um feedback instantâneo e 
                                contínuo sobre o progresso do usuário, o que pode aumentar a motivação e a sensação de realização. 
                                <br></br> <br></br>
                                Essa técnica permite ao jogador visualizar claramente o seu desenvolvimento na direção de um dado objetivo. 
                                Geralmente são utilizados valores percentuais para indicar o progresso, mas a unidade de contagem varia de 
                                acordo com o objetivo a ser alcançado.

                                </p>
                                
                            </div>
                            <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                        </div>

                        <div className="tech-template-how">
                            <h2>Como implementar</h2>
                            
                            <div className="tech-plugins">
                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">BlockGame</span></h3>
                                    <a href="https://moodle.org/plugins/block_game">(https://moodle.org/plugins/block_game)</a>
                                </div>

                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">Completion Levels</span></h3>
                                    <a href="https://moodle.org/plugins/block_completion_levels">(https://moodle.org/plugins/block_completion_levels)</a>
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