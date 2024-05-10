import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { adminMenuOptions, clientMenuOptions, menuOptions } from '../utils/MenuOption';

const MenuPage = () => {
   const { isMenuOpen, menuType, setIsMenuOpen,setisAuthenticated } = useContext(AuthContext);

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }



   return (
      <div className='px-5'>
         <div onBlur={handleMenu} className={`fixed top-13 p-5 right-[10%] flex flex-col item-top justify-start bg-zinc-700 bg-opacity-100 z-50 ${isMenuOpen ? 'w-auto transition-all duration-150 origin-top-right transform translate-x-0' : 'w-0 transform translate-x-full'}`}>
            <ul type='none' className=' gap-2 flex flex-col'>
               {menuType === "menu" && <div className='flex flex-col ga-2'>
                  {menuOptions.map((option) => {
                     return (
                        <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                     )
                  })}
               </div>}
               <Link onClick={()=>{setisAuthenticated(false);localStorage.clear()}} to="/"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>Logout</li></Link>
               {menuType === "client" && <div className='flex flex-col gap-2'>
                  {clientMenuOptions.map((option) => {
                     return (
                        <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black   flex justify-center rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                     )
                  })}
               </div>}
               {menuType === "admin" && <div className='flex flex-col gap-2   '>
                  {adminMenuOptions.map((option) => {
                     return (
                        <Link onClick={handleMenu} to={option}><li className=' text-white hover:bg-white hover:text-black   flex justify-center rounded-md p-2 hover:cursor-pointer'>{option}</li></Link>
                     )
                  })}
               </div>}

            </ul>
         </div>
      </div>

   );
};

export default MenuPage;