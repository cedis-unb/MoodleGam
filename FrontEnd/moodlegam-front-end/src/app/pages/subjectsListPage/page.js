

import "./style.css"
import Background from "@/app/components/Background";
import Image from "next/image";
import SubjectBox from "@/app/components/SubjectBox"
export default function SubjectsListPage (){



    return (

        <Background>
            <div className="background-subjects-page">

                <div className="subjects-options">

                    <div className="filter-subjects">
                        <Image 
                            src="/img/filter.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <span>Filtrar por</span>
                    </div>

                    <div className="filter-subjects">
                        <Image 
                            src="/img/show_first.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <span>Mostrar primeiro</span>
                    </div>

                </div>

                <div className="subjects-list">
                    <SubjectBox
                        yearSemester="2024/1"
                        name="Fundamentos de Sistemas Operacionais"
                        code="FGA-123"
                        createdAt="01/01/2024"
                    
                    />


                </div>




            </div>
            



        </Background>

    );
}

