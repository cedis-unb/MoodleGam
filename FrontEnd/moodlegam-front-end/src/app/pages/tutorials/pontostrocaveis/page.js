import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function PontosTrocaveis(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Pontos Trocáveis</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Exchangeable Points</i></h2>
                            
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    Os usuários podem utilizar seus pontos acumulados de forma estratégica e 
                                    rara para obter outros objetos de valor. &quot;Pontos Trocáveis&quot; é uma 
                                    estratégia de gamificação que envolve o acúmulo de pontos pelos usuários, 
                                    que podem ser posteriormente trocados por recompensas ou privilégios. Esta 
                                    técnica de gamificação incentiva o engajamento continuado e repetido, pois os 
                                    usuários são motivados a acumular pontos para obter recompensas desejadas.

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
                                        Alguns aplicativos de aprendizado de idiomas permitem que os usuários acumulem 
                                        pontos à medida que completam lições ou atingem metas. Esses pontos podem ser 
                                        trocados por conteúdo extra ou funcionalidades especiais dentro do aplicativo.
                                    </p>
                                </div> 
                                
                                
                            </div>
                            
                        </div>

                        
                    
                    </div>

        </Background>
        

    );
}