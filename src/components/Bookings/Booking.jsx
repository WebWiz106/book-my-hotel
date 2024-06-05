import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthProvider'
const Booking = () => {

  const {AllRooms,FetchAllRooms} = useContext(AuthContext)

  useEffect(()=>{
    FetchAllRooms()
  },[])
  return (
    <div className="maxwidth mx-auto p-4">
      <div className="flex p-2 justify-center border-2 border-black border-opacity-25 rounded-md">
        <p className="font-bold text-xl">Your Rooms</p>
      </div>
      <div className=" mt-2 md:ms-[29.5px] grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-6 cards">
        {AllRooms.map((room)=>{
          return <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-48 md:rounded-none md:rounded-s-lg" src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.roomName}</h5>
                  <div className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                      <p className="text-white">Guest</p>
                      <p className='text-white'><span>Aduls: </span>{room.adult} <span>Child: </span>{room.child}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white">Price: </p>
                      <p className="text-white">{room.price}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-white"><button>edit</button> </p>
                      <p className="text-white"><button>del</button> </p>
                    </div>
                  </div>
                </div>
        </a>
        })}
        
      </div>
    </div>
  )
}

export default Booking