
import "./style.css"
import Background from "../../components/Background"
import Link from 'next/link';

export default function Help(){

    const handleClick = (e, id) => {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <Background>
            <div className="help-conteiner">
                <div className="help-header">
                    <h1>Ajuda</h1>
                </div>
                <div className="help-index">
                    <ul>
                        <li>
                            <Link legacyBehavior href="#section1">
                                <a>O que é o MoodleGam?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section2">
                                <a>Não sei o que é Gamificação, onde posso aprender sobre?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section3">
                                <a>Como cadastro uma disciplina?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section4">
                                <a>Eu estou cadastrando uma disciplina, mas não conheço nenhuma técnica de Gamificação, como posso aprender sobre essas técnicas?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section5">
                                <a>Para que serve o campo "Anotações" ao cadastrar uma disciplina?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section6">
                                <a>Como edito os dados de uma disciplina?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section7">
                                <a>
                                    Vou cadastrar uma nova disciplina, mas quero reaproveitar a 
                                    Gamificação de uma disciplina anterior, como posso fazer isso?
                                </a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section8">
                                <a>Como edito os dados da minha conta?</a>
                            </Link>
                            
                        </li>
                        <li>
                            <Link legacyBehavior href="#section9">
                                <a>Não conheço muito bem o Moodle, onde posso aprender mais sobre a plataforma?</a>
                            </Link>
                            
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="help-content">
                    <div id="section1" className="help-question">
                        <h2>O que é o MoodleGam?</h2>
                        <div className="help-explanation">
                            <p>
                                É uma ferramenta voltada para criadores de conteúdo.
                                Em resumo, os objetivos do site são: Oferecer uma visão gráfica dos perfis motivacionais de suas disciplinas, 
                                mostrar uma gama de plugins do Moodle e quais técnicas de Gamificação eles carregam. 
                                O MoodleGam facilita a implementação 
                                de estratégias de gamificação alinhadas com as características específicas da audiência de criadores de conteúdo. 
                                Esta abordagem visa não apenas enriquecer a compreensão dos criadores de conteúdo sobre sua audiência, mas também oferecer 
                                ferramentas para uma gamificação personalizada.
                            </p>
                        </div>
                    </div>

                    <div id="section2" className="help-question">
                        <h2>Não sei o que é Gamificação, onde posso aprender sobre?</h2>
                        <div className="help-explanation">
                            <p>
                                No MoodleGam existe uma página dedicada para explicar o que é Gamificação, e está nesse
                                <Link href="/pages/gamificationContent">link</Link>, ou acesse pelo caminho Conteúdos (Na barra superior ou menu inicial) -&gt; Gamificação.
                                Após ler sobre Gamificação, recomendamos ler sobre o Framework Octalysis, neste <Link href="/pages/octalysisContent">link</Link>
                                ou acesse pelo caminho Conteúdos (Na barra superior ou menu inicial) -&gt; Octalysis.
                            </p>
                        </div>
                    </div>

                    <div id="section3" className="help-question">
                        <h2>Como cadastro uma disciplina?</h2>
                        <div className="help-explanation">
                            <p>
                                Clique neste <Link href="/pages/registerSubjectPage">link</Link>, ou siga o caminho Disciplinas (Na barra superior ou menu inicial)
                                -&gt; Nova Disciplina
                            </p>
                        </div>
                    </div>

                    <div id="section4" className="help-question">
                        <h2>Eu estou cadastrando uma disciplina, mas não conheço nenhuma técnica de Gamificação, como posso aprender sobre essas técnicas?</h2>
                        <div className="help-explanation">
                            <p>
                                Após ter cadastrado insformações básicas sobre a disciplina, um pop-up irá aparecer com a opção
                                de escolher técnicas, ao clicar nessa opção, todas as técnicas irão aparecer em uma página. Basta
                                clicar no símbolo "?" dentro de uma técnica que você será encaminhado para a página da mesma.
                                <br></br><br></br>
                                Caso você ainda não tenha cadastrado a disciplina, clique neste <Link href="/pages/octalysisContent">link</Link>, ou siga o caminho Conteúdos (Na barra superior ou menu inicial)
                                -&gt; Octalysis. Lá estarão listadas as técnicas do Framework, basta clicar sobre elas e uma 
                                página com sua descrição e intruções de como implementar será aberta.
                            </p>
                        </div>
                    </div>

                    <div id="section5" className="help-question">
                        <h2>Para que serve o campo "Anotações" ao cadastrar uma disciplina?</h2>
                        <div className="help-explanation">
                            <p>
                                Este campo serve para que o professor(a) coloque suas observações sobre
                                a implementação da Gamificação naquela disciplina. Os pontos positivos e negativos
                                podem ser inseridos nesse campo, para que futuramente quando esse mesmo professor(a)
                                for consultar como foi a implementação, ele(a) irá relembrar tais pontos. No ato de cadastrar
                                a disciplina, este campo pode ser deixado em branco.
                            </p>
                        </div>
                    </div>
                    
                    <div id="section6" className="help-question">
                        <h2>Como edito os dados de uma disciplina?</h2>
                        <div className="help-explanation">
                            <p>
                                Clique na opção Disciplinas (Na barra superior ou menu inicial) -&gt; Ver disciplinas
                                -&gt; Escolha a disciplina e clique em "Ver detalhes" -&gt; Editar dados 
                            </p>
                        </div>
                    </div>

                    <div id="section7" className="help-question">
                        <h2>
                            Vou cadastrar uma nova disciplina, mas quero reaproveitar a 
                            Gamificação de uma disciplina anterior, como posso fazer isso?
                        </h2>
                        <div className="help-explanation">
                            <p>
                                Após cadastrar os dados básicos da disciplina, um pop-up irá aparecer com as opções de 
                                escolher as técnicas ou reaproveitar a gamificação, escolha a opção de reaproveitar a
                                gamificação. Uma lista de disciplinas será mostrada, ao clicar opção "Ver mais", serão 
                                mostradas as técnicas presentes naquela disciplina, para selecionar aquela gamificação basta
                                clicar em "Selecionar" e confirmar.
                            </p>
                        </div>
                    </div>

                    <div id="section8" className="help-question">
                        <h2>
                            Como edito os dados da minha conta?
                        </h2>
                        <div className="help-explanation">
                            <p>
                                No canto superior direito, clique no ícone de usuário e após o pop-up aparecer clique na
                                opção "Meu perfil". Ao lado dos seus dados existe a opção "Editar dados".
                            </p>
                        </div>
                    </div>

                    <div id="section9" className="help-question">
                        <h2>
                            Não conheço muito bem o Moodle, onde posso aprender mais sobre a plataforma?
                        </h2>
                        <div className="help-explanation">
                            <p>
                                 MoodleGam existe uma página dedicada para explicar sobre o Moodle, e está nesse
                                <Link href="/pages/moodleContent">link</Link>, ou acesse pelo caminho Conteúdos (Na barra superior ou menu inicial) -&gt; Moodle.
                                
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </Background>
    )
} 