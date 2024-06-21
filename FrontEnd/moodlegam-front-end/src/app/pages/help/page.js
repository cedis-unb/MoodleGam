
import "./style.css"
import Background from "../../components/Background"

export default function Help(){

    return(
        <Background>
            <div className="help-conteiner">
                <div className="help-header">
                    <h1>Ajuda</h1>
                </div>
                <div className="help-index">
                    <ul>
                        <li>
                            <a>O que é o MoodleGam?</a>
                        </li>
                        <li>
                            <a>Não sei o que é Gamificação, onde posso aprender sobre?</a>
                        </li>
                        <li>
                            <a>Como cadastro uma disciplina?</a>
                        </li>
                        <li>
                            <a>Eu estou cadstrando uma disciplina, mas não conheço nenhuma técnica de Gamificação, como posso aprender sobre essas técnicas?</a>
                        </li>
                        <li>
                            <a>Para que serve o campo "Anotações" ao cadastrar uma disciplina?</a>
                        </li>
                        <li>
                            <a>Como edito os dados de uma disciplina?</a>
                        </li>
                        <li>
                            <a>
                                Vou cadastrar uma nova disciplina, mas quero reaproveitar a 
                                Gamificação de uma disciplina anterior, como posso fazer isso?
                            </a>
                        </li>
                        <li>
                            <a>Como edito os dados da minha conta?</a>
                        </li>
                        <li>
                            <a>Não conheço muito bem o Moodle, onde posso aprender mais sobre a plataforma?</a>
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="help-content">
                    <div className="help-question">
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
                    

                </div>

            </div>
        </Background>
    )
} 