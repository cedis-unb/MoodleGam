import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function EmblemasOuInsignias(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Emblemas ou Insígnias</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Badges</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Emblemas&quot; ou &quot;Insígnias&quot; são uma estratégia 
                            popular de gamificação que envolve premiar os 
                            usuários com distintivos virtuais para 
                            reconhecer suas conquistas ou habilidades. 
                            Este método é eficaz para incentivar os 
                            usuários a alcançar objetivos, aprender 
                            novas habilidades ou participar de certas 
                            atividades.

                            Os emblemas podem vir de várias formas - estrelas, 
                            cintos, chapéus, uniformes, troféus, 
                            medalhas, etc. 
                            Estes símbolos permitem 
                            que o jogador demonstre de maneira clara, tanto para sim quanto para os outros, 
                            suas conquistas e realizações.



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
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Open Badge Factory</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/local_obf">https://moodle.org/plugins/local_obf</a></p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP+</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_xp">https://moodle.org/plugins/block_xp</a></p>
                            </div>
                            
                        </div>
                        
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">UNEDTrivial</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/mod_unedtrivial">https://moodle.org/plugins/mod_unedtrivial</a></p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Completion Levels</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_completion_levels">https://moodle.org/plugins/block_completion_levels</a></p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Badge Ladder</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/local_bs_badge_ladder">https://moodle.org/plugins/local_bs_badge_ladder</a></p>
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Stamp Collection</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/mod_stampcoll">https://moodle.org/plugins/mod_stampcoll</a></p>
                            </div>
                            
                        </div>

                        
                        
                    </div>
                    
                </div>
                    
            </div>

        </Background>
        

    );
}