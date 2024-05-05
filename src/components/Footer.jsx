import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider';

const Footer = () => {

    const { hotelDetails, setHotelDetails } = useContext(AuthContext);
    return (
        <div className="flex flex-col gap-3.5 items-center mt-16 pb-5 shadow-sm bg-[#F8F8F8] max-md:flex-wrap max-md:px-2">
            <div className="gap-0 mt-0 text-2xl font-semibold text-neutral-700">
                {hotelDetails.hotelName}
            </div>
            <div className="flex gap-3 justify-between text-sm text-sky-900 max-md:flex-wrap">
                <div className="gap-0">Home</div>
                <div className="gap-0">View Location on Map</div>
                <div className="gap-0">My Bookings</div>
                <div className="gap-0">Reservation Powered by WebJini</div>
            </div>
        </div>
    )
}

export default Footer