import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
export default function DesbloqueioDeMarco(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Desbloqueio de Marco</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Milestone Unlock</i></h2>
                    <WhiteHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        O jogador tem acesso a novas possibilidades quando uma etapa é atingida. "Desbloqueio de Marco" é 
                        uma estratégia de gamificação que envolve a liberação de conteúdo novo, características, ou 
                        recompensas quando os usuários atingem determinados pontos ou "marcos" na sua progressão. 
                        Isso pode aumentar o engajamento dos usuários, ao oferecer 
                        incentivos e recompensas tangíveis que encorajam o progresso contínuo e a realização de objetivos.

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

                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP</span></h3>
                            
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