import "./style.css"
import Background from "../../components/Background";
import Image from "next/image";
export default function SubjectDetailsPage(){




    return (
        <Background>
            <div className="background-subject-details">
                <div className="header-subject-details">
                    <h1>Fundamentos de Arquitetura de Computadores</h1>
                    <a className="edit-subject-wrapper">
                        
                        <Image
                            src="/img/edit.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <p id="edit-button">Editar dados</p>

                    </a>
                </div>

                <div className="subject-details">
                    <p>Semestre:  <span id="subject-info">2024/1</span></p>
                    <p>Código da disciplina:  <span id="subject-info">FGA-321</span></p>
                    <p>Observações: 
                        <span id="subject-info">
                            Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto
                            Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto 
                            Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto
                            Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto Texto texto texto texto texto texto texto texto
                        </span></p>
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