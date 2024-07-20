import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import Link from "next/link";

export default function EfeitoDaAura(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Efeito da Aura</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Aura Effect</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            O &quot;Efeito de Aura&quot; é uma estratégia na gamificação que envolve a ideia de que 
                            um determinado elemento ou característica pode influenciar as coisas ao seu redor. 
                            Em um contexto de jogo, por exemplo, um item mágico poderia ter um &quot;Efeito de Aura&quot; 
                            que aumenta as habilidades dos personagens próximos. Na gamificação, este conceito é 
                            frequentemente usado para incentivar a colaboração, a competição saudável ou o 
                            comportamento de grupo.

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
                                Em um contexto educacional, um aluno que demonstra entusiasmo pelo aprendizado pode 
                                influenciar positivamente seus colegas de classe através do &quot;Efeito de Aura&quot;. 
                                Da mesma forma, o uso de certas estratégias de aprendizado ou ferramentas de 
                                estudo por alguns alunos pode incentivar outros a seguir o exemplo.
                                <br></br><br></br>
                                Analisando a técnica do &quot;Efeito de Aura&quot;, é possível perceber seu potencial para 
                                impulsionar a motivação e a performance de um grupo. Ela é baseada na ideia de que 
                                as ações e comportamentos de uma pessoa podem influenciar os de outras.
                                <br></br><br></br>
                                No entanto, é importante ter em mente que o &quot;Efeito de Aura&quot; pode ser tanto positivo quanto negativo. Portanto, ao aplicar esta técnica, deve-se prestar atenção na dinâmica do grupo e na influência que cada indivíduo pode ter sobre os outros. O sucesso desta técnica depende de um gerenciamento cuidadoso e atento para garantir que a influência seja positiva e conduza ao alcance dos objetivos pretendidos.                                
                            </p>
                        </div> 
                        
                        
                        
                    </div>
                    
                </div>
                    
            </div>

        </Background>
        

    );
}