"use client"
import Background from "../../components/Background";
import Button from "@/app/components/Button";
import "./style.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { axiosInstance } from "@/app/config/config";
import {jwtDecode} from "jwt-decode"; 
import Modal from "@/app/components/Modal"

export default function EditUserPage(){
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [user, setUser] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorText, setErrorText] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const [userId, setUserId] = useState('')

    const router = useRouter();

    const redirectChangePassword = () =>{
        router.push("/pages/changePassword")

    }

  
    useEffect(() => {
        console.log(`User: ${JSON.stringify(user)}`);
    }, [name]);

    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    
                    const userData = await fetchUser(decodedUser.sub, token);
                    setUser(userData);
                    setName(userData.name)
                    setEmail(userData.email)
                    setUserId(decodedUser.sub)
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

    function validateUserData(e){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email || !name){
            
            setErrorText("Os campos estão vazios, preencha-os")
            e.preventDefault()
            return false
        }
        else if(!regex.test(email)){
            
            setErrorText("E-mail em formato inválido")
            e.preventDefault()
            return false
        }
        else{
            
            return true
        }
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
        
        
        try {

            const response = await axiosInstance.put(
                `/users/${userId}`, 
                {
                    name,
                    email
                },
                {
                    headers: {
                        'x-api-key': `${apiKey}`,
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                
            )
            
        
            if (response.status === 200) {
               
                console.log('Usuário atualizado:', response.data);
                setModalOpen(false)
                redirectToHomepage()
                
                
            } else {
            
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            
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
                    bodyText="Você tem certeza que deseja atualizar seus dados?"
                    buttonText="Atualizar"
                    onConfirm={handleSubmit}
                    cancelOption={true}
                    onCancel={closeModal}
                />


            )}
            
            <form className="fields-edit-user">
                <p id="edit-user-title">Editar dados</p>
                <input 
                    type="text" 
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                ></input>

                <input 
                    type="email" 
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>

                <span id="error-text-edit-user">{errorText}</span>
               

                <a onClick={redirectChangePassword}>Alterar senha</a>
                <div className="button-wrapper-edit-user">

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