import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const HotelDetails = () => {
    const { hotelDetails, setHotelDetails } = useContext(AuthContext);
    console.log(hotelDetails);
    return (
        <div className="flex flex-col">
            <div className="justify-center items-start px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg  border border-solid border-zinc-700">
                Hotel Details
            </div>
            <div className="flex flex-col gap-[13px] px-4 py-2  w-full text-base border-t-0 bg-stone-50 border-2 rounded-b-lg">
                <div className="font-medium">{hotelDetails.hotelName}</div>
                <div className=" text-stone-500">{hotelDetails.hotelSlogan}</div>
                <div className=" font-medium">Phone:</div>
                <div className=" text-stone-500">{hotelDetails.phone}</div>
                <div className=" text-stone-500">{hotelDetails.alternatePhone}</div>
                <div className="self-start font-medium">Email:</div>
                <div className="self-start text-stone-500">
                    {hotelDetails.hotelEmail}
                </div>
                <div className=" font-medium">Hotel Address:</div>
                <div className=" text-stone-500">
                    {hotelDetails.hotelAddress}
                </div>
                <div className=" text-sm text-sky-900">Reservation Policy</div>
                <div className=" text-sm text-sky-900">Cancellation Policy</div>
            </div>
        </div>
    )
}

export default HotelDetails