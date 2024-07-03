import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function Pontos(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Pontos</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Points</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A pontuação é utilizada para manter a contagem do progresso do jogador. "Pontos" é uma estratégia de gamificação 
                        muito comum que envolve conceder aos usuários pontos por completar certas ações ou atingir certos objetivos. 
                        Os pontos funcionam como um sistema de recompensa quantificável que pode aumentar a motivação do usuário, 
                        proporcionar feedback imediato e criar uma sensação de progresso e realização.

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

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_xp">https://moodle.org/plugins/block_xp</a></p>
                            </div>
                            
                        </div>
                        
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Ranking Block</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_ranking">https://moodle.org/plugins/block_ranking</a></p>
                            </div>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">H5P</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://h5p.org/content-types-and-applications">https://h5p.org/content-types-and-applications</a></p>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
                    
            </div>

        </Background>
        

    );
}