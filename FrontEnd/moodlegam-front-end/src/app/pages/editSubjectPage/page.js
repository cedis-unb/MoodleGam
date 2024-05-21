"use client"
import "./style.css"
import Background from "../../components/Background";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "@/app/config/config";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"
import {useRouter} from "next/navigation";
import Link from "next/link"
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"

export default function EditSubjectPage(searchParams){

   
    const recommendedQuantity = 10
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [subject, setSubject] = useState(null)
    const [year, setYear] = useState('')
    const [semester, setSemester] = useState('')
    const [techniques, setTechniques] = useState([])
    const [coreDrives, setCoreDrives] = useState([])
    const [chosenTechniques, setChosenTechniques] = useState([])
    const [errorText, setErrorText] = useState('')
    const [techniqueQuantity, setTechniqueQuantity] = useState(0)
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [infoModalOpen, setinfoModalOpen] = useState(false)
    
    const topOfThePage = useRef(null)
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(`subjectid: ${searchParams.searchParams.subjectId}`)
        
        const fetchData = async () => {
            try {


                const subjectData = await fetchSubject(searchParams.searchParams.subjectId, token);
                setYearAndSemester(subjectData.yearSemester)
                setChosenTechniques(subjectData.techniques)
                setTechniqueQuantity(subjectData.techniques.length)
                setSubject(subjectData)
                
                const allTechniques = await fetchAllTechniques() //pegar todas as técnicas
                
                
                const coreDrivesData = await fetchCoreDrives() //pegar todos os coredrives
                

                const updatedCoreDrives = await sortCoreDrives(allTechniques, coreDrivesData)
                setCoreDrives(updatedCoreDrives)

                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error);
            }
        };

        fetchData();
        
    }, [])

    function validateUserData(e){
        if(!subject.subjectCode && !subject.subjectName && !year && !semester){
            
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            
            return false
        }
        else if(!subject.subjectName){
            setErrorText("Nome da disciplina está vazia, preencha-a")
            backToTop()
            e.preventDefault()
            
            return false
        }
        else if(!subject.subjectCode){
            setErrorText("Código da disciplina está vazia, preencha-o")
            e.preventDefault()
            return false
        }
        else if(!year){
            setErrorText("Ano está vazio, preencha-o")
            e.preventDefault()
            return false
        }
        else if(!semester){
            setErrorText("Semestre está vazio, preencha-o")
            e.preventDefault()
            return false
        }
        else if(year > 2100 || year < 1960){
            setErrorText("Ano inválido, preencha-o novamente")
            e.preventDefault()
            return false
        }
        else{
           
            return true
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        
        if(validateUserData(e)){
            
            
            try {
                console.log(`subject ${subject}`)
                const token = localStorage.getItem("token")
                
                const subjectName = subject.subjectName
                const subjectCode = subject.subjectCode
                const note = subject.note
                const yearSemester = `${year}/${semester}`
                const techniques = chosenTechniques 
                const response = await axiosInstance.put(
                    `/subject/${searchParams.searchParams.subjectId}`, 
                    {
                        subjectName,
                        subjectCode,
                        note,
                        yearSemester,
                        techniques
                    },
                    
                    {
                        headers: {
                            'x-api-key': `${apiKey}`,
                            'Authorization': `Bearer ${token}`
                        }
                    }
                    
                )
               
            
                if (response.status === 200) {
                  
                  console.log('Disciplina atualizada:', response.data);
                  setinfoModalOpen(true)
                  
                  setErrorText('')
                  
                  
                } else {
                  // Tratar erros de requisição
                  console.error('Erro ao atualizar a disciplina:', response.statusText);
                }
            } catch (error) {
                // Tratar erros de rede
                console.error('Erro de rede:', error);
                setErrorText("Erro no envio dos dados")
            }
        }
      

        
    }

    const redirectToHomePage = () => {
        
        router.push('/pages/homepage'); 
    };

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
   


    const fetchAllTechniques = async() =>{
        try{
            const response = await axiosInstance.get(
                `/technique/`,
                {
                    headers: {
                        'x-api-key': apiKey,
                    }
                }
            );

            if (response.status === 200) {
                return response.data; 
            } else {
                console.log(response);
            }
        } catch (error){
            console.log("Erro ao buscar técnicas " , error)
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

    function setYearAndSemester(yearSemester) {
        
        const parts = yearSemester.split('/');
        
        setYear(parts[0])
        setSemester(parts[1])
        
    }


    const handleCheckboxChange = (e) =>{
        const { value, checked } = e.target;
        var updatedTechniques = null
        if (checked) {
            updatedTechniques = [...chosenTechniques, value]
            addTechnique();
        } else {
            updatedTechniques = chosenTechniques.filter((technique) => technique !== value);
            subtractTechnique();
        }

        setChosenTechniques(updatedTechniques)

        
        
    }

    function addTechnique(){

        setTechniqueQuantity(techniqueQuantity + 1)
        
    }

    function subtractTechnique(){
        setTechniqueQuantity(techniqueQuantity - 1)
    }

    function getRiskLevel(techniqueQuantity) {
        if (techniqueQuantity > recommendedQuantity) {
            return "Alta";
        } else if (techniqueQuantity === recommendedQuantity) {
            return "Moderada";
        } else {
            return "Baixa";
        }
    }

    function getRiskColor(riskLevel){
        if(riskLevel === "Alta"){
            return "#DC3545"
        }
        else if(riskLevel === "Moderada"){
            return "#FD7E14"
        }
        else {
            return "#28A745"
        }
    }

    function isChecked(techniqueId){
        
        if(subject.techniques.includes(techniqueId) && chosenTechniques.includes(techniqueId)){
            return true
        }
        else if(chosenTechniques.includes(techniqueId)){
            return true
        }
        else {
            return false
        }
        
    }
    function backToTop() {
        if(topOfThePage.current){
            topOfThePage.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleConfirm = () =>{
        setConfirmModalOpen(true)
    }

    const closeModal = () =>{
        setinfoModalOpen(false)
        setConfirmModalOpen(false)
    }

    const getFileName = (techniqueName) =>{
        var fileName = techniqueName.toLowerCase()
        fileName = fileName.split(' ').join('')

        fileName = fileName.replace('ç', 'c')

        fileName = fileName.replace('ã', 'a')
        fileName = fileName.replace('á', 'a')
        fileName = fileName.replace('â', 'a')
        fileName = fileName.replace('à', 'a')

        fileName = fileName.replace('ẽ', 'e')
        fileName = fileName.replace('é', 'e')
        fileName = fileName.replace('ê', 'e')
        fileName = fileName.replace('è', 'e')

        fileName = fileName.replace('ĩ', 'i')
        fileName = fileName.replace('í', 'i')
        fileName = fileName.replace('î', 'i')
        fileName = fileName.replace('ì', 'i')


        fileName = fileName.replace('õ', 'o')
        fileName = fileName.replace('ó', 'o')
        fileName = fileName.replace('ô', 'o')
        fileName = fileName.replace('ò', 'o')


        fileName = fileName.replace('ũ', 'u')
        fileName = fileName.replace('ú', 'u')
        fileName = fileName.replace('û', 'u')
        fileName = fileName.replace('ù', 'u')

        return fileName
    }

    const riskLevel = getRiskLevel(techniqueQuantity);
    const riskColor = getRiskColor(riskLevel)

    return (
        <>
            {confirmModalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja editar essa disciplina?"
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
                    bodyText="Disciplina atualizada com sucesso !"
                    buttonText="Voltar a tela inicial"
                    linkProps={null}
                    onConfirm={redirectToHomePage}
                    secondOption={null}
                />


            )}
            <Background>
                <div ref={topOfThePage}></div>
                <div className="background-subject-details">
                    
                    <div className="subject-inputs">

                        <input 
                            value={subject !== null ? subject.subjectName : ''}
                            type="text" 
                            placeholder="Nome"
                            onChange={(e) => setSubject({...subject, subjectName: e.target.value})}
                        ></input>

                        <input 
                            value={subject !== null ? subject.subjectCode : ''}
                            type="text" 
                            placeholder="Código"
                            onChange={(e) => setSubject({...subject, subjectCode: e.target.value})}
                        ></input>

                        <textarea 
                            value={subject !== null ? ` ${subject.note}` : ''}
                            rows="4" 
                            cols="45"
                            placeholder="Observação"
                            onChange={(e) => setSubject({...subject, note: e.target.value})}
                        ></textarea>


                        <input 
                            value={year !== null ? year : ''}
                            type="text" 
                            placeholder="Ano"
                            onChange={(e) => setSubject({...subject, year: e.target.value})}
                        ></input>

                        <select required onChange={(e) => setSubject({...subject, semester: e.target.value})} value={semester}>
                            <option value="">Semestre</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                        <div className="error-register-wrapper">
                            <span id="error-text-register-user">{errorText}</span>

                        </div>

                        <div className="edit-technique-quantity">
                            <div className="technique-quantity-text">
                                <span>Quantidade de técnicas escolhidas: <span className="font-bold">{techniqueQuantity}</span></span>
                            </div>
                            
                            <div className="technique-quantity-text">
                                <span>Dificuldade de implementação: <span style={{color: riskColor, fontWeight: 'bold'}}>{riskLevel}</span></span>
                            </div>
                            
                        </div>
                    </div>


                    {coreDrives && coreDrives.map((coreDrive) => (

                        <div className="core-drive-box">

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

                                            <div key={technique._id} className="choose-technique-box">
                                                <input 
                                                    type="checkbox" 
                                                    id={`technique-${technique._id}`} 
                                                    onChange={handleCheckboxChange}
                                                    value={technique._id}
                                                    checked={isChecked(technique._id)}
                                                />
            
                                                <label htmlFor={`technique-${technique._id}`}>
                                                    {technique.techniqueName}
                                                </label>

                                                <Link
                                                    href={{
                                                        pathname: `/pages/tutorials/${getFileName(technique.techniqueName)}`
                                                    }}

                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <a target="_blank">
                                                        <Image 
                                                            src="/img/help.svg"
                                                            width={25}
                                                            height={25}
                                                            unoptimized={true}
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        
                                ))}
                                

                            </div>
                        </div>

                    ))}
                    
                    



                    

                </div>


                <div className="edit-subject-button-wrapper">
                    <Button
                        text="Finalizar"
                        type="submit"
                        onClick={handleConfirm}
                    />
                </div>
            </Background>
        
        
        </>
        


    );
}