import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"

export default function HeroiDaHumanidade(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Herói da Humanidade</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Humanity Hero</i></h2>
                    
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Essa técnica refere-se à incorporação de elementos de jogo que estimulam os participantes a 
                            realizar ações ou desafios que tenham um impacto positivo na sociedade, promovendo valores 
                            humanitários e encorajando comportamentos altruístas.

                            A técnica &quot;Herói da Humanidade&quot; visa despertar a consciência social e incentivar os 
                            participantes a se envolverem em ações que beneficiem outras pessoas e o mundo ao seu redor. 
                            Ela busca criar uma sensação de propósito coletivo e promover uma mudança positiva.
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
                                Em ambientes educacionais, a técnica &quot;Herói da Humanidade&quot; pode ser aplicada para 
                                promover ações altruístas e éticas entre os alunos. Por exemplo, um programa 
                                escolar pode gamificar atividades que incentivem a empatia, a colaboração e o 
                                respeito mútuo, oferecendo reconhecimentos virtuais e incentivos para os 
                                alunos que demonstram comportamentos de &quot;Herói da Humanidade&quot;.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}