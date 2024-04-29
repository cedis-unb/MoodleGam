"use client"
import "./style.css"
import Background from "../../components/Background";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";

export default function SubjectDetailsPage(searchParams){

   
    
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [subject, setSubject] = useState(null)
    
    
    
    function getDate(datetime) {
        const data = new Date(datetime);
        
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = data.getFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {

                const subjectData = await fetchSubject(searchParams.searchParams.subjectId, token);
                setSubject(subjectData)
                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])


    const fetchSubject = async(subjectId, token) =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/subject/${subjectId}`, 
                {
                    headers: {
                        'x-api-key': `${apiKey}`,
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

  
            if (response.status === 200) {
                
                return response.data[0]
            }
            else{
                console.log(response)
            } 
            

        } catch (error) {
            console.error('Erro ao buscar disciplina');
            
            
        }

    }
    return (
        <Background>
            <div className="background-subject-details">
                <div className="header-subject-details">
                   
                    <h1>{subject !== null ? subject.subjectName : ''}</h1>
                    <a className="edit-subject-wrapper">
                        
                        <Image
                            src="/img/edit.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <p id="edit-button">Editar dados</p>

                    </a>
                </div>

                <div className="subject-details">
                    <p>Semestre:  <span id="subject-info">{subject !== null ? getDate(subject.yearSemester) : ''} </span></p>
                    <p>Código da disciplina:  <span id="subject-info">{subject !== null ? subject.subjectCode : ''}</span></p>
                    <p>Observações: 
                        <span id="subject-info">
                           {subject !== null ? subject.note : ''}
                        </span>
                    </p>
                </div>

                <div className="core-drive-box">

                    <div className="core-drive-header">
                        <h2>CORE DRIVE 1 - Significado Épico & Chamado (Epic Meaning & Calling)</h2>
                        <div className="white-hat-box">
                            <span>White Hat</span>
                        </div>
                    </div>

                    <div className="core-drive-techniques">

                        

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                    </div>
                </div>



                <div className="core-drive-box">
                    <div className="core-drive-header">
                        <h2>CORE DRIVE 1 - Significado Épico & Chamado (Epic Meaning & Calling)</h2>
                        <div className="motivation-box">
                            <span>White Hat</span>
                        </div>
                    </div>

                    <div className="core-drive-techniques">
                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Narrativa</span>
                        </div>

                        <div className="technique-box">
                            <span>Filho do destino</span>
                        </div>

                    </div>
                </div>

            </div>



        </Background>


    );
}