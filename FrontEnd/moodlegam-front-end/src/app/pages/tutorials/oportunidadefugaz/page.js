import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"

export default function OportunidadeFugaz(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Oportunidade Fugaz</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Evanescence Opportunity</i></h2>
                    
                    
                    <BlackHatBox/>
                    
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Essa técnica se baseia no fato de que É uma oportunidade vai desaparecer se 
                            o usuário não tomar a ação necessária imediatamente.

                            "Oportunidade Fugaz" é uma estratégia de 
                            gamificação que cria uma sensação de urgência ao 
                            apresentar uma oportunidade ou recompensa que 
                            está disponível por tempo limitado. 
                            Essa técnica utiliza a psicologia do medo 
                            de perder algo (FOMO) para motivar os usuários 
                            a agirem rapidamente.

                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
                        
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">
                                Plugin: 
                                <span id="plugin-name">
                                    No momento em que este trabalho foi realizado, não existe plugin que implementa esta técnica. Porém 
                                    existe uma forma de implementar em uma disciplina, que é descrita abaixo.
                                </span>
                            </h3>


                            
                        
                        </div>
                        
                        <div className="how-to-install">


                            <p>
                                Alguns aplicativos de ensino de idiomas oferecem desafios diários que devem 
                                ser concluídos dentro de um determinado tempo. Isso incentiva os usuários a 
                                se envolverem com o aplicativo diariamente.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}