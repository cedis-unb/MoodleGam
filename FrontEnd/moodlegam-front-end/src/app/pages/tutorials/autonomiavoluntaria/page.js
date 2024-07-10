import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function AutonomiaVoluntaria(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Autonomia Voluntária</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Voluntary Autonomy</i></h2>
                            <WhiteHatBox/>
                            <IntrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    "Autonomia Voluntária" é uma estratégia de gamificação que envolve permitir que os usuários tenham 
                                    liberdade e escolha em como eles interagem com um sistema ou completam tarefas. Isso pode 
                                    ajudar a aumentar o engajamento dos usuários, dando-lhes um sentido de controle e poder 
                                    sobre a sua experiência.

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