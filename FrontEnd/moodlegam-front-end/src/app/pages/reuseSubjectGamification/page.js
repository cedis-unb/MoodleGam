"use client"
import "./style.css"
import { useEffect, useState, useRef, Fragment } from "react";
import Background from "../../components/Background";
import {jwtDecode} from "jwt-decode"; 
import { axiosInstance } from "@/app/config/config";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"
import {useRouter} from "next/navigation";
import { useSearchParams } from "next/navigation";
import dotenv from 'dotenv'
import LoadingPage from "@/app/components/LoadingPage";
dotenv.config()


export default function ReuseSubjectGamification(){
    const searchParams = useSearchParams()
    const subjectId = searchParams.get("subjectId")

    const [loading, setLoading] = useState(false)
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [expandedSubjectId, setExpandedSubjectId] = useState(null);
    const [subjects, setSubjects] = useState([])
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [infoModalOpen, setinfoModalOpen] = useState(false)
    const [chosenSubjectId, setChosenSubjectId] = useState('')

    const router = useRouter();

    const handleShowMoreClick = (subjectId) => {

        setExpandedSubjectId(subjectId); 
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("subjectid ", subjectId)
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
                    setSubjects(subjectData.filter(subject => subject.techniques.length > 0))
                    
                }
                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])

    const handleSubmit = async() =>{
        closeModal()
        setLoading(true)
        const token = localStorage.getItem("token")
        const chosenSubject = await fetchSubject(chosenSubjectId, token)


        try {
            
        
            const techniques = chosenSubject.techniques 

            const response = await axiosInstance.put(
                `/subject/${subjectId}`, 
                {
                    techniques
                },
                
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                        'Authorization': `Bearer ${token}`
                    }
                }
                
            )
           
        
            if (response.status === 200) {
              
              console.log('Disciplina atualizada:', response.data);
              
              
              
              
              
            } else {
              
              console.error('Erro ao atualizar a disciplina:', response.statusText);
            }
        } catch (error) {
            
            console.error('Erro de rede:', error);
            setErrorText("Erro no envio dos dados")
        } finally {
            setLoading(false)
            setinfoModalOpen(true)
        }
    }

    const handleConfirm = (subjectId) =>{
        setConfirmModalOpen(true)
        setChosenSubjectId(subjectId)
    }

    const fetchCoreDrives = async() =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/coreDrive`, 
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
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

    const fetchSubject = async(subjectId, token) =>{
        
        try {
            
            const response = await axiosInstance.get(
                `/subject/${subjectId}`, 
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
            console.error('Erro ao buscar disciplina');
            
            
        }

    }
    const fetchAllSubjects = async(userId, token) =>{
        
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

    const fetchTechniques = async(techniquesIds) =>{
        
        var techniquesList = []

        try {
            for (const techniqueId of techniquesIds) {
                const response = await axiosInstance.get(
                    `/technique/${techniqueId}`,
                    {
                        headers: {
                            'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
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

    const redirectToHomePage = () => {
        
        router.push('/pages/homepage'); 
    };

    const closeModal = () =>{
        setinfoModalOpen(false)
        setConfirmModalOpen(false)
    }


    // useEffect(() => {
    //     setConfirmModalOpen(true)
    // }, [chosenSubjectId])

    return(
    
        <>
            {loading && (
                <LoadingPage/>
            )}

            {confirmModalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja escolher essa Gamificação?"
                    buttonText="Sim"
                    linkProps={null}
                    onConfirm={handleSubmit}
                    cancelOption={true}
                    onCancel={closeModal}
                    secondOption={null}
                />


            )}


            {infoModalOpen && (

                <Modal
                    bodyText="Técnicas cadastradas com sucesso !"
                    buttonText="Voltar a tela inicial"
                    linkProps={null}
                    onConfirm={redirectToHomePage}
                    secondOption={null}
                />


            )}

            
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
                            <tbody className="relative">
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
                                                <button 
                                                    id="select-subject-button" 
                                                    className="text-white font-bold py-1 px-2 rounded"
                                                    onClick={() => handleConfirm(subject._id)}
                                                >
                                                    Selecionar
                                                </button>
                                            </td>
                                        </tr>,


                                        <tr key={subject._id} className={`transition-opacity duration-700 ease-in-out ${subject._id === expandedSubjectId ? 'visible opacity-100' : 'opacity-0 invisible  absolute'}`}>
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
        
        </>
        

    
    
    )
}