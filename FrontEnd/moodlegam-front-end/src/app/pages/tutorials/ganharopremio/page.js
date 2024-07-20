import Link from "next/link";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function GanharOPremio(){



    return (
        <Background>
            <div className="tech-template-body">
                        <div className="tech-template-header">

                            <h1>Ganhar o Prêmio</h1>

                        </div>

                        <div className="tech-template-subheader">
                            <h2>Nome da técnica em inglês: <i>Win Prize</i></h2>
                            <WhiteHatBox/>
                            <ExtrinsicBox/>
                        </div>

                        <div className="tech-template-description">
                            <h2>Descrição da técnica</h2>
                            <div className="tech-description-text">
                                <p>
                                    &quot;Ganhar Prêmio&quot; é uma estratégia de gamificação que envolve a concessão de recompensas 
                                    tangíveis ou intangíveis aos usuários com base em seu desempenho, conquistas ou comportamento. 
                                    Essa técnica tem como objetivo motivar e engajar os usuários, encorajando-os a continuar 
                                    interagindo com o sistema e a se esforçarem para alcançar seus objetivos.
                                    <br></br><br></br>
                                    Um site de aprendizado de idiomas poderia oferecer prêmios, como acesso a 
                                    conteúdo premium ou emblemas virtuais, para os usuários que concluem um certo 
                                    número de lições ou alcançam uma pontuação alta em um teste.
                                    <br></br><br></br>
                                    Ao refletir sobre a técnica de &quot;Ganhar Prêmio&quot;, é importante entender seu poder 
                                    motivacional. A perspectiva de ganhar um prêmio pode incentivar os usuários a 
                                    se esforçarem mais e a permanecerem engajados com o sistema.
                                    <br></br><br></br>
                                    No entanto, é crucial que os prêmios sejam relevantes e valiosos para os 
                                    usuários, e que a competição pelos prêmios seja justa e acessível a todos. 
                                    Além disso, é necessário ter cuidado para evitar que a motivação se torne 
                                    puramente extrínseca, o que pode diminuir a motivação intrínseca e levar a 
                                    uma diminuição do engajamento a longo prazo.
                                </p>
                            </div>
                            <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>

                        </div>

                        <div className="tech-template-how">
                            <h2>Como implementar</h2>
                            
                            <div className="tech-plugins">
                                
                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Tutorial de como instalar um plugin no Moodle:</h3>
                                    
                                    
                                    <Link
                                        href={{
                                            pathname: `/pages/tutorials/instalarplugin`
                                        }}

                                        passHref
                                        legacyBehavior
                                    >
                                        <a target="_blank">
                                            Clique para ver o tutorial
                                        </a>
                                    </Link>
                                </div>
                                
                                
                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">Exabis Games - Exaclick</span></h3>
                                    <div className="how-to-install">
                                        <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/mod_exagames">https://moodle.org/plugins/mod_exagames</a></p>
                                    </div>
                                    
                                </div>

                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">Level UP XP+</span></h3>
                                    <div className="how-to-install">
                                        <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/block_xp">https://moodle.org/plugins/block_xp</a></p>
                                    </div>
                                    
                                </div>

                                <div className="plugin-name-link">
                                    <h3 id="plugin-title">Plugin: <span id="plugin-name">Stamp Collection</span></h3>
                                    <div className="how-to-install">
                                        <p>Link para a página do plugin: <a target="_blank" href="https://moodle.org/plugins/mod_stampcoll">https://moodle.org/plugins/mod_stampcoll</a></p>
                                    </div>
                                    
                                </div>


                            </div>


                            
                        </div>
                    
                    </div>

        </Background>
        

    );
}