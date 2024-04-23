
import Background from "../../components/Background";
import MenuOption from "@/app/components/MenuOption"
import Image from "next/image";
import "./style.css"

export default function Subject(){




    return (
        <Background>

            <div className="subject-option">

                <MenuOption
                    title="Nova Disciplina"
                    text="Crie uma nova Disciplina e aplique Gamificação a ela"
                    redirect="registerSubjectPage" 
                >
                    <Image 
                        src="/img/plus.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Ver disciplinas"
                    text="Veja quais disciplinas já foram cadastradas"
                    redirect="subjectsListPage"
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