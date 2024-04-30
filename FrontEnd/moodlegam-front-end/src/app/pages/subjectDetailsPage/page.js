"use client"
import "./style.css"
import Background from "../../components/Background";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";

export default function SubjectDetailsPage(searchParams){

   
    
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [subject, setSubject] = useState(null)
    const [techniques, setTechniques] = useState([])
    const [coreDrives, setCoreDrives] = useState([])
    
    
    
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
                
                const techniquesData = await fetchTechniques(subjectData.techniques)
                
                
                const coreDrivesData = await fetchCoreDrives()
                

                const updatedCoreDrives = await sortCoreDrives(techniquesData, coreDrivesData)
                setCoreDrives(updatedCoreDrives)

                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])

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
    const updateCoreDrivesWithTechniques = (techniques, coreDrives) => {
        const updatedCoreDrives = coreDrives.map((coreDrive) => {
            const matchingTechniques = techniques.filter(
            (technique) => technique.coredriveId === coreDrive.id
            );
            return {
            ...coreDrive,
            techniques: [...coreDrive.techniques, ...matchingTechniques],
            };
        });
        return updatedCoreDrives;
    };

    const fetchTechniques = async(techniquesIds) =>{
        
        var techniquesList = []

        try {
            for (const techniqueId of techniquesIds) {
                const response = await axiosInstance.get(
                    `/technique/${techniqueId}`,
                    {
                        headers: {
                            'x-api-key': apiKey,
                        }
                    }
                );

                if (response.status === 200) {
                    techniquesList.push(response.data); // Adiciona o resultado à lista
                } else {
                    console.log(response);
                }
            }
        } catch (error) {
            console.error('Erro ao buscar técnica:', error);
        }
        
        return techniquesList
    
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
                
                return response.data
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
                    <p>Semestre:  <span id="subject-info">{subject !== null ? subject.yearSemester : ''} </span></p>
                    <p>Código da disciplina:  <span id="subject-info">{subject !== null ? subject.subjectCode : ''}</span></p>
                    <p>Observações: 
                        <span id="subject-info">
                           {subject !== null ? ` ${subject.note}` : ''}
                        </span>
                    </p>
                </div>


                {coreDrives && coreDrives.map((coreDrive) => (

                    <div className="core-drive-box">

                        <div className="core-drive-header">
                            <h2>{coreDrive !== null ? coreDrive.coreDriveName : ''}</h2>
                            
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive && 
                                    coreDrive.techniques.map((technique, index) => (

                                    <div key={technique._id} className="technique-box">
                                        <span>{technique.techniqueName}</span>
                                    </div>
                                    
                            ))}
                            

                        </div>
                    </div>

                ))}
                
                



                

            </div>



        </Background>


    );
}