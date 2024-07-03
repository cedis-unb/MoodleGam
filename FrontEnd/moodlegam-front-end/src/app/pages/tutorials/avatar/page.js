import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Avatar(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Avatar</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Avatar</i></h2>
                    
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        Quando o jogador cria uma representação virtual de si mesmo, ele se sente naturalmente envolvido 
                        com esta imagem. Um "Avatar" é uma representação gráfica de um usuário dentro de um jogo ou 
                        ambiente digital. Através desta representação, os usuários podem expressar sua 
                        individualidade, alcançar objetivos e interagir com o ambiente e outros usuários. 
                        O uso de avatares em gamificação pode aumentar o engajamento e a sensação de pertencimento 
                        dos usuários.

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