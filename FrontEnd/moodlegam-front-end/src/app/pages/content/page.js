
import Background from "../../components/Background";
import MenuOption from "@/app/components/MenuOption"
import Image from "next/image";
import "./style.css"

export default function Content(){




    return (
        <Background>

            <div className="content-option">

                <MenuOption
                    title="Gamificação"
                    text="Aprenda sobre o conceito de Gamificação, sua finalidade e suas aplicações"
                    redirect="gamificationContent" 
                >
                    <Image 
                        src="/img/reward.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Octalysis"
                    text="Aprenda sobre o Framework de Gamificação feito pelo autor Yu Kai Chou e suas aplicações"
                    redirect="octalysisContent"
                >
                    <Image 
                        src="/img/octalysis.png"
                        width={75}
                        height={75}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Moodle"
                    text="Saiba mais sobre o Ambiente de Aprendizagem Virtual Moodle e suas funcionalidades"
                    redirect="moodleContent"
                >
                    <Image 
                        src="/img/moodle_logo.png"
                        width={60}
                        height={60}
                        unoptimized={true}
                    />
                </MenuOption>

                

               

            </div>
            
        </Background>

    );
}