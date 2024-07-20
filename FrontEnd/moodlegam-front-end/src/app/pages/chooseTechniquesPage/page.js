
"use client"
import Background from "../../components/Background";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import "./style.css"
import Button from "@/app/components/Button";
import "../subjectDetailsPage/style.css"
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal"
import Link from "next/link"
import BlackHatBox from "@/app/components/BlackHatBox"
import WhiteHatBox from "@/app/components/WhiteHatBox"
import IntrinsicBox from "@/app/components/IntrinsicBox"
import ExtrinsicBox from "@/app/components/ExtrinsicBox"
import RadarGraph from "@/app/components/RadarGraph"
import {axiosInstance} from '../../config/config'
import dotenv from 'dotenv'
dotenv.config()

export default function ChooseTechniquePage(searchParams){

    const router = useRouter();

    const recommendedQuantity = 10
    const [techniqueQuantity, setTechniqueQuantity] = useState(0)
    const [chosenTechniques, setChosenTechniques] = useState([])
    const [coreDriveList, setCoreDriveList] = useState(null)
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [infoModalOpen, setinfoModalOpen] = useState(false)
    const [modalData, setModalData] = useState()
    const [coreDrive1, setCoreDrive1] = useState(null)
    const [coreDrive2, setCoreDrive2] = useState(null)
    const [coreDrive3, setCoreDrive3] = useState(null)
    const [coreDrive4, setCoreDrive4] = useState(null)
    const [coreDrive5, setCoreDrive5] = useState(null)
    const [coreDrive6, setCoreDrive6] = useState(null)
    const [coreDrive7, setCoreDrive7] = useState(null)
    const [coreDrive8, setCoreDrive8] = useState(null)
    
    const [techniqueQuantitys, setTechniqueQuantitys] = useState([])

    useEffect(() => {
        console.log(searchParams.searchParams.subjectId)
        const fetchData = async () => {
            try {
                const coreDrives = await fetchCoreDrives()
                fetchTechniques(coreDrives)
                //setCoreDriveList(coreDrives)

                
            } catch (error) {
                console.error('Erro ao buscar Core Drives', error.response);
            }

            
                
        };

        fetchData();
        
    }, [])


    const fetchTechniques = async(coreDrives) =>{
        console.log(coreDrives[0]._id)
        if (coreDrives) {
            coreDrives.forEach(async coreDrive => {
                
                try {
            
                    const response = await axiosInstance.get(
                        `/technique/getByCoreDrive/${coreDrive._id}`, 
                        {
                            headers: {
                                'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
                            }
                        }
                    );
        
            
                    if (response.status === 200) {


                        if(coreDrive.coreDriveName.includes("Core Drive 1")){
                            setCoreDrive1({
                                coreDriveName: coreDrive.coreDriveName,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                               
                            
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 2")){
                            setCoreDrive2({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 3")){
                            setCoreDrive3({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 4")){
                            setCoreDrive4({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 5")){
                            setCoreDrive5({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 6")){
                            setCoreDrive6({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 7")){
                            setCoreDrive7({
                                coreDriveName: coreDrive.coreDriveName,
                                motivation: coreDrive.motivation,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                        }
                        else if(coreDrive.coreDriveName.includes("Core Drive 8")){
                            setCoreDrive8({
                                coreDriveName: coreDrive.coreDriveName,
                                hat: coreDrive.hat,
                                techniques: response.data
                            });
                        }



                        return 
                    }
                    else{
                        console.log(response)
                    } 
                    
        
                } catch (error) {
                    console.error('Erro ao buscar tecnicas');
                    
                    
                }

            });
        } else {
            console.log("A lista de core drives está vazia.");
        }

        
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

    
    

    const handleSubmit = async e => {
        e.preventDefault();
        setConfirmModalOpen(false)
        try {

            const response = await axiosInstance.put(
                `/subject/${searchParams.searchParams.subjectId}`, 
                {
                    techniques: chosenTechniques 
                },
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                
            )
            
        
            if (response.status === 200) {
               
                console.log('Disiplina atualizada:', response.data);
                setinfoModalOpen(true)
               
                
            } else {
            
                console.error('Erro ao atualizar disciplina:', response.statusText);
            }
        } catch (error) {
            
            console.error('Erro de rede:', error.response);
        }
    }

    function addTechnique(){

        setTechniqueQuantity(techniqueQuantity + 1)
        
    }

    function subtractTechnique(){
        setTechniqueQuantity(techniqueQuantity - 1)
    }

    function updateRadarGraph(techniqueId, operation){
        
        var quantity = [...techniqueQuantitys]

        if(coreDrive1.techniques.some(technique => technique._id === techniqueId)){
            if(operation === "add"){
                quantity[0] =  quantity[0] + 1
            }
            else{
                quantity[0] =  quantity[0] - 1
            }
            

        }
        else if(coreDrive2.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[7] = quantity[7] + 1
            }
            else{
                quantity[7] = quantity[7] - 1
            }
            

        }
        else if(coreDrive3.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[1] = quantity[1] + 1
            }
            else{
                quantity[1] = quantity[1] - 1
            }
            

        }
        else if(coreDrive4.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[6] = quantity[6] + 1
            }
            else{
                quantity[6] = quantity[6] - 1
            }
            

        }
        else if(coreDrive5.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[2] = quantity[2] + 1
            }
            else{
                quantity[2] = quantity[2] - 1
            }
            

        }
        else if(coreDrive6.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[5] = quantity[5] + 1
            }
            else{
                quantity[5] = quantity[5] - 1
            }
            

        }
        else if(coreDrive7.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[3] = quantity[3] + 1
            }
            else{
                quantity[3] = quantity[3] - 1
            }
            

        }
        else if(coreDrive8.techniques.some(technique => technique._id === techniqueId)){

            if(operation === "add"){
                quantity[4] = quantity[4] + 1
            }
            else{
                quantity[4] = quantity[4] - 1
            }

            

        }
        //console.log("quantity ", quantity)
        setTechniqueQuantitys(quantity)
    }
    const handleCheckboxChange = (e) =>{
        const { value, checked } = e.target;
        var updatedTechniques = null
        if (checked) {
            updatedTechniques = [...chosenTechniques, value]
            addTechnique();
            updateRadarGraph(value, "add")
        } else {
            updatedTechniques = chosenTechniques.filter((technique) => technique !== value);
            subtractTechnique();
            updateRadarGraph(value, "subtract")
        }

        setChosenTechniques(updatedTechniques)

        
        
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

    const riskLevel = getRiskLevel(techniqueQuantity);
    const riskColor = getRiskColor(riskLevel)

    const closeModal = () =>{
        setinfoModalOpen(false)
        setConfirmModalOpen(false)
    }

    const handleConfirm = () =>{
        setConfirmModalOpen(true)
    }

    const redirectToHomepage = () =>{
        router.push("/pages/homepage")
    }


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

        <>
            {confirmModalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja escolher essas técnicas?"
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
                    bodyText="Técnicas adicionadas a Disciplina !"
                    buttonText="Voltar a tela inicial"
                    linkProps={null}
                    onConfirm={redirectToHomepage}
                    secondOption={null}
                />


            )}
        
        
        <Background>
            
            <div className="choose-technique-background">

                <div className="choose-technique-header">

                    <div className="text-warnings">
                        <h1>Passo 2 - Escolha das técnicas de Gamificação</h1>
                        <p>Clique nas técnicas que deseja aplicar em sua disciplina e clique em “Confirmar”</p>
                        <div className="core-drive-help">
                            <Image 
                                src="/img/question.svg"
                                width={30}
                                height={30}
                                unoptimized={true}
                            />
                            <span>Para se informar sobre cada técnica de gamificação, basta clicar em no ícone &quot;?&quot;. 
                                E para saber mais sobre os Core Drives basta clicar em seus respectivos nomes.
                            </span>
                        </div>
                        <div className="core-drive-warning">
                            <Image 
                                src="/img/exclamation.svg"
                                width={30}
                                height={30}
                                unoptimized={true}
                            />
                            <span><span id="attention">Atenção</span> : Escolher mais de 10 técnicas de Gamificação gera uma grande diculdade de implementação dessas técnicas</span>
                        </div>
                    </div>
                    <div className="technique-quantity">
                        <div className="technique-quantity-text">
                            <span>Quantidade de técnicas escolhidas: <span className="font-bold">{techniqueQuantity}</span></span>
                        </div>
                        
                        <div className="technique-quantity-text">
                            <span>Dificuldade de implementação: <span style={{color: riskColor, fontWeight: 'bold'}}>{riskLevel}</span></span>
                        </div>
                        
                    </div>
                </div>


                <div className="radar-chart">
                    <RadarGraph
                        techniqueQuantitys={techniqueQuantitys !== null ? techniqueQuantitys : []}
                    />
                </div>

                {coreDrive1 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive1 !== null ? coreDrive1.coreDriveName : ''}</h2>

                            {coreDrive1.hat != null ? 
                                coreDrive1.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive1.motivation != null ? 
                                coreDrive1.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive1 && 
                                coreDrive1.techniques.map((technique, index) => (

                                
                                    <div key={technique._id} className="choose-technique-box">
                                        <input 
                                            type="checkbox" 
                                            id={`technique-${technique._id}`} 
                                            onChange={handleCheckboxChange}
                                            value={technique._id}
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
                                    
                                
                                
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}   


                {coreDrive2 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive2 !== null ? coreDrive2.coreDriveName : ''}</h2>

                            {coreDrive2.hat != null ? 
                                coreDrive2.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive2.motivation != null ? 
                                coreDrive2.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive2 && 
                                coreDrive2.techniques.map((technique, index) => (


                                
                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}

                {coreDrive3 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive3 !== null ? coreDrive3.coreDriveName : ''}</h2>

                            {coreDrive3.hat != null ? 
                                coreDrive3.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive3.motivation != null ? 
                                coreDrive3.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive3 && 
                                coreDrive3.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}              
                


                {coreDrive4 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive4 !== null ? coreDrive4.coreDriveName : ''}</h2>

                            {coreDrive4.hat != null ? 
                                coreDrive4.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive4.motivation != null ? 
                                coreDrive4.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                            
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive4 && 
                                coreDrive4.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}
                

                {coreDrive5 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive5 !== null ? coreDrive5.coreDriveName : ''}</h2>
                            
                            {coreDrive5.hat != null ? 
                                coreDrive5.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive5.motivation != null ? 
                                coreDrive5.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                            
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive5 && 
                                coreDrive5.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}



                {coreDrive6 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive6 !== null ? coreDrive6.coreDriveName : ''}</h2>

                            {coreDrive6.hat != null ? 
                                coreDrive6.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive6.motivation != null ? 
                                coreDrive6.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }

                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive6 && 
                                coreDrive6.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}
               
               {coreDrive7 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive7 !== null ? coreDrive7.coreDriveName : ''}</h2>

                            {coreDrive7.hat != null ? 
                                coreDrive7.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive7.motivation != null ? 
                                coreDrive7.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive7 && 
                                coreDrive7.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}


                {coreDrive8 && (

                    <div className="core-drive-box">
                        <div className="core-drive-header">
                            <h2>{coreDrive8 !== null ? coreDrive8.coreDriveName : ''}</h2>

                            {coreDrive8.hat != null ? 
                                coreDrive8.hat === 'white' ?
                                (<WhiteHatBox/>)
                                :
                                (<BlackHatBox/>)
                                :
                                ''
                            }

                            {coreDrive8.motivation != null ? 
                                coreDrive8.motivation === 'intrinsic' ?
                                (<IntrinsicBox/>)
                                :
                                (<ExtrinsicBox/>)
                                :
                                ''
                            }
                        </div>

                        <div className="core-drive-techniques">

                            {coreDrive8 && 
                                coreDrive8.techniques.map((technique, index) => (

                                <div key={technique._id} className="choose-technique-box">
                                    <input 
                                        type="checkbox" 
                                        id={`technique-${technique._id}`} 
                                        onChange={handleCheckboxChange}
                                        value={technique._id}
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
                                    
                                
                                ))
                            }
                            

                        
                        </div>
                    </div>
                )}
                

                <div className="techniques-button-wrapper">
                    <Button
                        text="Finalizar"
                        type="submit"
                        onClick={handleConfirm}
                    />
                </div>

            </div>
            
            
            
        </Background>
        </>

    );
}

