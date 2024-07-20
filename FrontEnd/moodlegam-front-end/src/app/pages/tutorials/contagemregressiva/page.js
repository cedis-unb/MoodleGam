import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import BlackHatBox from "@/app/components/BlackHatBox"

export default function ContagemRegressiva(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Contagem Regressiva</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Count Down</i></h2>
                    
                    <ExtrinsicBox/>
                    <BlackHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                        &quot;Contagem Regressiva&quot; é uma estratégia de gamificação que cria um senso de urgência e incentiva 
                        a ação imediata ao estabelecer um limite de tempo para concluir uma tarefa ou alcançar um objetivo. 
                        Isso pode aumentar o engajamento dos usuários e incentivá-los a agir mais rapidamente.

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
                                    existe uma forma de implementar em uma disciplina, que é utilizando a tarefa (<a href="https://producao-cead.gitbook.io/aprender-moodle/v/docentes-configuracoes-pedagogicas/configuracoes-pedagogicas/atividades/tarefa">Clique aqui</a>)
                                    , ou olhando descrição abaixo.
                                </span>
                            </h3>

                        
                        </div>


                        <div className="how-to-install">


                            <p>
                                Em plataformas de aprendizado online, a &quot;Contagem Regressiva&quot; pode ser 
                                utilizada para testes ou tarefas, incentivando os alunos a gerenciar seu tempo 
                                efetivamente.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}