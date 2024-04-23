"use client";
import "./style.css"
import Button from "@/app/components/Button";
import Background from "@/app/components/Background";
import Modal from "@/app/components/Modal"
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
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
    const [confirmPassword, setConfirmPassword] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    

    const [errorText, setErrorText] = useState('')
    const router = useRouter();
    function validateUserData(e){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!subject.email || !subject.name || !subject.password || !confirmPassword){
            
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            return false
        }
        else if(subject.password !== confirmPassword){
            console.log(`Senha são diferentes ${subject.password} | ${confirmPassword}`)
            
            setErrorText("As senhas inseridas são diferentes")
            e.preventDefault()
            return false
        }
        else if(!regex.test(subject.email)){
            
            setErrorText("E-mail em formato inválido")
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
                console.log(`subject ${apiKey}`)
    
                const response = await axiosInstance.post(
                    '/subject', 
                    subject,
                    {
                        headers: {
                            'x-api-key': `${apiKey}`
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
                setErrorText(error.response.data.message)
            }
        }

        
    }

    const redirectToLoginPage = () => {
        
        router.push('/pages/loginPage'); // Redireciona para a página de login
    };

    return(
        <Background>
            {modalOpen && (

                <Modal
                    bodyText="Usuário cadastrado com sucesso !"
                    buttonText="Voltar para tela de login"
                    onConfirm={redirectToLoginPage}
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

                            <select required>
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