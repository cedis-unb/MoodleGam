"use client"
import Background from "../../components/Background";
import "./style.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { axiosInstance } from "@/app/config/config";
import {jwtDecode} from "jwt-decode"; 
import dotenv from 'dotenv'
dotenv.config()


export default function UserProfilePage(){
    const [user, setUser] = useState(null);
    const router = useRouter();

    function getFirstName(name) {
        var dividedName = name.split(" ");
        if(dividedName[0].length > 10){
            return ''
        }
        else{
            return dividedName[0];
        }
        
    }

    const redirectChangePassword = () =>{
        router.push("/pages/changePassword")

    }

    const redirectEditUser = () =>{
        router.push("/pages/editUserPage")
    }
    // useEffect(() => {
    //     console.log(`User: ${JSON.stringify(user)}`);
    // }, [user]);

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
        
    }, [])


    const fetchUser = async(userId, token) =>{
        try {
            
            const response = await axiosInstance.get(
                `/users/${userId}`, 
                {
                    headers: {
                        'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
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

    return (
        <Background>

            <div className="user-info-container">
                <div className="title-edit">
                    <p id="user-profile-title">Dados de {user !== null ? getFirstName(user.name) : ''}</p>
                    <a id="edit-user-link" onClick={redirectEditUser} className="edit-user-button-wrapper">
                        
                        <Image
                            src="/img/edit.svg"
                            width={25}
                            height={25}
                            unoptimized={true}
                        />

                        <p id="edit-button">Editar dados</p>

                    </a>
                </div>
                
                <p id="user-info-line">Nome:  <span id="user-data">{user !== null ? user.name : ''}</span></p>
                <p id="user-info-line">E-mail:  <span id="user-data">{user !== null ? user.email : ''}</span></p>
                <a onClick={redirectChangePassword}>Alterar senha</a>
            </div>




        </Background>



    );
}
