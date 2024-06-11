"use client"
import Background from "../../components/Background";
import MenuOption from "@/app/components/MenuOption"
import {jwtDecode} from "jwt-decode"; 
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/config/config";
import Image from "next/image";
import "./style.css"

export default function Homepage(){
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    
                    const userData = await fetchUser(decodedUser.sub, token);
                    if(userData.role === 'admin'){
                        setIsAdmin(true)
                    }
                    
                }
                else{
                    console.error('Erro ao buscar usuário:', error);
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
    


    return (
        <Background>

            <div className="homepage-option">
                
                <MenuOption
                    title="Disciplina"
                    text="Crie e edite Disciplinas, além de ver as que já foram criadas. Ao criar uma Disciplina é possível adicionar turmas para mesma. "
                    redirect="subject"
                >
                    <Image 
                        src="/img/books.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>
                

                <MenuOption
                    title="Conteúdos"
                    text="Veja conteúdos sobre Gamificação, além de tutoriais sobre como utilizar o Moodle"
                    redirect="content"
                >
                    <Image 
                        src="/img/content.svg"
                        width={40}
                        height={40}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Sobre nós"
                    text="Saiba  sobre os criadores do MoodleGam"
                >
                    <Image 
                        src="/img/info.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                <MenuOption
                    title="Ajuda"
                    text="Instruções sobre como utilizar o MoodleGam, e dúvidas mais frequentes"
                >
                    <Image 
                        src="/img/help.svg"
                        width={50}
                        height={50}
                        unoptimized={true}
                    />
                </MenuOption>

                {isAdmin && 
                    <div className="manage-users">
                        <MenuOption
                            title="Gerenciar usuários"
                            text="visualizar, alterar ou bloquear usuários"
                            redirect="manageUsers"
                        >
                            <Image 
                                src="/img/two_users.svg"
                                width={50}
                                height={50}
                                unoptimized={true}
                            />
                        </MenuOption>
                    </div>
                }
                

            </div>
            
        </Background>

    );
}