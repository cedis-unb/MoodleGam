"use client"
import Background from "../../components/Background";
import Button from "@/app/components/Button";
import "../editUserPage/style.css"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { axiosInstance } from "@/app/config/config";
import Modal from "@/app/components/Modal"
import {jwtDecode} from "jwt-decode"; 

export default function EditUserData(searchParams){

    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [user, setUser] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorText, setErrorText] = useState('')
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [userId, setUserId] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassModalOpen, setNewPassModalOpen] = useState(false)

    const router = useRouter();

    

    const redirectChangePassword = () =>{
        router.push("/pages/changePassword")

    }

  
    

    useEffect(() => {
        
        
        const token = localStorage.getItem("token");
        const fetchData = async () => {
            try {
                if (token) {
                    const decodedUser = jwtDecode(token);
                    
                    const thisUser = await fetchUser(decodedUser.sub, token);
                    console.log(thisUser)
                    if(thisUser.role !== 'admin'){
                        router.push('/pages/unauthorized')
                    }
                    
                    
                    const userData = await fetchUser(searchParams.searchParams.userId, token);
                    setUser(userData);
                    setName(userData.name)
                    setEmail(userData.email)
                    setUserId(userData._id)
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
            setConfirmModalOpen(true)
        }
        else{
            return
        }

    }

    const handleResetPassword = async e => {
        e.preventDefault()
        const pass = generateNewPassword()
        setNewPassword(pass)
        try {

            const response = await axiosInstance.put(
                `/users/${userId}`, 
                {
                    "password": pass
                },
                {
                    headers: {
                        'x-api-key': `${apiKey}`,
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                
            )
            
        
            if (response.status === 200) {
               
                console.log('Senha atualizada:', response.data);
                closeModal()
                
                
                
            } else {
            
                console.error('Erro ao atualizar senha', response.statusText);
            }
        } catch (error) {
            
            console.error('Erro de rede:', error.response);
            
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
                setConfirmModalOpen(false)
                redirectToManageUsers()
                
                
            } else {
            
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            
            console.error('Erro de rede:', error.response);
            setErrorText(error.response.data.message)
        }
        

        
    }

    const closeModal = () =>{
        setConfirmModalOpen(false)
        setNewPassModalOpen(false)
    }

    const redirectToManageUsers = () =>{
        router.push("/pages/manageUsers")
    }

    function generateNewPassword() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let password = '';
        for (let i = 0; i < 5; i++) {
          const indice = Math.floor(Math.random() * characters.length);
          password += characters.charAt(indice);
        }
        return password
    }

    return(
        <>
            {newPassModalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja gerar uma nova senha? A senha atual do usuário será substituída por uma nova"
                    buttonText="Gerar"
                    onConfirm={handleResetPassword}
                    cancelOption={true}
                    onCancel={closeModal}
                    secondOption={null}
                    linkProps={null}
                />


            )}

            {confirmModalOpen && (

                <Modal
                    bodyText="Você tem certeza que deseja atualizar os dados?"
                    buttonText="Atualizar"
                    onConfirm={handleSubmit}
                    cancelOption={true}
                    onCancel={closeModal}
                    secondOption={null}
                    linkProps={null}
                />


            )}

            <Background>
            
            
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
                
                    {   newPassword &&
                        <p>
                            Nova senha: {newPassword} <p class="text-red-500">A senha irá sumir após sair dessa página</p>
                        </p>
                    }

                    <a 
                        onClick={() => setNewPassModalOpen(true)}
                    
                    >
                        Gerar nova senha
                    </a>
                    <div className="button-wrapper-edit-user">

                        <Button
                            type="submit"
                            text="Salvar alterações"
                            onClick={handleFormConfirm}
                        />
                    </div>

                </form>


            </Background>


        </>

        

        
        


    );
}