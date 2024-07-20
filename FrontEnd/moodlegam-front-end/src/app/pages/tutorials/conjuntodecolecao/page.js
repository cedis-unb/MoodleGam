    import Link from "next/link";
    import "../../../components/TechniqueTemplate/style.css"
    import Background from "../../../components/Background";
    import ExtrinsicBox from "@/app/components/ExtrinsicBox"

    export default function ConjuntoDeColecao(){



        return (
            <Background>
                <div className="tech-template-body">
                    <div className="tech-template-header">

                        <h1>Conjuntos de Coleção</h1>

                    </div>

                    <div className="tech-template-subheader">
                        <h2>Nome da técnica em inglês: <i>Collection Set</i></h2>
                        
                        <ExtrinsicBox/>
                    </div>

                    <div className="tech-template-description">
                        <h2>Descrição da técnica</h2>
                        <div className="tech-description-text">
                            <p>
                            Um conjunto de itens que só estará completo se todos estiverem reunidos. Dê ao jogador alguns itens 
                            e diga que eles fazem parte de um conjunto maior (uma coleção). &quot;Conjunto de Coleção&quot; é uma 
                            estratégia de gamificação que envolve incentivar os usuários a coletar um grupo de itens ou 
                            conquistas específicas. A necessidade de completar um conjunto pode motivar os usuários a 
                            continuar a interagir com o sistema para adquirir todos os itens do conjunto. 
                            Isso pode aumentar a retenção de usuários e o tempo de engajamento.

                            </p>
                        </div>
                        <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                    </div>

                    <div className="tech-template-how">
                        <h2>Como implementar</h2>
                        
                        <div className="tech-plugins">

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


                            <div className="plugin-name-link">
                                <h3 id="plugin-title">Plugin: <span id="plugin-name">Stamp Collection</span></h3>

                                <div className="how-to-install">
                                    <p>Link para a página do plugin: <a  target="_blank" href="https://moodle.org/plugins/mod_stampcoll">https://moodle.org/plugins/mod_stampcoll</a></p>

                                </div>
                            </div>
                            

                        </div>

                        
                        
                    </div>
                
                </div>

            </Background>
            

        );
    }