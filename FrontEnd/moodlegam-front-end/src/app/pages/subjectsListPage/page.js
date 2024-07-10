
"use client"
import "./style.css"
import Background from "@/app/components/Background";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 
import Image from "next/image";
import { axiosInstance } from "@/app/config/config";
import SubjectBox from "@/app/components/SubjectBox"
import dotenv from 'dotenv'
dotenv.config()

export default function SubjectsListPage (){

    const [subjectsList, setSubjectsList] = useState(null)


    function getDate(datetime) {
        const data = new Date(datetime);
        
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = data.getFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }
    

    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    
                    const subjectData = await fetchSubject(decodedUser.sub, token);
                    console.log("Disciplina:", subjectData)
                    setSubjectsList(subjectData)
                }
                
            } catch (error) {
                console.error('Erro ao buscar disciplinas do usuário:', error.response);
            }
        };

        fetchData();
        
    }, [])


    const fetchSubject = async(userId, token) =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/subject/user/${userId}`, 
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

  
            if (response.status === 200) {
                return response.data
            }
            else{
                console.log(response)
            } 
            

        } catch (error) {
            console.error('Erro ao buscar disciplinas');
            
            
        }

    }

    

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
                    {subjectsList && 
                        subjectsList.map((subject, index) => (
                            
                            <SubjectBox
                                yearSemester={subject.yearSemester}
                                name={subject.subjectName}
                                code={subject.subjectCode}
                                createdAt={getDate(subject.createdAt)}
                                subjectId={subject._id}
                                key={index}
                                techniques={subject.techniques}
                            />
                        
                        ))
                    }
                </div>




            </div>
            



        </Background>

    );
}

