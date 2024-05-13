import React, { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import RoomCard from './RoomCard';

const Rooms = ({ toggleAccordion }) => {


    const { Rooms, setRooms, setisRoomSelected, selectedRooms, maxAdult, Adults } = useContext(AuthContext);

    const computeadultmatching = () => {
        let totaladults = 0;

        // Iterate over keys in the dictionary
        for (let key in maxAdult) {
            // Convert the value to a number and add it to totalPrice
            totaladults += parseInt(maxAdult[key]);
        }

        if (Adults > totaladults) {
            return false
        }
        else {
            return true
        }
    }

    console.log()
    return (
        <div className='flex flex-col gap-10'>
            {
                Rooms.map((room, index) => (

                    <RoomCard key={index} roomData={room} toggleAccordion={toggleAccordion} />

                ))
            }

            {Object.keys(selectedRooms).length >= 1 && computeadultmatching() ?
                <button onClick={() => { toggleAccordion(3); setisRoomSelected(true) }} className='text-center justify-center items-center px-5 py-2.5 text-white bg-orange-600 hover:bg-orange-700  rounded-md max-md:px-5'>Confirm Booking</button>
                : Object.keys(selectedRooms).length >= 1 ?
                    <div className='text-center justify-center items-center px-5 py-2.5 text-white bg-gray-600 rounded-md max-md:px-5'>Select More Rooms for booking</div> : ""}
        </div>
    )
}

export default Rooms