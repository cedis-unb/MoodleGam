import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function PrateleiraDeTrofeus(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Prateleira de Troféus</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Trophy Shelves</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            São mecanismos que permitem ao usuário mostrar 
                            implicitamente do que se orgulha. &quot;Prateleira de 
                            Troféus&quot; é uma estratégia de gamificação que 
                            permite aos usuários exibir suas conquistas e 
                            recompensas. Isso cria um senso de realização e 
                            progresso, incentivando a continuidade e a 
                            dedicação do usuário à tarefa ou atividade.
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
                                Plataformas como Khan Academy e Coursera permitem que os usuários mostrem os cursos 
                                que concluíram ou as habilidades que adquiriram em sua &quot;Prateleira de Troféus&quot;. 
                                Isso ajuda a motivar os usuários a continuar aprendendo e se esforçando para 
                                adquirir novas habilidades.
                                

                            </p>
                        </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}