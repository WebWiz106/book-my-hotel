import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex flex-col gap-3.5 items-center mt-16 pb-5 shadow-sm bg-stone-50 max-md:flex-wrap max-md:px-5">
            <div className="gap-0 mt-0 text-2xl font-semibold text-neutral-700">
                The Lorem Ipsum Hotel
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