import React from 'react'
import HotelDetails from '../components/HotelDetails'
import Accordian from '../components/Accordian'
import RoomDetails from '../components/RoomDetails'

const Home = () => {
    return (
        <>
            <div className="maxwidth mx-auto mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5 px-2" >
                <div className='lg:col-span-3 lg:order-2'><Accordian /></div>
                <div className='w-full '><HotelDetails /></div>


            </div>


            {/* <RoomDetails /> */}
        </>
    )
}

export default Home