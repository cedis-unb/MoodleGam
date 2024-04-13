
import Background from "../../components/Background";
import MenuOption from "@/app/components/MenuOption"
import Image from "next/image";
import "./style.css"

export default function Subject(){




    return (
        <Background>

            <div className="subject-option">

                <MenuOption
                    title="Disciplina"
                    text="Crie e edite Disciplinas, além de ver as que já foram criadas. Ao criar uma Disciplina é possível adicionar turmas para mesma. "
                >
                    <Image 
                        src="/img/plus.svg"
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
                        src="/img/list.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

               

            </div>
            
        </Background>

    );
}