import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function CeuDeBrigadeiro(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Céu de Brigadeiro</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Evergreen Mechanics</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            Onde o designer já não precisa adicionar continuamente 
                            mais conteúdo para manter as atividades envolventes. 
                            &quot;Céu de Brigadeiro&quot; é uma estratégia de gamificação 
                            que envolve criar elementos do jogo que têm valor contínuo 
                            e podem ser usados repetidamente sem perder seu apelo. 
                            Isso ajuda a manter o engajamento e interesse do usuário 
                            a longo prazo.

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
                                Em uma plataforma de aprendizado online, um sistema de emblemas que reconhece a 
                                conclusão de cursos ou aquisição de novas habilidades pode ser considerado um 
                                &quot;Céu de brigadeiro&quot;. Os alunos são incentivados a continuar aprendendo e 
                                adquirindo novas insígnias.
                                
                            </p>
                        </div> 
                        
                        
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}