import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function RitmoDeOpcoes(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Ritmo de Opções</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Options Pacing</i></h2>
                    
                    <ExtrinsicBox/>
                    <BlackHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Ritmo de Opções&quot; é uma estratégia de gamificação que envolve o desbloqueio progressivo 
                            de opções e escolhas para os usuários conforme avançam ou alcançam certos marcos. 
                            Isso pode ajudar a manter os usuários engajados, incentivando-os a continuar a 
                            participar para desbloquear mais opções.
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
                            
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Trail Format</span></h3>

                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/format_trail">https://moodle.org/plugins/format_trail</a></p>

                                
                            </div>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}