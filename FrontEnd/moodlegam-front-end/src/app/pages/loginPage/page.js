"use client";
import "../loginPage/style.css";
import Image from "next/image";
import Button from "../../components/Button/index";
import LoadingPage from "../../components/LoadingPage/index";
import React, { useEffect, useState } from "react";
import dotenv from 'dotenv'
import { useRouter } from 'next/navigation';
import { axiosInstance } from "@/app/config/config";
dotenv.config()

export default function LoginPage(){
    
    
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [successText, setSuccessText] = useState('');

    const forgotPassword = async(event) =>{
        setSuccessText('')
        event.preventDefault();
        if(!email){
            setErrorText("Insira seu E-mail para que possamos lhe enviar uma nova senha")
            return
        }
        else{
            try{
                 // Enviar os dados do formulário para o backend
                const response = await axiosInstance.post(
                '/mail', 
                {
                    email,
                },
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
                    }
                }
            );

            // Verificar se o login foi bem-sucedido
            if (response.status === 200) {
                // Armazenar o token no localStorage
                setSuccessText("Nova senha enviada para o E-mail")
                setErrorText('');
            }
            

            } catch (error) {
                setErrorText(error.response.data.message);
            }
        }


    }

    const teste = () =>{
        setSuccessText("Nova senha enviada para o E-mail")
    }
    const redirectToHomepage = () => {
        
        router.push('/pages/homepage'); // Redireciona para a página de login
    };

    const handleSubmit = async (event) => {
        setLoading(true)
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
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`
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
            
        } finally{
            setLoading(false)
        }

    };

    const redirectRegisterUser = () =>{
        router.push('/pages/registerUserPage')
    }

    return (
        <>
            {loading && (
                <LoadingPage/>
            )}

            <div className="background-login-page">
            
                <div className="login-container">
                    <p>Faça Login no <span id='orange-moodle'>Moodle</span>Gam</p>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        
                        ></input>

                        <input 
                            type="password" 
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        <span id="error-text-login">{errorText}</span>
                        <span id="success-text-forgot-password">{successText}</span>
                        <a onClick={forgotPassword}>Esqueci minha senha</a>
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
        
        </>
        


    );
}