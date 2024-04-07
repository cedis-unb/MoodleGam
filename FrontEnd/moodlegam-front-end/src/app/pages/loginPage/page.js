"use client";
import "../loginPage/style.css";
import Image from "next/image";
import Button from "../../components/Button/index";
import React, { useEffect, useState } from "react";
import dotenv from 'dotenv'
import { useRouter } from 'next/navigation';
import { axiosInstance } from "@/app/config/config";
dotenv.config()

export default function LoginPage(){
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const redirectToHomepage = () => {
        
        router.push('/pages/homepage'); // Redireciona para a página de login
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Enviar os dados do formulário para o backend
            const response = await axiosInstance.post(
                '/sessions', 
                {
                    email,
                    password
                },
                {
                    headers: {
                        'x-api-key': `${apiKey}`
                    }
                }
        );

            // Verificar se o login foi bem-sucedido
            if (response.status === 200) {
                // Armazenar o token no localStorage
                localStorage.setItem("token", response.data.token);
                console.log(response.data)
                redirectToHomepage()
            } 
            

        } catch (error) {
            console.error('Erro ao fazer login:', error.response.data.message);
            setErrorText(error.response.data.message);
            
        }
    };

    const redirectRegisterUser = () =>{
        router.push('/pages/registerUserPage')
    }

    return (
        <div className="background-login-page">
            
            <div className="login-container">
                <p>Faça Login no <span id='orange-moodle'>Moodle</span>Gam</p>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    
                    ></input>

                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <span id="error-text-login">{errorText}</span>
                    <a>Esqueci minha senha</a>
                    <a onClick={redirectRegisterUser}>Fazer cadastro</a>
                    <div className="button-login-wrapper">
                        <Button
                            text="Entrar"
                            type="submit"
                        />
                    </div>
                    
                </form>
            </div>
            <div className="moodlegam-logo-login">
                <Image 
                    src="/img/logo_image.png"
                    width={500}
                    height={500}
                    unoptimized={true}
                />
            </div>
        </div>


    );
}