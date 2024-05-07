"use client"
import "./style.css"
import { useEffect, useState, useRef, Fragment } from "react";
import Background from "../../components/Background";
import Image from "next/image";
import {jwtDecode} from "jwt-decode"; 
import { axiosInstance } from "@/app/config/config";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"
import {useRouter} from "next/navigation";



export default function ReuseSubjectGamification(){
    const subjectId = "66301fd926f093a263e049fc"
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [expandedSubjectId, setExpandedSubjectId] = useState(null);
    const [subjects, setSubjects] = useState([])

    const handleShowMoreClick = (subjectId) => {

        setExpandedSubjectId(subjectId); 
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        
        const fetchData = async () => {
            try {
                if(token){
                    const decodedUser = jwtDecode(token);
                    var techniquesData = null
                    var updatedCoreDrives = null
                    
                    
                    const subjectData = await fetchAllSubjects(decodedUser.sub, token);
                    const coreDrivesData = await fetchCoreDrives()
                    

                    subjectData.forEach(async(subject) => {
                        subject.showmore = false
                        subject.coredrives = []
                        techniquesData = await fetchTechniques(subject.techniques)
                        updatedCoreDrives = await sortCoreDrives(techniquesData, coreDrivesData)
                        subject.coredrives = updatedCoreDrives
                    });

                    console.log(subjectData)
                    setSubjects(subjectData)
                    
                }
                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])

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

    const fetchAllSubjects = async(userId, token) =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/subject/user/${userId}`, 
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
            console.error('Erro ao buscar disciplinas');
            
            
        }

    }

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
    function getDate(datetime) {
        const data = new Date(datetime);
        
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = data.getFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }
    return(
    
        
        <Background>
            <div className="reuse-subject-background">
                <h1>Passo 2 - Escolher disciplina para reaproveitar Gamificação</h1>
                <div className="reuse-subjects-list">
                    <table className="subject-table">
                        <thead>
                            <tr>
                                <th>Semestre</th>
                                <th>Disciplina</th>
                                <th>Código</th>
                                <th>Criada em</th>
                                <th></th>
                                <th></th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {subjects && subjects.map((subject) =>([
                                
                                    <tr key={subject._id}>
                                        <td>
                                            {subject.yearSemester}   
                                        </td>
                                        <td>
                                            {subject.subjectName}
                                        </td>
                                        <td>
                                            {subject.subjectCode}
                                        </td>

                                        <td>
                                            {getDate(subject.createdAt)}
                                        </td>
                                        <td>
                                            <a 
                                                onClick={subject._id === expandedSubjectId ? () => setExpandedSubjectId('')  : () => setExpandedSubjectId(subject._id)} 
                                                id="see-more-button"
                                            >
                                                Ver mais
                                            </a>
                                        
                                        </td>
                                        <td>
                                            <button id="select-subject-button" className="text-white font-bold py-1 px-2 rounded">
                                                Selecionar
                                            </button>
                                        </td>
                                    </tr>,


                                    <tr className={`transition-opacity duration-700 ease-in-out ${subject._id === expandedSubjectId ? 'visible opacity-100' : 'opacity-0 invisible  absolute'}`}>
                                        <td colSpan="6">
                                            <div className="selected-core-drives">
                                                {subject.coredrives.map((coredrive) =>(

                                                    <div key={coredrive._id} className="core-drive-information">
                                                        <h2>{coredrive.coreDriveName}</h2>
                                                        <div id="header-line"></div>
                                                        {coredrive.techniques.map((technique) =>(
                                                            <p key={technique._id}>{technique.techniqueName}</p>


                                                        ))}
                                                        
                                                    </div>


                                                ))}
                                                
                                                

                                            </div>
                                        </td>
                                

                                    </tr>

                                
                                


                            ]))}
                           
                            
                        </tbody>
                    </table>
                
                    
                </div>
            </div>
            
            


            
        </Background>

    
    
    )
}