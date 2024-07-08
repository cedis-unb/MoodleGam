import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"

export default function SepulturaVisual(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Sepultura Visual</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Visual Grave</i></h2>
                    
                    
                    <BlackHatBox/>
                    
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Túmulo Visual" é uma estratégia de gamificação que envolve a representação 
                            visual de perdas ou erros. Isso pode incluir o uso de cores, ícones, animações 
                            ou outros elementos visuais para representar falhas ou perdas. 
                            A ideia é destacar áreas onde os usuários precisam melhorar e motivá-los a superar desafios.
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
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Exaclick</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/mod_exagames">https://moodle.org/plugins/mod_exagames</a></p>
                                
                            </div>
                            
                        </div>
                        
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Game</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/mod_game">https://moodle.org/plugins/mod_game</a></p>
                                
                            </div>
                            
                        </div>

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">H5P</span></h3>
                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://h5p.org/content-types-and-applications">https://h5p.org/content-types-and-applications</a></p>
                                
                            </div>
                            
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}