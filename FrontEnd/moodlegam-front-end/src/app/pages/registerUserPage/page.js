"use client";
import "./style.css"
import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from 'axios';



export default function RegisterUserPage(){
    
    const [user, setUser] = useState({
        role:"user",
        username: "",
        email: "",
        password: "",
        status:"active"
        
    })

    const [confirmPassword, setConfirmPassword] = useState('')

    const [isValid, setIsValid] = useState(true)

    const [errorText, setErrorText] = useState('')


    const handleSubmit = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(user.password !== confirmPassword){
            console.log("Senhas diferentes")
            setIsValid(false)
            setErrorText("As senhas inseridas são diferentes")
        }
        
        if(!regex.test(user.email)){
            setIsValid(false)
            setErrorText("E-mail em formato inválido")
        }
        else{
            setIsValid(true)
        }
        try {
            const response = await axios.post('/api/usuarios', user);
        
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

    const teste = () =>{
        setErrorText("As senhas inseridas são diferentes")
    }

    return(
        <div className="background-register-user-page">
            <h1>Cadastro de novo usuário</h1>
            <form className="fields-register-user" onSubmit={handleSubmit}>
                <div className="input-row-register-user">
                    <input 
                        type="text" 
                        placeholder="Nome completo"
                        onChange={(e) => setUser({...user, username: e.target.value})}
                    ></input>
                    <input 
                        type="password" 
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
                        type="button"
                        onClick={teste}
                    />
                </div>
            </form>
            

        </div>
    );
}