"use client";
import "./style.css"
import Image from "next/image";
import {jwtDecode} from "jwt-decode"; 
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";

export default function Background(props){

    const [user, setUser] = useState(null);
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    const userData = await fetchUser(decodedUser.sub, token);
                    setUser(userData);
                }
            } catch (error) {
                console.error('Erro ao buscar usuário:', error);
            }
        };

        fetchData();
        // if (token) {
        //     const decodedUser = jwtDecode(token);
        //     const userData = await fetchUser(decodedUser.sub, token)
        //     setUser(userData)
        //     //setUser(decodedUser.sub);


        //     //setUser(jwtDecode(token))
        //     //console.log(`User: ${user}`)
        //     // if(isTokenExpired(user)){
        //     //     setUser(null)
        //     // } 
        // }
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

    useEffect(() => {
        console.log(`User: ${JSON.stringify(user)}`);
    }, [user]); 

    const isTokenExpired = (decodedToken) =>{
        if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
          console.log("token expirou")
          return true; // Token expirado
        }
        else {
          return false;
        }
    }

    const userLogOut = async (e) => {
        e.preventDefault();
        try{
        localStorage.clear();
        navigate("/");
        }
        catch(error){
        console.log(error)
        }
    }
    return (

        <div className="background-page">
            <div className="navbar">
                <h1><span id='orange-moodle'>Moodle</span>Gam</h1>
                <div className="navbar-buttons">
                    <div className="button-navbar">
                        <Image 
                            src="/img/books.svg"
                            width={30}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Disciplinas</h2>
                        
                    </div>

                    <div className="button-navbar">
                        
                        <Image 
                            src="/img/content.svg"
                            width={25}
                            height={30}
                            unoptimized={true}
                        />
                        <h2>Conteúdos</h2>

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
                    <Image 
                        src="/img/user_icon.svg"
                        width={40}
                        height={40}
                        unoptimized={true}
                    />

                    <span>Olá {user !== null ? user.name : ''}</span>

                </div>
            </div>
            {props.children}

        </div>
    
    );



}