
import './style.css'
import Link from "next/link"
import { useEffect, useState } from "react";
import RadarGraph from "@/app/components/RadarGraph"
import { axiosInstance } from "@/app/config/config";

export default function SubjectBox(props){
    const token = localStorage.getItem("token");
    const [techniqueQuantitys, setTechniqueQuantitys] = useState([])
    const [coreDrives, setCoreDrives] = useState([])

    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    //Coloca as técnicas dentro de cada core drive correspondente
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

    useEffect(() => {

        const fetchData = async () => {
            try {

                //const subjectData = await fetchSubject(searchParams.searchParams.subjectId, token);
                //setSubject(subjectData)
                
                const techniquesData = await fetchTechniques(props.techniques)
                
                
                const coreDrivesData = await fetchCoreDrives()
                

                const updatedCoreDrives = await sortCoreDrives(techniquesData, coreDrivesData)
                
                //setCoreDrives(updatedCoreDrives)
                var techniqueQuantity = [0,0,0,0,0,0,0,0]

                //Preenche o vetor de quantidade de técnicas de acordo com o formato que o gráfico irá mostrar
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

    return (
        <div className="subject-container">
            <div className="subject-header">
                <span>{props.yearSemester}</span>
            </div>

            <div className="subject-data">
                <h1>{props.name}</h1>
                <h4>Código da Disciplina: {props.code}</h4>
                <div className="graph-subject-box">
                    <RadarGraph
                        techniqueQuantitys={techniqueQuantitys !== null ? techniqueQuantitys : []}
                        miniature = {true}
                    />
                </div>
                
            </div>

            <div className="subject-footer">
                <p>Criada em {props.createdAt}</p>
                <Link
                    href={{
                        pathname: "/pages/subjectDetailsPage",
                        query: {
                            subjectId: props.subjectId
                        }
                    }}
                >
                    <p id="subject-details-link">Ver detalhes</p>
                </Link>
            </div>
            
        </div>
    );
}