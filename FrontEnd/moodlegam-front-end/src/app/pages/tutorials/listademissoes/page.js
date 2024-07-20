import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function AlmocoConquistado(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Lista de Missões</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Quest List</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            A &quot;Lista de Missões&quot; é uma estratégia na gamificação que envolve apresentar 
                            aos usuários uma série de tarefas ou objetivos a serem alcançados. As missões 
                            fornecem uma estrutura clara para o engajamento do usuário e criam um senso de 
                            progresso e realização à medida que cada tarefa é concluída. A conclusão de missões 
                            muitas vezes leva a recompensas, aumentando ainda mais a motivação.


                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    <h2>Como implementar</h2>
                    
                    <div className="tech-plugins">
                        <div className="plugin-name-link">
                            <h3 id="plugin-title">Plugin:  
                                <span id="plugin-name">
                                    No momento em que este trabalho foi realizado, não existe plugin que implementa 
                                    esta técnica. Porém 
                                    existe uma forma de implementar em uma disciplina, que é descrita abaixo.
                                </span>
                            </h3>

                        </div>
                        
                        <div className="how-to-install">
                                

                                <p>
                                    Em um curso online, a &quot;lista de missões&quot; pode ser uma série de aulas, 
                                    tarefas ou projetos que os estudantes precisam concluir para passar no curso.
                                    <br></br><br></br>
                                    Ao discutir a técnica da &quot;Lista de Missões&quot;, é importante notar seu potencial para aumentar o engajamento e a motivação do usuário. Ao fornecer uma estrutura clara e um caminho para o progresso, a &apos;Lista de Missões&apos; pode ajudar os usuários a se sentirem mais envolvidos e a alcançar seus objetivos.

                                    No entanto, é crucial garantir que as missões sejam relevantes, interessantes e 
                                    desafiadoras para os usuários. Além disso, as recompensas por completar as missões 
                                    devem ser significativas e proporcionais ao esforço necessário para completá-las.
                                </p>
                            </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}