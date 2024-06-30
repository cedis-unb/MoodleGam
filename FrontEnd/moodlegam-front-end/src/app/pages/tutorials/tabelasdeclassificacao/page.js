import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

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
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">BlockGame</span></h3>
                            <a href="https://moodle.org/plugins/block_game">(https://moodle.org/plugins/block_game)</a>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP</span></h3>
                            <a href="https://moodle.org/plugins/block_xp">(https://moodle.org/plugins/block_xp)</a>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Ranking Block</span></h3>
                            <a href="https://moodle.org/plugins/block_ranking">(https://moodle.org/plugins/block_ranking)</a>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">UNEDTrivial</span></h3>
                            <a href="https://moodle.org/plugins/mod_unedtrivial">(https://moodle.org/plugins/mod_unedtrivial)</a>
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Badge Ladder</span></h3>
                            <a href="https://moodle.org/plugins/local_bs_badge_ladder">(https://moodle.org/plugins/local_bs_badge_ladder)</a>
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