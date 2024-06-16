import React, { useContext } from 'react';
import { FaUserLarge } from "react-icons/fa6";
import AuthContext from '../../context/AuthProvider';
const Profile = () => {
  const {hotelDetails} = useContext(AuthContext)
  return (


    <div className='max-w-[600px] mx-auto mt-10'>
      <div className='flex flex-col justify-center items-center px-3'>
        <div className='h-[150px] w-[150px] rounded-[50%] flex justify-center items-center overflow-hidden bg-[#ececec]'>
          <FaUserLarge color='white' size={100} />
        </div>
        <div className='mt-3'>{}</div>

      </div>
      <div className='mt-5 flex flex-col gap-5 px-3'>
        <input className='outline-none  border-b-2 border-[#ececec]' placeholder='First Name' type='text' value={""} name='firstname'  />
        <input className='outline-none  border-b-2 border-[#ececec]' placeholder='Last Name' type='text' value={""} name='lastname' />
        <input className='outline-none  border-b-2 border-[#ececec]' placeholder='Email' type='email' value={""} name='email' />
        <div className='flex justify-center gap-5 items-center '>
          <button className='border-none bg-neutral-300 hover:bg-neutral-400 w-[150px] p-2 text-dark'>SAVE</button>
          <button className='border-none bg-orange-600 hover:bg-orange-700 w-[150px] p-2 text-white'>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default Profile