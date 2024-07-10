"use client";

import Background from "../../components/Background";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal"
import {axiosInstance} from '../../config/config'
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 
import dotenv from 'dotenv'
import "./style.css"
dotenv.config()

export default function EditUserPage(){
    
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorText, setErrorText] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter();

    function validateUserData(e){
        
        if(!password || !confirmPassword){
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            return false
        }
        else if(password !== confirmPassword){
            setErrorText("As senhas inseridas são diferentes")
            e.preventDefault()
            return false
        }
        
        else{
            
            return true
        }
    }

    const getUserId = async() =>{
        const token = localStorage.getItem("token");

        const decodedUser = jwtDecode(token);

        return decodedUser.sub
    }

    const handleFormConfirm = (e) =>{
        e.preventDefault()
        if(validateUserData(e)){
            setModalOpen(true)
        }
        else{
            return
        }

    }

    const handleSubmit = async e => {
        e.preventDefault()
        
        const userId = await getUserId()

       
            
        try {
            

            const response = await axiosInstance.put(
                `/users/${userId}`, 
                {
                    password
                },
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                
            )
            
        
            if (response.status === 200) {
                
                console.log('Senha alterada', response.data);
                setErrorText('')
                setModalOpen(false)
                redirectToHomepage()
                
            } else {
                
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            // Tratar erros de rede
            console.error('Erro de rede:', error.response);
            setErrorText(error.response.data.message)
        }
        

        
    }

    const closeModal = () =>{
        setModalOpen(false)
    }

    const redirectToHomepage = () =>{
        router.push("/pages/homepage")
    }

    return(
        

        <Background>
            {modalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja atualizar sua senha?"
                    buttonText="Atualizar"
                    onConfirm={handleSubmit}
                    cancelOption={true}
                    onCancel={closeModal}
                    secondOption={null}
                    linkProps={null}
                />


            )}

            <form className="change-password-form">
                <p id="change-password-title">Alteração de senha</p>
                <input 
                    type="password" 
                    placeholder="Nova Senha"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                <input 
                    type="password" 
                    placeholder="Confirmar Nova Senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>

                <span id="change-password-error">{errorText}</span>

                <div className="button-wrapper-change-password">

                    <Button
                        type="submit"
                        text="Salvar alterações"
                        onClick={handleFormConfirm}
                    />
                </div>

            </form>


        </Background>

        
        


    );
}