import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function EasterEggs(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Easter Eggs</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Easter Eggs</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Easter Eggs&quot; são surpresas ou recursos ocultos inseridos 
                            intencionalmente em um programa, jogo, site ou qualquer 
                            outro ambiente digital. Eles são feitos para surpreender, 
                            divertir ou recompensar os usuários que os descobrem. 
                            Essa técnica estimula a curiosidade, o engajamento e o 
                            senso de realização dos usuários.

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
                            
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP+</span></h3>

                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/block_xp">https://moodle.org/plugins/block_xp</a></p>

                                
                            </div>
                        </div>


                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}