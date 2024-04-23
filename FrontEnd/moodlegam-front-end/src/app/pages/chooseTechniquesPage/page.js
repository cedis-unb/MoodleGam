
import Background from "../../components/Background";
import Image from "next/image";
import "./style.css"
import "../subjectDetailsPage/style.css"

export default function ChooseTechniquePage(){




    return (
        <Background>

            <div className="choose-technique-background">

                <div className="choose-technique-header">

                    <div className="text-warnings">
                        <h1>Passo 2 - Escolha das técnicas de Gamificação</h1>
                        <p>Clique nas técnicas que deseja aplicar em sua disciplina e clique em “Confirmar”</p>
                        <div className="core-drive-help">
                            <Image 
                                src="/img/question.svg"
                                width={30}
                                height={30}
                                unoptimized={true}
                            />
                            <span>Para se informar sobre cada Core Drive e técnica de gamificação, basta clicar em seus respectivos nomes </span>
                        </div>
                        <div className="core-drive-warning">
                            <Image 
                                src="/img/exclamation.svg"
                                width={30}
                                height={30}
                                unoptimized={true}
                            />
                            <span><span id="attention">Atenção</span> : Escolher mais de 10 técnicas de Gamificação gera uma grande diculdade de implementação dessas técnicas</span>
                        </div>
                    </div>
                    <div className="technique-quantity">
                        <div className="technique-quantity-text">
                            <span>Quantidade de técnicas escolhidas: <span className="font-bold">1</span></span>
                        </div>
                        
                        <div className="technique-quantity-text">
                            <span>Dificuldade de implementação: <span className="font-bold">Baixa</span></span>
                        </div>
                        
                    </div>
                </div>

                <div className="core-drive-box">
                    <div className="core-drive-header">
                        <h2>CORE DRIVE 1 - Significado Épico & Chamado (Epic Meaning & Calling)</h2>
                        <div className="motivation-box">
                            <span>White Hat</span>
                        </div>
                    </div>

                    <div className="core-drive-techniques">
                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                    </div>
                </div>

                <div className="core-drive-box">
                    <div className="core-drive-header">
                        <h2>CORE DRIVE 1 - Significado Épico & Chamado (Epic Meaning & Calling)</h2>
                        <div className="motivation-box">
                            <span>White Hat</span>
                        </div>
                    </div>

                    <div className="core-drive-techniques">
                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                    </div>
                </div>







            </div>
            


        </Background>

    );
}

