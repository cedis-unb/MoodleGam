"use client";
import "./style.css"
import Button from "@/app/components/Button";
import Background from "@/app/components/Background";
import Modal from "@/app/components/Modal"
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 
import axios from 'axios';
import {axiosInstance} from '../../config/config'
import dotenv from 'dotenv'
dotenv.config()

export default function RegisterSubjectPage(){
    const [subject, setSubject] = useState({
        name: "",
        code: "",
        note: "",
        year:"",
        semester:""
        
    })

    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [modalOpen, setModalOpen] = useState(false)
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState(null);
    const [errorText, setErrorText] = useState('')
    const router = useRouter();


    // useEffect(() => {
    //     const fetchToken = async () =>{
    //         const token = await localStorage.getItem("token");
    //         setToken(token);
    //     }
    //     fetchToken()
    // }, []);

    // useEffect(() => {
    //     // Perform localStorage action
        
    //     //setToken(localStorage.getItem("token"))
        
    //     const fetchData = async () => {
    //         try {
    //             if (token) {
    //                 const decodedUser = await jwtDecode(token);
                    
    //                 setUserId(decodedUser.sub);
    //             }
    //         } catch (error) {
    //             console.error('Erro ao buscar usuário:', error);
    //         }
    //     };

    //     fetchData();
        
    // }, [token])

    
    function validateUserData(e){
        if(!subject.code && !subject.name && !subject.year && !subject.semester){
            
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            return false
        }
        else if(!subject.name){
            setErrorText("Nome da disciplina está vazia, preencha-a")
            e.preventDefault()
            return false
        }
        else if(!subject.code){
            setErrorText("Código da disciplina está vazia, preencha-o")
            e.preventDefault()
            return false
        }
        else if(!subject.year){
            setErrorText("Ano está vazio, preencha-o")
            e.preventDefault()
            return false
        }
        else if(!subject.semester){
            setErrorText("Semestre está vazio, preencha-o")
            e.preventDefault()
            return false
        }
        else if(subject.year > 2100 || subject.year < 1960){
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
                var userId = null
                var decodedUser = null
                if (token) {
                    decodedUser =  jwtDecode(token);
                    
                    userId = decodedUser.sub
                }
                const subjectName = subject.name
                const subjectCode = subject.code
                const note = subject.note
                const yearSemester = `${subject.year}/${subject.semester}`
                const response = await axiosInstance.post(
                    '/subject', 
                    {
                        subjectName,
                        subjectCode,
                        note,
                        yearSemester,
                        userId

                    },
                    
                    {
                        headers: {
                            'x-api-key': `${apiKey}`,
                            'Authorization': `Bearer ${token}`
                        }
                    }
                    
                )
               
            
                if (response.status === 201) {
                  // Cadastro bem-sucedido
                  console.log('Disciplina cadastrada:', response.data);
                  setErrorText('')
                  setModalOpen(true)
                  
                } else {
                  // Tratar erros de requisição
                  console.error('Erro ao cadastrar disciplina:', response.statusText);
                }
            } catch (error) {
                // Tratar erros de rede
                console.error('Erro de rede:', error.response);
                setErrorText("Erro no envio dos dados")
            }
        }

        
    }

    
    const redirectToTecniquesPage = () => {
        
        router.push('/pages/chooseTechniquesPage'); // Redireciona para a página de login
    };

    return(
        <Background>
            {modalOpen && (

                <Modal
                    bodyText="Disciplina cadastrada com sucesso !"
                    buttonText="Próximo passo"
                    onConfirm={redirectToTecniquesPage}
                />


            )}
            
        
            <div className="background-register-subject-page">
                <h1>Passo 1 - Preencher dados da nova disciplina</h1>
                <form className="fields-register-subject" onSubmit={handleSubmit}>
                    <div className="input-row-register-subject">
                        <input 
                            type="text" 
                            placeholder="Nome"
                            onChange={(e) => setSubject({...subject, name: e.target.value})}
                        ></input>
                        <input 
                            type="text" 
                            placeholder="Código"
                            onChange={(e) => setSubject({...subject, code: e.target.value})}
                        ></input>
                    </div>

                    <div className="input-row-register-subject">
                        <textarea 
                            rows="4" 
                            cols="45"
                            placeholder="Observação"
                            onChange={(e) => setSubject({...subject, note: e.target.value})}
                        >
                        </textarea>
                        <div className="input-year-semester">
                            <input 
                                type="text" 
                                placeholder="Ano"
                                onChange={(e) => setSubject({...subject, year: e.target.value})}
                            ></input>

                            <select required onChange={(e) => setSubject({...subject, semester: e.target.value})}>
                                <option value="">Semestre</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>

                        </div>
                        
                    </div>
                    <p id="info-observation">O campo observação armazena anotações do criador de conteúdo sobre a sua experiência com aquela Gamificação específica. Não é um campo obrigatório no ato do cadastro</p>
                    <div className="error-register-wrapper">
                        <span id="error-text-register-subject">{errorText}</span>

                    </div>
                    
                    
                    <div className="button-wrapper-register-subject">
                        <Button
                            text="Finalizar cadastro"
                            type="submit"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
                

            </div>
        </Background>
    );
}