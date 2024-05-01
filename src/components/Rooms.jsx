import React, { useContext } from 'react'
import RoomCard from './RoomCard'
import AuthContext from '../context/AuthProvider';

const Rooms = ({ toggleAccordion }) => {


    const { Rooms, setRooms } = useContext(AuthContext);
    return (
        <div className='flex flex-col gap-10'>
            {
                Rooms.map((room, index) => (

                    <RoomCard key={index} roomData={room} toggleAccordion={toggleAccordion} />

                ))
            }

        </div>
    )
}

export default Rooms