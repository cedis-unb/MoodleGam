import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import WhiteHatBox from "@/app/components/WhiteHatBox"

export default function SorteDePrincipiante(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Sorte de Principiante</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Beginner&apos;s Luck</i></h2>
                    
                    <WhiteHatBox/>
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            A técnica &quot;Sorte de Principiante&quot; é uma estratégia 
                            comumente utilizada na gamificação para encorajar 
                            novos usuários a começarem a usar um sistema, 
                            produto ou serviço. Ela se baseia no princípio 
                            de que a experiência inicial de sucesso pode 
                            ajudar a motivar os usuários a continuar 
                            envolvidos e a progredir. 
                            A &quot;Sorte de Principiante&quot; pode assumir a 
                            forma de bônus de boas-vindas, vitórias 
                            fáceis no início, ou a chance de experimentar 
                            recursos premium gratuitamente por um tempo limitado.

                            O efeito esperado nas pessoas é que elas 
                            acreditem que receberam algum tipo de 
                            presente que os outros não têm ou 
                            acreditam que tiveram &quot;sorte&quot; de 
                            conseguir  a espada incrível no início do jogo.
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
                                Em aplicativos de aprendizado de idiomas, quando um usuário começa a usar o app, 
                                ele pode ganhar pontos, emblemas extras ou qualquer recompensa pelos primeiros exercícios que conclui, 
                                incentivando-o a continuar a usar o aplicativo. Ao proporcionar um ambiente de sucesso imediato e gratificações, 
                                os usuários se sentem motivados a continuar a explorar e interagir com a plataforma. 
                                A sensação de progresso inicial é um forte motivador, e esta técnica habilmente explora esse 
                                aspecto da psicologia humana.
                            </p>
                        </div>

                    </div>
                    
                </div>
            
            </div>

        </Background>
        

    );
}