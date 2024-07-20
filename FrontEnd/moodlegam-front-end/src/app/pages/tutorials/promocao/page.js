import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import IntrinsicBox from "@/app/components/IntrinsicBox"

export default function Promocao(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Promoção</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Touting</i></h2>
                    
                    <IntrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Divulgação&quot; ou &quot;Promoção&quot; é uma estratégia de gamificação que envolve destacar 
                            e celebrar as realizações dos usuários para motivá-los a continuar participando e 
                            progredindo. Isso pode ser feito por meio de anúncios públicos, reconhecimento 
                            nas redes sociais, placares, entre outros.


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
                                Em uma plataforma de aprendizado online, a &quot;Divulgação&quot; pode ser usada para 
                                destacar as conquistas dos alunos. Por exemplo, ao concluir um curso, um aluno 
                                pode receber um certificado digital que pode ser compartilhado nas redes sociais. 
                                Isso não apenas incentiva os alunos a concluir os cursos, mas também ajuda a 
                                atrair novos alunos.

                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}