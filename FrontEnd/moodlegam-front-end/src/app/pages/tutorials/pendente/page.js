import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function Pendente(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Pendente</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Dangling</i></h2>
                    
                    <BlackHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Pendente&quot; ou &quot;Suspense&quot; é uma estratégia de gamificação que envolve apresentar uma recompensa desejável ou 
                            objetivo que está apenas
                            fora do alcance do usuário, mas pode ser obtida através de mais esforço ou engajamento. 
                            Isso pode estimular a motivação e incentivarem os usuários a continuar interagindo com o sistema.

                            Essa técnica se baseia na constância, ao mostrar diversas vezes ao usuário 
                            algo que ele ainda não pode ter, mas que com esforço ou engajamento, 
                            ele poderá ter o que deseja.
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
                                Em aplicativos de aprendizado, &quot;Pendente&quot; pode ser usado ao desbloquear o 
                                próximo nível ou curso apenas depois que o usuário completar uma série de tarefas ou 
                                desafios. Isso incentiva o aprendizado contínuo e o compromisso com o aplicativo.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}