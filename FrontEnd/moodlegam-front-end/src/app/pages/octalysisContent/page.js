"use client"
import "./style.css"
import "@/app/pages/subjectDetailsPage/style.css"
import Background from "@/app/components/Background";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";
import Link from "next/link"
import {useRouter} from "next/navigation";
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"


export default function OctalysisContent(){
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [subject, setSubject] = useState(null)
    
    const [coreDrives, setCoreDrives] = useState([])

    const getFileName = (techniqueName) =>{
        var fileName = techniqueName.toLowerCase()
        fileName = fileName.split(' ').join('')

        fileName = fileName.replace('ç', 'c')

        fileName = fileName.replace('ã', 'a')
        fileName = fileName.replace('á', 'a')
        fileName = fileName.replace('â', 'a')
        fileName = fileName.replace('à', 'a')

        fileName = fileName.replace('ẽ', 'e')
        fileName = fileName.replace('é', 'e')
        fileName = fileName.replace('ê', 'e')
        fileName = fileName.replace('è', 'e')

        fileName = fileName.replace('ĩ', 'i')
        fileName = fileName.replace('í', 'i')
        fileName = fileName.replace('î', 'i')
        fileName = fileName.replace('ì', 'i')


        fileName = fileName.replace('õ', 'o')
        fileName = fileName.replace('ó', 'o')
        fileName = fileName.replace('ô', 'o')
        fileName = fileName.replace('ò', 'o')


        fileName = fileName.replace('ũ', 'u')
        fileName = fileName.replace('ú', 'u')
        fileName = fileName.replace('û', 'u')
        fileName = fileName.replace('ù', 'u')

        return fileName
    }
    const fetchAllTechniques = async() =>{
        try{
            const response = await axiosInstance.get(
                `/technique/`,
                {
                    headers: {
                        'x-api-key': apiKey,
                    }
                }
            );

            if (response.status === 200) {
                return response.data; 
            } else {
                console.log(response);
            }
        } catch (error){
            console.log("Erro ao buscar técnicas " , error)
        }


    }

    const sortCoreDrives = async(techniquesData, coreDrivesData) =>{
        
        try{
            coreDrivesData.forEach((coreDrive) => {
                coreDrive.techniques = []
                
                let matchingTechniques = [];
    
                techniquesData.forEach((technique) => {
                  if (technique.idCoreDrive === coreDrive._id) {
                    matchingTechniques.push(technique);
                  }
                });
                
                coreDrive.techniques = [...coreDrive.techniques, ...matchingTechniques];
            });
        } catch (error){
            console.log(error)
        }
        
        
        
        const filteredCoreDrivesData = coreDrivesData.filter(coreDrive => coreDrive.techniques.length !== 0);

        return filteredCoreDrivesData;
    }



    const fetchCoreDrives = async() =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/coreDrive`, 
                {
                    headers: {
                        'x-api-key': `${apiKey}`
                    }
                }
            );

  
            if (response.status === 200) {
                return response.data
            }
            
            

        } catch (error) {
            console.error('Erro ao buscar disciplinas');
            
            
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        const fetchData = async () => {
            try {

                
                const techniquesData = await fetchAllTechniques()
                
                
                const coreDrivesData = await fetchCoreDrives()
                

                const updatedCoreDrives = await sortCoreDrives(techniquesData, coreDrivesData)
                console.log(updatedCoreDrives)
                setCoreDrives(updatedCoreDrives)
                

                
                

                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])

    return (

        <Background>
            <div className="octalysis-body">
                <div className="octalysis-header">

                    <h1>Octalysis</h1>
                    <h4>Saiba mais sobre o framework de Gamificação chamado Octalysis, criado pelo autor Yu Kai Chou</h4>

                </div>

                <div className="octalysis-img-wrapper">
                    <Image 
                        src="/img/octalysis.png"
                        width={300}
                        height={300}
                        unoptimized={true}
                    />
                </div>
                
                
                
                

                <div className="octalysis-text">
                    <ol>
                        <li>
                            <h4>Introdução</h4>
                            <p>
                                Chou em sua busca por entender o que deixam os jogos tão cativantes desenvolveu
                                um Framework de design de gamificação que agrupa suas técnicas, no que ele chamou
                                de Core Drives, cada Core Drive reúne elementos que alimentam a motivação de cada 
                                pessoa, como por exemplo: Influência Social, Imprevisibilidade, Realização, 
                                Impaciência, etc. Ao todo, conseguiu reunir oito Core Drives e os distribuiu
                                em uma representação gráfica de um octógono, e nomeou o Framework como Octalysis.
                            </p>
                        </li>
                        <li>
                            <h4>Right Brain vs Left Brain</h4>
                            <p>
                                Chou, ao estudar e construir o Octalysis, organizou os Core Drives em duas cate-
                                gorias. A primeira, que concentra-se em criatividade, autoexpressão e dinâmicas sociais,
                                estão dispostas no lado direito do octógono. Em seu livro, as chama de
                                Right Brain Core Drivers. Já os Core Drives que são associados à lógica, ao pensamento
                                analítico e propriedade são representados no lado esquerdo do octógono, e são chamados
                                de Left Brain Core Drives.
                                <br></br>
                                <br></br>
                                Os Left Brain Core Drives costumam basear-se na Motivação Extrínseca a motivação ocorre 
                                porque você deseja alcançar algo, seja um objetivo, um bem ou qualquer
                                coisa inalcançável. Em contrapartida, os Right Brain Core Drives estão principalmente
                                ligados às Motivações Intrínsecas – você não necessita de um objetivo ou recompensa para
                                utilizar sua criatividade, socializar com amigos ou sentir a emoção da imprevisibilidade;
                                a própria atividade é recompensadora por si só. 
                                <br></br><br></br>
                                Vale a pena ressaltar que os Left Brain Core Drives e os Right Brain Core Drives
                                não são referências literais em termos da geografia real do cérebro, mas apenas uma
                                diferenciação simbólica entre duas funções distintas do cérebro.
                            </p>

                        </li> 
                        <li>
                            <h4>White Hat vs Black Hat</h4>
                            <p>
                                Chou organizou o Octalysis de uma forma que os Core Drives na parte superior
                                evocam uma motivação positiva que são chamadas de White Hat, enquanto os Core Drives
                                presentes na parte de baixo evocam uma motivação negativa e são chamadas de Black
                                Hat. Ambos conceitos são utilizados para caracterizar Core Drives.
                                As motivações dos Core Drives White Hat geram empoderamento da criatividade,
                                satisfação com aprendizado e um propósito maior. Já os Black Hat utilizam a motivação
                                a partir do medo de perder algo, do medo do que pode acontecer e da busca por algo
                                quase inalcançável, que podem gerar sensações amargas para as pessoas.
                            </p>
                        </li>   
                    </ol>
                    
                    <div className="octalysis-img-wrapper">
                        <Image 
                            src="/img/octalysis_division.png"
                            width={400}
                            height={400}
                            unoptimized={true}
                        />
                    </div>

                    <h3>Core Drives</h3>

                    <ol>
                        <li>
                            <h4>Significado Épico & Chamado</h4>
                            <p>
                                Sentir-se parte de algo grandioso, ter a sensação de ser escolhido para uma missão especial, 
                                essa é a essência do 'Significado Épico e Chamado'. Imagine-se, por exemplo, dedicando grande 
                                parte do seu tempo para manter um fórum online ou contribuir com a Wikipedia.
                                <br></br><br></br>
                                Essa motivação básica está relacionada com a sensação de fazer algo significativo, 
                                um pouco como quando um novato tem um início de sorte e sente que foi presenteado de 
                                forma única; e também quando o jogador sente que está contribuindo para algo maior do 
                                que ele mesmo, ou acredita que foi selecionado para uma tarefa especial
                            </p>
                        </li>

                        <li>
                            <h4>Desenvolvimento & Realização</h4>
                            <p>
                                Quando o jogador sofre um impulso interno para progredir, desenvolver habilidades e, eventualmente, 
                                superar desafios, as habilidades trabalhadas são as relacionadas à técnica “Desenvolvimento e Realização".
                                <br></br><br></br>
                                Esse método diz respeito à motivação de um jogador para evoluir, melhorar suas habilidades e vencer 
                                desafios. Aqui, o termo 'desafio' é crucial, pois sem ele, ganhar uma medalha ou troféu perde o sentido. 
                                Esta motivação é geralmente expressa através de pontos, medalhas e rankings (PBL, do inglês: Pontos, 
                                Emblemas ou Insígnias and Tabelas de Classificação), tornando-se a mais fácil de ser implementada em uma gamificação.
                            </p>
                        </li>

                        <li>
                            <h4>Empoderamento da criatividade & Feedback</h4>
                            <p>
                                Quando os jogadores estão engajados em um processo criativo onde eles devem repetidamente descobrir as 
                                coisas e experimentar diferentes combinações.
                                <br></br><br></br>
                                'Empoderamento e Feedback' acontece quando os jogadores estão envolvidos em um 
                                processo criativo que exige experimentação e combinações diversas. 
                                Não basta só ter espaço para a criatividade, é preciso também ver o 
                                impacto do seu trabalho, receber e dar feedback. É por isso que brincar 
                                com Legos ou pintar são atividades que, por si só, são divertidas e auto-sustentáveis 
                                (Céu de Brigadeiro), sem precisar de adições constantes para manter a diversão.
                            </p>
                        </li>

                        <li>
                            <h4>Propriedade & Posse</h4>
                            <p>
                                'Propriedade e Posse' é a motivação que surge quando os jogadores sentem que possuem algo. 
                                Quando se sentem donos de algo, os jogadores tendem a querer melhorar e acumular mais itens. 
                                Isso pode ser visto quando alguém passa muito tempo personalizando seu perfil ou avatar, ou 
                                ainda quando se sente motivado a colecionar selos, peças de quebra-cabeças e outras coisas. 
                                Esta motivação básica para além de induzir o acúmulo de riquezas, lida com muitos bens virtuais 
                                (Bens Virtuais) ou moedas virtuais dentro da gamificação.
                            </p>
                        </li>

                        <li>
                            <h4>Influência Social & Pertencimento</h4>
                            <p>
                                Esta é a motivação básica na qual os jogadores estão motivados por interagirem com outros 
                                jogadores e sentirem o pertencimento a um determinado grupo.
                                <br></br><br></br>
                                'Influência Social e Pertencimento' diz respeito aos aspectos sociais que motivam as 
                                pessoas no convívio comunitário, como orientação, aceitação, interações sociais, 
                                companheirismo, competição e até inveja. Ver um amigo que é bom em algo ou que possui 
                                algo extraordinário pode motivá-lo a alcançar o mesmo nível. Além disso, a ligação com 
                                pessoas, lugares ou eventos relacionados também é importante. Por exemplo, um produto 
                                que lembra a infância pode despertar sentimentos de nostalgia, aumentando a probabilidade 
                                de um estímulo.
                            </p>
                        </li>

                        <li>
                            <h4>Escassez & Impaciência</h4>
                            <p>
                                Esta é a motivação básica na qual os jogadores estão motivados por buscar completar 
                                a informação que foi lhes passada incompleta ou com promessas.
                                <br></br><br></br>
                                'Escassez e Impaciência' é a motivação que surge da espera por algo que ainda não se tem. 
                                É comum em jogos que tem recompensas agendadas (como voltar em duas horas para receber um 
                                prêmio). A impossibilidade de obter algo desejado de imediato faz com que a pessoa 
                                pense constantemente nisso. Esta motivação foi usada pelo Facebook em seus primórdios, 
                                quando a plataforma era exclusiva e, pouco a pouco, foi abrindo para todos.
                            </p>
                        </li>

                        <li>
                            <h4>Imprevisibilidade & Curiosidade</h4>
                            <p>
                                Esta é a motivação básica na qual os jogadores estão motivados pela incerteza do que irá acontecer 
                                ou curiosidade sobre o que há no desconhecido.
                                <br></br><br></br>
                                A motivação "Imprevisibilidade & Curiosidade" desempenha um papel crucial na 
                                gamificação ao estimular a curiosidade e a exploração. Esta motivação é atraente 
                                porque se baseia na tendência humana natural de se sentir atraído por elementos de 
                                mistério e surpresa. Quando os jogadores não podem prever o que acontecerá em seguida, 
                                eles se sentem incentivados a continuar jogando para descobrir. Este é o elemento que 
                                mantém os jogadores retornando, na expectativa do desconhecido, sejam recompensas 
                                aleatórias, eventos inesperados ou resultados de ações ainda não conhecidos.
                                <br></br><br></br>
                                O uso estratégico da imprevisibilidade e da curiosidade pode levar a um engajamento 
                                mais profundo e a uma experiência de jogo mais rica. Por exemplo, os designers de 
                                gamificação podem usar recompensas variáveis, onde o tipo ou a quantidade de recompensa 
                                não é conhecida até que seja desbloqueada. Alternativamente, eles podem introduzir 
                                elementos de história que são revelados gradualmente, mantendo os jogadores envolvidos 
                                para descobrir mais. Esta motivação, se usada corretamente, pode criar um ciclo de 
                                feedback positivo, onde a satisfação do mistério revelado reforça o desejo de explorar 
                                mais.
                            </p>
                        </li>

                        <li>
                            <h4>Perda & Rejeição</h4>
                            <p>
                                O driver central "Perda & Rejeição" é fundamentalmente sobre a prevenção e o medo das 
                                consequências negativas. No contexto de jogos e gamificação, este driver pode ser usado 
                                para estimular os jogadores a permanecerem ativos, continuarem engajados e evitarem 
                                comportamentos indesejáveis. Isso acontece, pois é despertado o medo de 
                                perder o progresso adquirido, as recompensas ganhas, ou a posição obtida em um ranking. 
                                Também pode envolver o receio de ser rejeitado por um grupo ou comunidade se as 
                                regras do jogo não forem seguidas ou se o desempenho for insatisfatório.
                                <br></br><br></br>
                                Usando esse driver, os designers de gamificação podem criar cenários onde os usuários 
                                se sentem compelidos a agir para evitar consequências negativas. 
                                Pode-se criar uma sensação de urgência, estabelecendo prazos para tarefas, ou 
                                colocando em risco os recursos acumulados pelo jogador. A ameaça da rejeição pode 
                                ser representada pelo risco de ser banido de uma comunidade de jogadores ou de perder 
                                a adesão a um grupo exclusivo. Este driver, embora seja uma força poderosa, deve ser 
                                usado com cuidado para evitar a criação de uma experiência de usuário estressante ou 
                                negativa.
                            </p>
                        </li>

                    </ol>
                    <h3>Técnicas</h3>
                    <p>Na lista abaixo são apresentadas as técnicas de cada Core Drive. Basta clicar na técnica para visualizar sua descrição</p>
                    {coreDrives && coreDrives.map((coreDrive) => (

                        <div key={coreDrive._id} className="core-drive-box">

                            <div className="core-drive-header">
                                <h2>{coreDrive !== null ? coreDrive.coreDriveName : ''}</h2>
                                {coreDrive.hat != null ? 
                                    coreDrive.hat === 'white' ?
                                    (<WhiteHatBox/>)
                                    :
                                    (<BlackHatBox/>)
                                    :
                                    ''
                                }

                                {coreDrive.motivation != null ? 
                                    coreDrive.motivation === 'intrinsic' ?
                                    (<IntrinsicBox/>)
                                    :
                                    (<ExtrinsicBox/>)
                                    :
                                    ''
                                }
                            </div>

                            <div className="core-drive-techniques">

                                {coreDrive && 
                                        coreDrive.techniques.map((technique, index) => (

                                        <Link
                                            href={{
                                                pathname: `/pages/tutorials/${getFileName(technique.techniqueName)}`
                                            }}
                                        >
                                            <div 
                                                key={technique._id} 
                                                className="technique-box" 
                                                title="Clique para ver o tutorial dessa técnica"
                                                
                                            >

                                                
                                    
                                                
                                                <span>{technique.techniqueName}</span>
                                                
                                                
                                            </div>
                                        </Link>
                                    
                                        
                                ))}
                                

                            </div>
                        </div>

                    ))}

                    <div className="octalysis-references">
                        <h3><b>Referências</b></h3>
                        <ol>
                            <li>CHOU, Y. Actionable octalysis: Beyond Points, Badges, and Leaderboards.</li>
                            <li>Professor Doutor Sergio Antonio Andrade de Freitas. Material de Gamificação fornecido aos orientandos.</li>
                        </ol>
                    </div>
                    
                    
                </div>
                

                

                
            
            </div>
        </Background>
        


    );
}