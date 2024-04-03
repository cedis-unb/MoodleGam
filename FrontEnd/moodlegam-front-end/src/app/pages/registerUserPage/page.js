"use client";
import "./style.css"
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from 'axios';



export default function RegisterUserPage(){
    
    const [user, setUser] = useState({
        role:"user",
        name: "",
        email: "",
        password: "",
        status:"active"
        
    })

    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        
    });

    const [confirmPassword, setConfirmPassword] = useState('')

    const [isValid, setIsValid] = useState(true)

    const [errorText, setErrorText] = useState('')

    function validateUserData(e){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!user.email || !user.name || !user.password || !confirmPassword){
            setIsValid(false)
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            return false
        }
        else if(user.password !== confirmPassword){
            console.log(`Senha são diferentes ${user.password} | ${confirmPassword}`)
            setIsValid(false)
            setErrorText("As senhas inseridas são diferentes")
            e.preventDefault()
            return false
        }
        else if(!regex.test(user.email)){
            setIsValid(false)
            setErrorText("E-mail em formato inválido")
            e.preventDefault()
            return false
        }
        else{
            setIsValid(true)
            return true
        }
    }
    const handleSubmit = async e => {
        
        
        if(validateUserData(e)){
            
            try {
                console.log(`user ${user.status} ${user.email} ${user.role} ${user.name}`)
    
                const response = await axiosInstance.post(
                    '/users', 
                    user,
                    {
                        headers: {
                            'x-api-key': `${apiKey}`
                        }
                    }
                    
                )
                .then(res =>{
                    console.log(res)
                }).catch(err =>{
                    console.log(err)
                });
            
                if (response.status === 200) {
                  // Cadastro bem-sucedido
                  console.log('Usuário cadastrado:', response.data);
                } else {
                  // Tratar erros de requisição
                  console.error('Erro ao cadastrar usuário:', response.statusText);
                }
            } catch (error) {
                // Tratar erros de rede
                console.error('Erro de rede:', error.message);
            }
        }

        
    }


    return(
        <div className="background-register-user-page">
            <h1>Cadastro de novo usuário</h1>
            <form className="fields-register-user" onSubmit={handleSubmit}>
                <div className="input-row-register-user">
                    <input 
                        type="text" 
                        placeholder="Nome completo"
                        onChange={(e) => setUser({...user, name: e.target.value})}
                    ></input>
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setUser({...user, email: e.target.value})}
                    ></input>
                </div>

                <div className="input-row-register-user">
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={(e) => setUser({...user, password: e.target.value})}
                    >
                    </input>
                    <input 
                        type="password" 
                        placeholder="Confirmar senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div className="error-register-wrapper">
                    <span id="error-text-register-user">{errorText}</span>

                </div>
                
                
                <div className="button-wrapper-register-user">
                    <Button
                        text="Finalizar cadastro"
                        type="submit"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            

        </div>
    );
}