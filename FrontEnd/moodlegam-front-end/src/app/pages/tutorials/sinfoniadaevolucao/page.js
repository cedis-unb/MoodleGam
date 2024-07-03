import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function SinfoniaDaEvolucao(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Sinfonia da evolução</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>LevelUp Symphony</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A "Sinfonia de Evolução" é uma estratégia na gamificação que combina a 
                        satisfação de alcançar um novo nível com uma série de recompensas que chegam ao mesmo tempo. 
                        Isto cria uma experiência altamente gratificante e motivadora para o usuário, encorajando-o a 
                        continuar a interagir com o sistema, produto ou serviço.

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
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">MoodleGame</span></h3>
                        
                        
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
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Completion Levels</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_completion_levels">https://moodle.org/plugins/block_completion_levels</a></p>
                            </div>
                            
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}