import React from 'react'

const GuestDetails = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
            <Guest />
            <BookingDetails />
        </div>
    )
}


const Guest = () => {
    return (
        <div>
            <div className="justify-center items-start px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg  border border-solid border-zinc-700">
                Guest Details
            </div>
            <div className="flex flex-col gap-2 px-5 py-3 text-sm leading-6  text-neutral-400">
                <input placeholder='Name' className="justify-center items-start px-6 py-3 whitespace-nowrap bg-white rounded-md border" />
                <input placeholder='Phone Number' className="justify-center items-start px-6 py-3 whitespace-nowrap bg-white rounded-md border" />
                <input placeholder='Email' className="justify-center items-start px-6 py-3 whitespace-nowrap bg-white rounded-md border" />
                <textarea placeholder='Special Request' className=" h-[125px] justify-center items-start px-6 py-3 whitespace-nowrap bg-white rounded-md border" />

            </div>
        </div>
    )
}


const BookingDetails = () => {
    return (
        <div className=''>
            <div className="justify-center items-start px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg  border-2 border-solid border-zinc-700">
                Booking Details
            </div>
            <div className="flex flex-col gap-2 px-5 py-3 text-sm leading-6  text-neutral-400">
            </div>

        </div>
    )
}



export default GuestDetails