import React, { useContext, useState } from 'react';
import Logo from "../assets/images/logo/logo-grey.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Page from './Auth/Page';
import MenuPage from './MenuPage';
import AuthContext from '../context/AuthProvider';
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isModalOpen, setIsModalOpen, modalType, setModalType, isMenuOpen, setIsMenuOpen, menuType, setMenuType } = useContext(AuthContext);


    const navigate = useNavigate()
    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };


    const menuOpen = (type) => {
        setMenuType(type);
        setIsMenuOpen(true);
    };


    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const isAuthenticated = false;


    const handleRoute = () => {
        navigate("/")
    }
    return (
        <div className='maxwidth mx-auto  px-2 py-2 relative '>
            <div className='h-[50px] flex justify-between items-center'>
                <img
                    src={Logo}
                    alt="Logo"
                    className='h-[100%] cursor-pointer'
                    onClick={handleRoute}
                />
                <div className="flex gap-4">
                    {
                        isAuthenticated ?
                            <>
                                {isMenuOpen ?
                                    <IoMdClose size={24} onClick={handleMenu} className="text-zinc-700 cursor-pointer hover:text-orange-600 hover:cursor-pointer" />
                                    :
                                    <GiHamburgerMenu size={24} className='text-zinc-700 hover:text-orange-500 hover:cursor-pointer' onClick={() => menuOpen("menu")} />

                                }


                            </>
                            :

                            <>
                                <button className="hover:text-orange-600 flex items-center px-3 md:px-5 rounded-md" onClick={() => openModal("signup")}>Signup</button>

                                <button className="text-[18px] text-white bg-orange-600 py-1 flex items-center h-full px-3 md:px-5 rounded-md hover:bg-orange-700 hover:text-white" onClick={() => openModal("login")}>Login</button>
                            </>
                    }

                </div>
            </div>
            {isModalOpen && <Page />
            }
            {
                isMenuOpen && <MenuPage />
            }
        </div>
    );
};

export default Navbar;