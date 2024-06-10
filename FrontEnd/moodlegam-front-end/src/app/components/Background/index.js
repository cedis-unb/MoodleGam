"use client";
import "./style.css"
import Image from "next/image";
import {jwtDecode} from "jwt-decode"; 
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";
import Dropdown from "@/app/components/Dropdown/index"
import { useRouter } from 'next/navigation';
export default function Background(props){
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    const tokenExpired = await isTokenExpired(decodedUser);
                    if (tokenExpired) {
                        redirectToLoginPage();
                        return;
                    }
                    const userData = await fetchUser(decodedUser.sub, token);
                    setUser(userData);
                }
                else{
                    redirectToLoginPage()
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };

        fetchData();
        
    }, [])


    const fetchUser = async(userId, token) =>{
        try {
            
            const response = await axiosInstance.get(
                `/users/${userId}`, 
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
            

        } catch (error) {
            console.error('Erro ao buscar usuário por id');
            
            
        }

    }

    function getFirstName(name) {
        var dividedName = name.split(" ");
        if(dividedName[0].length > 10){
            return ''
        }
        else{
            return dividedName[0];
        }
        
    }

    const redirectToContent = () => {
        router.push('/pages/content')
    }

    const redirectToSubjects = () => {
        router.push('/pages/subject')
    }
    const redirectToLoginPage = () => {
        
        router.push('/pages/loginPage'); // Redireciona para a página de login
    };

    const redirectToHome = () =>{
        router.push('/pages/homepage');
    }

    useEffect(() => {
        console.log(`User: ${JSON.stringify(user)}`);
    }, [user]); 

    const isTokenExpired = async (decodedToken) =>{
        var now = Math.floor(Date.now() / 1000);

        if (!decodedToken || now >= decodedToken.exp) {
          console.log("token expirou")
          return true; // Token expirado
        }
        else {
          return false;
        }
    }

    

    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };
    return (

        <div className="background-page">
            <div className="navbar">
                <h1>
                    <a onClick={redirectToHome}>
                        <span id='orange-moodle'>Moodle</span>Gam
                    </a>
                </h1>
                
                <div className="navbar-buttons">
                    <a 
                        className="button-navbar"
                        onClick={redirectToSubjects}
                    >
                        <Image 
                            src="/img/books.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Disciplinas</h2>
                        
                    </a>

                    <div className="button-navbar">
                        <a 
                            className="button-navbar"
                            onClick={redirectToContent}
                        >
                            <Image 
                                src="/img/content.svg"
                                width={25}
                                height={30}
                                unoptimized={true}
                            />
                        
                        
                            <h2>Conteúdos</h2>
                        </a>
                    </div>

                    <div className="button-navbar">
                        
                        <Image 
                            src="/img/info.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />

                        <h2>Sobre nós</h2>
                    </div>

                    <div  className="button-navbar">
                        
                        <Image 
                            src="/img/help.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Ajuda</h2>

                    </div>
                </div>
                <div className="user-area">
                    <a className="hover-user-area" onClick={toggleMenu}>
                        <Image 
                            src="/img/user_icon.svg"
                            width={40}
                            height={40}
                            unoptimized={true}
                        />

                        <span>Olá {user !== null ? getFirstName(user.name) : ''}</span>
                       
                        
                    </a>
                    
                    <Dropdown
                        isOpen={menuOpen}
                    />
                </div>
            </div>
            {props.children}

        </div>
    
    );



}