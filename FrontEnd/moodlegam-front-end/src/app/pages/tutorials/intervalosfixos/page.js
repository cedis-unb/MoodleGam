import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function IntervalosFixos(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Intervalos Fixos</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Fixed Intervals</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Intervalos Fixos&quot; é uma estratégia de gamificação que 
                            envolve a entrega de recompensas ou o acionamento de eventos 
                            em períodos regulares. Esta técnica pode ajudar a manter a 
                            participação e o engajamento do usuário, incentivando-o a 
                            retornar ao sistema de jogo ou à atividade após o término 
                            de cada intervalo.
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
                            
                            <h3 id="plugin-title">Plugin: <span id="plugin-name">Stash</span></h3>

                            <div className="how-to-install">
                                <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/block_stash">https://moodle.org/plugins/block_stash</a></p>
                                <p>Link para a documentação do plugin: <a  target="_blank" href="https://docs.moodle.org/402/en/blocks/stash">https://docs.moodle.org/402/en/blocks/stash</a></p>

                                <p>
                                    Como configurar: 
                                    <Link
                                        href={{
                                            pathname: `/pages/tutorials/stash`
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