import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function EfeitoOraculo(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Efeito Oráculo</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Oracle Effect</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            "Efeito Oráculo" é uma estratégia de gamificação que envolve fornecer aos usuários 
                            previsões ou insights sobre possíveis futuros resultados ou eventos. 
                            Isso pode ajudar a orientar suas ações e decisões, aumentando o engajamento e a satisfação.

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
                                Em um sistema de aprendizado online, o "Efeito Oráculo" pode ser usado para 
                                mostrar aos alunos como suas ações atuais afetarão seu progresso futuro. 
                                Por exemplo, eles podem visualizar como a conclusão de certos cursos ou a 
                                aquisição de habilidades específicas podem afetar suas perspectivas de carreira.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}