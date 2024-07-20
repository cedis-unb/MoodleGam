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

                    <h1>Almoço Conquistado</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Earned Lunch/Fixed Actions Rewards</i></h2>
                    <WhiteHatBox/>
                    <ExtrinsicBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            A técnica &quot;Almoço Conquistado&quot; que também é conhecida como &quot;Recompensas por 
                            Ações Fixas&quot; é uma estratégia de gamificação que envolve dar aos usuários recompensas 
                            previsíveis e consistentes em resposta a ações específicas. Esta estrátegia é eficaz 
                            porque cria uma conexão direta e clara entre o comportamento do usuário e a 
                            recompensa recebida, incentivando os usuários a repetirem essas ações.

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
                                    Em uma plataforma de aprendizado online, os estudantes podem 
                                    ganhar pontos ou emblemas cada vez que concluem um curso ou passam em um teste. 
                                    Esses pontos podem, então, ser usados para desbloquear conteúdos adicionais ou 
                                    benefícios especiais.
                                    <br></br> <br></br>
                                    Ao refletir sobre a técnica &quot;Recompensas por Ações Fixas&quot; ou &quot;Almoço Conquistado&quot;, 
                                    é importante considerar sua eficácia em estabelecer uma conexão clara entre ações e 
                                    recompensas, incentivando comportamentos desejados.

                                    No entanto, é necessário garantir que as recompensas sejam valiosas e relevantes 
                                    para o usuário, e que as ações necessárias para ganhar as recompensas sejam claras, 
                                    alcançáveis e alinhadas com os objetivos gerais do sistema.
                                </p>
                            </div>
                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}