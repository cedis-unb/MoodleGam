
"use client"
import Background from "../../components/Background";
import Image from "next/image";
import "./style.css"
import "../subjectDetailsPage/style.css"
import { useEffect, useState } from "react";

export default function ChooseTechniquePage(){

    const [coreDrive, setCoreDrive] = useState({
        nome: "Core Drive 1",
        id: 1,
        tecnicas: [
            { id: 1, nome: "Preguiça como Status Quo" },
            { id: 2, nome: "Sorte de Principiante" },
            { id: 3, nome: "Pontos" },
            { id: 4, nome: "Preguiça como Status Quo" },
            { id: 5, nome: "Preguiça como Status Quo" },
            { id: 6, nome: "Preguiça como Status Quo" },
            { id: 7, nome: "Preguiça como Status Quo" },
            { id: 8, nome: "Preguiça como Status Quo" },
            { id: 9, nome: "Preguiça como Status Quo" },
            { id: 10, nome: "Preguiça como Status Quo" },
            { id: 11, nome: "Preguiça como Status Quo" }
        ]
    });

    const recommendedQuantity = 10

    const [techniqueQuantity, setTechniqueQuantity] = useState(0)
    const [risk, setRisk] = useState("Baixa")
    function addTechnique(){
        setTechniqueQuantity(techniqueQuantity + 1)
    }

    function subtractTechnique(){
        setTechniqueQuantity(techniqueQuantity - 1)
    }

    function handleCheckboxChange(techniqueId, isChecked) {
        if (isChecked) {
            addTechnique();
        } else {
            subtractTechnique();
        }

        updateRisk()
        
    }

    function updateRisk(){
        if(techniqueQuantity < recommendedQuantity){
            setRisk("Baixa")
        }
        else if(techniqueQuantity == recommendedQuantity){
            setRisk("Moderada")
        }
        else if(techniqueQuantity > recommendedQuantity){
            setRisk("Alta")
        }
    }

    function getRiskLevel(techniqueQuantity) {
        if (techniqueQuantity > recommendedQuantity) {
            return "Alta";
        } else if (techniqueQuantity === recommendedQuantity) {
            return "Moderada";
        } else {
            return "Baixa";
        }
    }

    function getRiskColor(riskLevel){
        if(riskLevel === "Alta"){
            return "#DC3545"
        }
        else if(riskLevel === "Moderada"){
            return "#FD7E14"
        }
        else {
            return "#28A745"
        }
    }

    const riskLevel = getRiskLevel(techniqueQuantity);
    const riskColor = getRiskColor(riskLevel)

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
                            <span>Quantidade de técnicas escolhidas: <span className="font-bold">{techniqueQuantity}</span></span>
                        </div>
                        
                        <div className="technique-quantity-text">
                            <span>Dificuldade de implementação: <span style={{color: riskColor, fontWeight: 'bold'}}>{riskLevel}</span></span>
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

                        {coreDrive && 
                            coreDrive.tecnicas.map((technique, index) => (

                            <div className="choose-technique-box">
                                <input 
                                    type="checkbox" 
                                    id={`technique-${technique.id}`} 
                                    onChange={(e) => handleCheckboxChange(technique.id, e.target.checked)}
                                
                                />

                                <label htmlFor={`technique-${technique.id}`}>
                                    {technique.nome}
                                </label>

                            </div>
                                
                            
                            ))
                        }
                        

                       
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

