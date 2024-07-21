"use client";
import React from 'react';
import "./style.css"
import { useRouter } from 'next/navigation';

const DropdownMenu = ({isOpen}) => {
    const router = useRouter();
    
    const userLogOut = async (e) => {
        e.preventDefault();

        try{
            localStorage.clear();
            router.push('/pages/loginPage');
        }
        catch(error){
            console.log(error)
        }
    }

    const redirectToMyProfile = async (e) => {
        router.push('/pages/userProfilePage');
    }

    return (
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <div className='dropdown-options'>
            <a id="my-profile" onClick={redirectToMyProfile}>Meu perfil</a>
            <a id="logout" onClick={userLogOut}>Sair</a>
        </div>
        </div>
    );
};

export default DropdownMenu;