    import Image from "next/image";
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
                            e diga que eles fazem parte de um conjunto maior (uma coleção). "Conjunto de Coleção" é uma 
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
                                <h3 id="plugin-title">Plugin: <span id="plugin-name">MoodleGame</span></h3>
                                <a>(www.moodle.com.br)</a>
                            </div>
                            
                            <div className="how-to-install">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Image 
                                        src="/img/logo_image.png"
                                        width={500}
                                        height={500}
                                        unoptimized={true}
                                    />

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. with the release of Letraset sheets containing Lorem Ipsum passages, and 
                                        more recently with desktop publishing software like Aldus PageMaker including versions of 
                                        Lorem Ipsum.
                                    </p>
                                </div>
                        </div>
                        
                    </div>
                
                </div>

            </Background>
            

        );
    }