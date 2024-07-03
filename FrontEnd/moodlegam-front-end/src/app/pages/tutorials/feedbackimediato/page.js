import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function FeedbackImediato(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Feedback Imediato</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Instant Feedback</i></h2>
                            <WhiteHatBox/>
                            <IntrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                Permite ao jogador reconhecer imediatamente os resultados do seu trabalho. 
                                "Feedback Imediato" é uma estratégia de gamificação que envolve fornecer aos usuários uma resposta 
                                rápida e clara sobre suas ações ou desempenho. Isso pode ajudar a motivar os usuários, fornecer 
                                reforço positivo para comportamentos desejados e ajudar os usuários a aprender e melhorar.

                                </p>
                            </div>
                            <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                        </div>

                        <div className="tech-template-how">
                            <h2>Como implementar</h2>
                            
                            <div className="tech-plugins">

                                <div className="install-plugin-link">
                                    <h3 id="plugin-title">Tutorial de como instalar um plugin no Moodle:</h3>
                                    
                                    
                                    <Link
                                        href={{
                                            pathname: `/pages/tutorials/instalarplugin`
                                        }}

                                        passHref
                                        legacyBehavior
                                    >
                                        <a target="_blank">
                                            Clique para ver o tutorial
                                        </a>
                                    </Link>
                                </div>

                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">BlockGame</span></h3>
                                    
                                    <div className="how-to-install">
                                        <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/block_game">https://moodle.org/plugins/block_game</a></p>
                                        <p>
                                            Como configurar: 
                                            <Link
                                                href={{
                                                    pathname: `/pages/tutorials/blockGame`
                                                }}

                                                passHref
                                                legacyBehavior
                                            >
                                                <a target="_blank">
                                                    Clique para ver o tutorial
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    
                    </div>

        </Background>
        

    );
}