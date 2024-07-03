import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function TabelasDeClassificacao(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Tabelas de Classificação</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Leaderboards</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A técnica "Tabelas de Classificação", também conhecidas como Ranking, é um elemento do jogo onde 
                        os jogadores são classificados com base num conjunto de critérios. 
                        Os critérios são influenciados pelo comportamento dos jogadores nas suas diversas ações. 
                        Ela permite tanto uma rápida comparação entre jogadores quanto o delineamento de novos objetivos.
                        <br></br> <br></br>
                        As "Tabelas de Classificação" são uma estratégia comum na gamificação que envolve classificar 
                        os usuários com base em suas realizações ou desempenho. Este método é eficaz para estimular 
                        a competição e incentivar os usuários a melhorarem seu desempenho.

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
                                <p>Link para a página do plugin: 
                                    <a target="_blank" href="https://moodle.org/plugins/block_xp">https://moodle.org/plugins/block_xp</a>
                                </p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Ranking Block</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: 
                                    <a target="_blank" href="https://moodle.org/plugins/block_ranking">https://moodle.org/plugins/block_ranking</a>
                                    
                                </p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">UNEDTrivial</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: 
                                    <a target="_blank" href="https://moodle.org/plugins/mod_unedtrivial">https://moodle.org/plugins/mod_unedtrivial</a>
                                    
                                </p>
                            </div>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Badge Ladder</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: 
                                    <a target="_blank" href="https://moodle.org/plugins/local_bs_badge_ladder">https://moodle.org/plugins/local_bs_badge_ladder</a>
                                    
                                </p>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}