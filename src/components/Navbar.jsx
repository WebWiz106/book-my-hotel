import React, { useState } from 'react';
import Logo from "../assets/images/logo/logo-grey.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Page from './Auth/Page';
import MenuPage from './MenuPage';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuType, setMenuType] = useState("")

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const menuOpen = (type) => {
        setMenuType(type);
        setIsMenuOpen(true);
    };

    return (
        <div className='maxwidth mx-auto px-5 py-2 relative'>
            <div className='h-[50px] flex justify-between items-center'>
                <img
                    src={Logo}
                    alt="Logo"
                    className='h-[100%]'
                />
                <div className="flex gap-4">
                    <button className="border-2 border-orange-600 flex items-center px-3 md:px-5 rounded-md hover:bg-orange-600 hover:text-white" onClick={() => openModal("login")}>Login</button>
                    <button className="border-2 border-orange-600 flex items-center px-3 md:px-5 rounded-md hover:bg-orange-600 hover:text-white" onClick={() => openModal("signup")}>Signup</button>
                    <GiHamburgerMenu size={24} className='text-zinc-700 cursor-pointer' onClick={() => menuOpen("menu")} />
                </div>
            </div>
            {isModalOpen && <Page modalType={modalType} closeModal={closeModal} />
            }
            {
                isMenuOpen && <MenuPage menuType={menuType} isMenuOpen={isMenuOpen} />
            }
        </div>
    );
};

export default Navbar;