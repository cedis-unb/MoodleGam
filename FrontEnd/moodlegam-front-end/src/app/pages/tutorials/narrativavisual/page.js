import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function NarrativaVisual(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Narrativa Visual</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Visual Storytelling</i></h2>
                    
                    <IntrinsicBox/>
                    <BlackHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        A "Narrativa Visual" é uma estratégia de gamificação que utiliza imagens, gráficos, infográficos, vídeos 
                        ou outros elementos visuais para contar uma história ou transmitir informações. 
                        A narrativa visual pode ser uma ferramenta poderosa para aumentar o engajamento dos usuários, pois 
                        muitas pessoas respondem melhor a informações visuais do que a textos escritos.
                        <br></br> <br></br>
                        
                        Enquanto uma abordagem de jogo ou gamificação não precisa necessariamente de uma narrativa, uma 
                        história pode adicionar fantasia e um tema à experiência. Uma narrativa visual pode ajudar um 
                        jogador a mergulhar melhor em um exercício mundano e chato e experimentar um significado e 
                        propósito completos de fantasia.

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


                    </div>


                    <div className="plugin-name-link">
                        
                        <h3 id="plugin-title">Plugin: <span id="plugin-name">Ludic</span></h3>

                        <div className="how-to-install">
                            <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/format_ludic">https://moodle.org/plugins/format_ludic</a></p>

                            
                        </div>
                    </div>

                    <div className="plugin-name-link">
                        
                        <h3 id="plugin-title">Plugin: <span id="plugin-name">H5P</span></h3>

                        <div className="how-to-install">
                            <p>Link para a página do plugin: <a  target="_blank" href="https://h5p.org/content-types-and-applications">https://h5p.org/content-types-and-applications</a></p>

                        
                        </div>
                    </div>

                    <div className="plugin-name-link">
                        
                        <h3 id="plugin-title">Plugin: <span id="plugin-name">QuizVenture</span></h3>

                        <div className="how-to-install">
                            <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/mod_quizgame">https://moodle.org/plugins/mod_quizgame</a></p>

                        
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}