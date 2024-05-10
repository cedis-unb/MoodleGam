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
        <ul className='dropdown-options'>
            <li id="my-profile"><a onClick={redirectToMyProfile}>Meu perfil</a></li>
            <li id="logout"><a onClick={userLogOut}>Sair</a></li>
        </ul>
        </div>
    );
};

export default DropdownMenu;