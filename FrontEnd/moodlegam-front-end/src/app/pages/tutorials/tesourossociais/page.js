import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function TesourosSociais(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Tesouros Sociais</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Social Treasures</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Desafios em grupo são muito eficazes no jogo 
                            colaborativo, bem como marketing viral, 
                            princpalmente quando requerem a participação 
                            coleitiva, em detrimento da individual, para 
                            alcançar um objetivo (win-state). &quot;Missão em Grupo&quot; é uma estratégia de 
                            gamificação que envolve a cooperação entre os usuários para alcançar um 
                            objetivo comum. Isso fomenta o trabalho em equipe, a interação entre os 
                            usuários e pode aumentar a sensação de pertencimento e realização coletiva.
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
                                Em um aplicativo de leitura, os usuários podem ser incentivados a formar 
                                clubes de leitura, discutir livros e recomendar títulos para outros usuários para 
                                ganhar &quot;Tesouros Sociais&quot; na forma de descontos em livros, acesso a títulos 
                                exclusivos ou recursos adicionais.
                                

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}