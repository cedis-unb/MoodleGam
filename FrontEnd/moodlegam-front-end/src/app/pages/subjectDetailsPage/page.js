"use client"
import "./style.css"
import Background from "../../components/Background";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";
import Link from "next/link"
import {useRouter} from "next/navigation";
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import RadarGraph from "@/app/components/RadarGraph"
import dotenv from 'dotenv'

dotenv.config()

export default function SubjectDetailsPage(searchParams){
    const router = useRouter()
   
    
    const [subject, setSubject] = useState(null)
    const [techniqueQuantitys, setTechniqueQuantitys] = useState([])
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
                console.log(updatedCoreDrives)
                setCoreDrives(updatedCoreDrives)
                var techniqueQuantity = [0,0,0,0,0,0,0,0]

                updatedCoreDrives.forEach((coreDrive) =>{
                    if(coreDrive.coreDriveName.includes("1")){
                        techniqueQuantity[0] = coreDrive.techniques.length 
                    }
                    else if(coreDrive.coreDriveName.includes("2")){
                        techniqueQuantity[7] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("3")){
                        techniqueQuantity[1] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("4")){
                        techniqueQuantity[6] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("5")){
                        techniqueQuantity[2] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("6")){
                        techniqueQuantity[5] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("7")){
                        techniqueQuantity[3] = coreDrive.techniques.length
                    }
                    else if(coreDrive.coreDriveName.includes("8")){
                        techniqueQuantity[4] = coreDrive.techniques.length
                    }
                })
                
            
                setTechniqueQuantitys(techniqueQuantity)
                
                
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


    const redirect= (techniqueName) => {
        
        router.push(`/pages/tutorials/${techniqueName.toLowerCase()}`); 
    };

    const getFileName = (techniqueName) =>{
        var fileName = techniqueName.toLowerCase()
        fileName = fileName.split(' ').join('')

        fileName = fileName.replace(/ç/g, 'c')

        fileName = fileName.replace(/ã/g, 'a')
        fileName = fileName.replace(/á/g, 'a')
        fileName = fileName.replace(/â/g, 'a')
        fileName = fileName.replace(/à/g, 'a')

        fileName = fileName.replace(/ẽ/g, 'e')
        fileName = fileName.replace(/é/g, 'e')
        fileName = fileName.replace(/ê/g, 'e')
        fileName = fileName.replace(/è/g, 'e')

        fileName = fileName.replace(/ĩ/g, 'i')
        fileName = fileName.replace(/í/g, 'i')
        fileName = fileName.replace(/î/g, 'i')
        fileName = fileName.replace(/ì/g, 'i')


        fileName = fileName.replace(/õ/g, 'o')
        fileName = fileName.replace(/ó/g, 'o')
        fileName = fileName.replace(/ô/g, 'o')
        fileName = fileName.replace(/ò/g, 'o')


        fileName = fileName.replace(/ũ/g, 'u')
        fileName = fileName.replace(/ú/g, 'u')
        fileName = fileName.replace(/û/g, 'u')
        fileName = fileName.replace(/ù/g, 'u')

        return fileName
    }

    return (
        <Background>
            <div className="background-subject-details">
                <div className="header-subject-details">
                   
                    <h1>{subject !== null ? subject.subjectName : ''}</h1>
                    <div className="edit-subject-wrapper">
                        
                        <Image
                            src="/img/edit.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <Link
                            href={{
                                pathname: "/pages/editSubjectPage",
                                query: {
                                    subjectId: searchParams.searchParams.subjectId
                                }
                            }}
                        >
                            <p id="edit-button">Editar dados</p>
                        </Link>

                    </div>
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
                <div className="radar-chart">
                    <RadarGraph
                        techniqueQuantitys={techniqueQuantitys !== null ? techniqueQuantitys : []}
                    />
                </div>
                
                {coreDrives && coreDrives.map((coreDrive) => (

                    <div key={coreDrive._id} className="core-drive-box">

                        <div className="core-drive-header">
                            <h2>{coreDrive !== null ? coreDrive.coreDriveName : ''}</h2>
                            {coreDrive.hat != null ? 
                                coreDrive.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive.motivation != null ? 
                                coreDrive.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive && 
                                    coreDrive.techniques.map((technique, index) => (

                                    <Link
                                        href={{
                                            pathname: `/pages/tutorials/${getFileName(technique.techniqueName)}`
                                        }}

                                        key={technique._id}
                                    >
                                        <div 
                                            key={technique._id} 
                                            className="technique-box" 
                                            title="Clique para ver o tutorial dessa técnica"
                                            
                                        >

                                            
                                
                                            
                                            <span>{technique.techniqueName}</span>
                                            
                                            
                                        </div>
                                    </Link>
                                
                                    
                            ))}
                            

                        </div>
                    </div>

                ))}
                
                



                

            </div>



        </Background>


    );
}