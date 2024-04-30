import React from 'react'
import Logo from "../assets/images/logo/logo-grey.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className=' maxwidth mx-auto px-5 py-2'>
            <div className='h-[50px] flex justify-between items-center'>
                <img
                    src={Logo}
                    alt="Picture of the author"
                    className='h-[100%]'
                />
                <GiHamburgerMenu size={24} className='text-zinc-700 cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar