
import Background from "../../components/Background";
import MenuOption from "@/app/components/MenuOption"
import Image from "next/image";
import "./style.css"

export default function Homepage(){




    return (
        <Background>

            <div className="homepage-option">

                <MenuOption
                    title="Disciplina"
                    text="Crie e edite Disciplinas, além de ver as que já foram criadas. Ao criar uma Disciplina é possível adicionar turmas para mesma. "
                >
                    <Image 
                        src="/img/books.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Conteúdos"
                    text="Veja conteúdos sobre Gamificação, além de tutoriais sobre como utilizar o Moodle"
                >
                    <Image 
                        src="/img/content.svg"
                        width={40}
                        height={40}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Sobre nós"
                    text="Saiba  sobre os criadores do MoodleGam"
                >
                    <Image 
                        src="/img/info.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Ajuda"
                    text="Instruções sobre como utilizar o MoodleGam, e dúvidas mais frequentes"
                >
                    <Image 
                        src="/img/help.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

            </div>
            
        </Background>

    );
}