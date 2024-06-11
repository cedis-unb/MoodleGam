"use client"
import "./style.css"
import Background from "../../components/Background";
import Modal from "../../components/Modal"
import Image from "next/image";
import {jwtDecode} from "jwt-decode"; 
import { axiosInstance } from "@/app/config/config";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import Link from 'next/link';

export default function ManageUSers(){

    const router = useRouter();
    const apiKey = '276a6f1b4611ef755a3f4fb5ca974367'
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [chosenUser, setChosenUser] = useState({
        id: '',
        name: '',
        status: ''
    })

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

    const fetchAllUsers = async(token) =>{
        try {
            
            const response = await axiosInstance.get(
                `/users`, 
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
            console.error('Erro ao buscar usuários');
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        const fetchData = async () => {
            try {
                if(token){
                    const decodedUser = jwtDecode(token);
                    
                    const userData = await fetchUser(decodedUser.sub, token);

                    if(userData.role !== 'admin'){
                        router.push('/pages/unauthorized')
                    }

                    const allUsers = await fetchAllUsers(token)
                    setUsers(allUsers)
                }
                
            } catch (error) {
                console.error('Erro ao buscar disciplina', error.response);
            }
        };

        fetchData();
        
    }, [])

    const handleSubmit = async e => {
        
        
        const status = chosenUser.status === 'active' ? 'inactive' : 'active'

        try {

            const response = await axiosInstance.put(
                `/users/${chosenUser.id}`, 
                {
                    status
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
                closeModal()
                window.location.reload()
                
                
            } else {
            
                console.error('Erro ao cadastrar usuário:', response.statusText);
            }
        } catch (error) {
            
            console.error('Erro de rede:', error.response);
        }
        

        
    }

    function getDate(datetime) {
        const data = new Date(datetime);
        
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
        const ano = data.getFullYear();
    
        return `${dia}/${mes}/${ano}`;
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleConfirm = (user) =>{
        setChosenUser({...chosenUser, id: user._id, name: user.name, status: user.status})
        setConfirmModalOpen(true)
        
    }

    const closeModal = () =>{
        setConfirmModalOpen(false)
    }

    const handleEdit = (userId) =>{
        router.push("/pages/editUserData")
    }


    return (
        <>
            {confirmModalOpen && (

                <Modal
                    bodyText={`Você tem certeza que deseja ${chosenUser.status === 'inactive' ? 'ativar': 'desativar'} a conta de ${chosenUser.name}?`}
                    buttonText="Sim"
                    linkProps={null}
                    onConfirm={handleSubmit}
                    cancelOption={true}
                    onCancel={closeModal}
                    secondOption={null}
                />


            )}

            <Background>
                <div className="manage-users-conteiner">
                    <div className="manage-users-header">
                        <h1>Usuários</h1>
                        <div className="search-users">
                            <Image 
                                src="/img/search.svg"
                                width={25}
                                height={25}
                                unoptimized={true}
                            />
                            <input
                                placeholder="Pesquisar"
                                value={searchTerm}
                                onChange={handleSearch}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="manage-users-content">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Papel</th>
                                    <th>Status</th>
                                    <th>Criado em</th>
                                    <th></th>
                                    <th></th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers && filteredUsers.map((user) => ([

                                    <tr key={user._id} 
                                        className={`${user.status === 'inactive' ? 'text-gray-500' : 'text-white'}`}
                                    >
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'user' ? 'Usuário' : 'Admin'}</td>
                                        <td>{user.status === 'active' ? 'Ativo' : 'Inativo'}</td>
                                        <td>{getDate(user.createdAt)}</td>
                                        <td>
                                            <Link 
                                                href={{
                                                    pathname: "/pages/editUserData",
                                                    query: {
                                                        userId: user._id
                                                    }
                                                }}
                                            >
                                        
                                                <button 
                                                    id="edit-user-button" 
                                                    className="text-white font-bold py-1 px-2 rounded"
                                                >
                                                    Editar
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button 
                                                id="block-user-button" 
                                                className="text-white font-bold py-1 px-2 rounded"
                                                onClick={() => handleConfirm(user)}
                                            >
                                                {user.status === 'active' ? 'Desativar' : 'Ativar'}
                                            </button>
                                        </td>

                                    </tr>
                                ]))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Background>
        
        </>

    )
}