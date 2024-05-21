"use client"
import "./style.css"
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import Modal from "@/app/components/Modal";
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Image from "next/image";

export default function Narrativa(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">
                    <h1>Narrativa</h1>
                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Narrative</i></h2>
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                            more recently with desktop publishing software like Aldus PageMaker including versions of 
                            Lorem Ipsum.

                        </p>
                    </div>
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



    )
}