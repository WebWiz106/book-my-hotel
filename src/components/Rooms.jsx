import React, { useContext } from 'react'
import RoomCard from './RoomCard'
import AuthContext from '../context/AuthProvider';

const Rooms = ({ toggleAccordion }) => {


    const { Rooms, setRooms, setisRoomSelected, selectedRooms } = useContext(AuthContext);

    console.log()
    return (
        <div className='flex flex-col gap-10'>
            {
                Rooms.map((room, index) => (

                    <RoomCard key={index} roomData={room} toggleAccordion={toggleAccordion} />

                ))
            }

            {Object.keys(selectedRooms).length >= 1 ? <button onClick={() => { toggleAccordion(3); setisRoomSelected(true) }} className='text-center justify-center items-center px-5 py-2.5 text-white bg-orange-600 hover:bg-orange-700  rounded-md max-md:px-5'>Confirm Booking</button> : ""}
        </div>
    )
}

export default Rooms