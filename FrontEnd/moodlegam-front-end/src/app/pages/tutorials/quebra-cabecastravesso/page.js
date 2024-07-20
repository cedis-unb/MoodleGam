import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function QuebraCabecasTravesso(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Quebra-cabeças Travesso</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Mischief Puzzle</i></h2>
                    
                    
                    <BlackHatBox/>
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Quebra-cabeças Travesso&quot; é uma estratégia de gamificação que envolve a 
                            apresentação de desafios ou enigmas que os usuários devem resolver, 
                            muitas vezes com uma reviravolta inesperada ou elementos surpresa. 
                            Isso pode ajudar a engajar os usuários, estimulando a criatividade, 
                            o pensamento crítico e a resolução de problemas.

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
                                Em uma sala de aula, o &quot;Quebra-cabeças Travesso&quot; pode ser usado para estimular o 
                                pensamento crítico e a resolução de problemas dos alunos. Por exemplo, um professor 
                                pode criar um enigma que exige que os alunos apliquem os conceitos que aprenderam de 
                                maneiras novas e inesperadas
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}