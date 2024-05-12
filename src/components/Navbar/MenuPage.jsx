import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

const MenuPage = () => {
   const { isMenuOpen, setIsMenuOpen, setisAuthenticated } = useContext(AuthContext);

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }



   return (
      <div className='px-5'>
         <div onBlur={handleMenu} className={`fixed top-13 p-5 right-[10%] flex rounded-lg flex-col item-top justify-start bg-zinc-700 bg-opacity-100 z-50 ${isMenuOpen ? 'w-auto transition-all duration-150 origin-top-right transform translate-x-0' : 'w-0 transform translate-x-full'}`}>
            <ul type='none' className=' gap-2 flex flex-col'>

               <Link onClick={handleMenu} to="/profile"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>Profile</li></Link>
               <Link onClick={handleMenu} to="/bookings"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>Booking</li></Link>
               <Link onClick={handleMenu} to="/all-bookings"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>All Bookings</li></Link>
               <Link onClick={handleMenu} to="/manage"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>Booking Manage</li></Link>
               <Link onClick={() => { setisAuthenticated(false); localStorage.clear(); handleMenu() }} to="/"><li className=' text-white hover:bg-white hover:text-black rounded-md p-2 hover:cursor-pointer'>Logout</li></Link>
            </ul>
         </div>
      </div>

   );
};

export default MenuPage;