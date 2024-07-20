
import "./style.css"
import Background from "@/app/components/Background";

export default function GamificationContent(){



    return (

        <Background>
            <div className="gamification-body">
                <div className="gamification-header">

                    <h1>Gamificação</h1>
                    <h4>Saiba mais sobre o conceito de Gamificação, sua finalidade e suas aplicações</h4>

                </div>

                <div className="gamification-text">
                    <ol>
                        <li>
                            <h4>O que é</h4>
                            <p>
                                Gamificação pode ser definida como a aplicação no mundo real de mecânicas, dinâmicas e 
                                componentes cativantes encontrados em jogos.
                            </p>
                        </li>
                        <li>
                            <h4>Objetivos</h4>
                            <p>
                                Ela envolve a aplicação de conceitos e metodologias de jogos, como recompensas, 
                                competição, desafio, pontos, missões e narrativas, a fim de envolver, motivar, engajar e cativar pessoas. 
                                O objetivo final não é apenas distribuir pontos, medalhas e emblemas e ranquear os participantes, mas sim 
                                gerar motivação e engajamento. No contexto educativo, a Gamificação pode criar um espaço de aprendizagem onde 
                                os(as) estudantes são guiados pelos desafios, pelo entrenimento e prazer.
                            </p>
                        </li> 
                        <li>
                            <h4>Aplicações</h4>
                            <p>
                                Existem técnicas de Gamificação que são aplicadas em diversas áreas, no contexto educativo os professores
                                querem fazer com que seus aprendizes estudem os conteúdos porque estão entretidos, já no contexto comercial,
                                empresas utilizam técnicas para fazer conseguir novos clientes e manter os que já são fiéis à marca. Abaixo estão alguns exemplos
                                do uso de Gamificação no mundo real.
                                <br></br>
                                <br></br>
                                <b>TOM&apos;s Shoes:</b> A empresa Tom&apos;s Shoes fez uma campanha onde a cada pedido de par de tênis realizado por clientes,
                                um par de tênis é encaminhado para uma pessoa carente em um país de terceiro mundo.
                                Os clientes se sentem empolgados para comprar os calçados da TOM&apos;s Shoes pois elas
                                acreditam que estão ajudando um bem maior e se tornando uma espécie de herói.
                                <br></br>
                                <br></br>
                                <b>Almoço grátis:</b> Essa técnica é bem comum entre empresas, e consiste em oferecer uma recompensa gratuita aos 
                                usuários em troca de alguma ação específica.
                                Uma loja pode oferecer um cupom de desconto ou um item grátis como recompensa por se inscrever em 
                                seu programa de fidelidade. Isso incentiva os clientes a se juntarem ao programa e possivelmente 
                                fazerem compras futuras.
                                <br></br>
                                <br></br>
                                <b>Plataformas de Ensino à Distância:</b> Em uma plataforma de ensino à distância, a &quot;Âncora de Conformidade&quot; 
                                pode ser usada ao destacar a quantidade média de tempo que os estudantes bem-sucedidos gastam estudando ou o 
                                número médio de exercícios que eles completam. Isso pode motivar os alunos a se conformarem a esses comportamentos 
                                para melhorar suas próprias realizações acadêmicas.
                                <br></br>
                                <br></br>
                                <b>Aplicativos de Ensino de Idiomas:</b> Alguns aplicativos de ensino de idiomas oferecem desafios diários que 
                                devem ser concluídos dentro de um determinado tempo. Isso incentiva os usuários a se envolverem com o 
                                aplicativo diariamente.
                            </p>
                        </li>   
                    </ol>
                    
                    <div className="gamification-references">
                        <h3><b>Referências</b></h3>
                        <ol>
                            <li>CHOU, Y. Actionable Gamification: Beyond Points, Badges, and Leaderboards.</li>
                            <li>Professor Doutor Sergio Antonio Andrade de Freitas. Material de Gamificação fornecido aos orientandos.</li>
                        </ol>
                    </div>
                    
                    
                </div>
                

                

                
            
            </div>
        </Background>
        


    );
}