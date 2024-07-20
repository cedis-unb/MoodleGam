import Image from "next/image";
import "../../../components/TechniqueTemplate/style.css"
import Background from "../../../components/Background";
import BlackHatBox from "@/app/components/BlackHatBox"

export default function PreguicaComoStatusQuo(){



    return (
        <Background>
            <div className="tech-template-body">
                <div className="tech-template-header">

                    <h1>Preguiça Como Status Quo</h1>

                </div>

                <div className="tech-template-subheader">
                    <h2>Nome da técnica em inglês: <i>Status Quo Sloth</i></h2>
                    
                    
                    <BlackHatBox/>
                    
                </div>

                <div className="tech-template-description">
                    <h2>Descrição da técnica</h2>
                    <div className="tech-description-text">
                        <p>
                            &quot;Preguiça como Status Quo&quot; é uma estratégia de gamificação 
                            que se baseia na tendência humana de resistir a mudanças e 
                            preferir manter as coisas como estão. Ao criar um sistema 
                            em que manter o status quo é atraente ou recompensado, 
                            os usuários podem ser incentivados a continuar um certo 
                            comportamento ou atividade.

                            Às vezes parte a Perda & Rejeição vem sob a forma de 
                            simplesmente não querer mudar o seu comportamento, 
                            a tendência preguiçosa de manter o estado comportamental por inércia.

                        </p>
                    </div>
                    <h3>Este texto foi retirado de um material com autoria do Professor Doutor Sergio Antonio Andrade de Freitas</h3>
                </div>

                <div className="tech-template-how">
                    
                    
                </div>
            
            </div>

        </Background>
        

    );
}