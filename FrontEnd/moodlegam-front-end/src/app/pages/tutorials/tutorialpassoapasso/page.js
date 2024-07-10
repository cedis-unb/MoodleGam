import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function TutorialPassoAPasso(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Tutorial passo a passo</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Step-by-Step Tutorial</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            O "Tutorial Passo a Passo" é uma estratégia comum na gamificação que visa ensinar aos 
                            usuários como navegar e usar efetivamente um sistema, produto ou serviço. Ele decompõe a 
                            informação em etapas gerenciáveis, proporcionando aos usuários a oportunidade de aprender e 
                            praticar novas habilidades em um ambiente controlado e sem riscos. Isso pode ajudar a reduzir a 
                            curva de aprendizado e aumentar a confiança e a competência do usuário.

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
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}