import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { menuOptions, clientMenuOptions, adminMenuOptions } from '../utils/MenuOption';
import AuthContext from '../context/AuthProvider';
const MenuPage = () => {
   const { isMenuOpen, menuType,setIsMenuOpen } = useContext(AuthContext);

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   return (
      <div className={`fixed top-0 right-0 h-full flex item-top justify-start ms-4 bg-gray-900 bg-opacity-50 z-50 ${isMenuOpen ? 'w-1/3' : 'w-0'}`}>
         <ul type='none' className='mt-[4rem] ms-[4rem] gap-2 flex flex-col'>
            {menuType === "menu" && <div className='flex flex-col gap-4'>
               {menuOptions.map((option) => {
                  return (
                     <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black w-[2rem] md:w-[26rem] flex justify-center rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                  )
               })}
            </div>}
            {menuType === "client" && <div className='flex flex-col gap-4'>
               {clientMenuOptions.map((option) => {
                  return (
                     <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black w-[2rem] md:w-[26rem] flex justify-center rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                  )
               })}
            </div>}
            {menuType === "admin" && <div className='flex flex-col gap-4'>
               {adminMenuOptions.map((option) => {
                  return (
                     <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black w-[2rem] md:w-[26rem] flex justify-center rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                  )
               })}
            </div>}

         </ul>
      </div>
   );
};

export default MenuPage;