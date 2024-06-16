import React from 'react'
import HotelSlider from '../HotelSlider/HotelSlider'
import BookingCard from './BookingCard'
const Booking = () => {
  return (
    <div className="maxwidth mx-auto">
      <div className="flex p-2 justify-center border-2 border-black border-opacity-25 rounded-md">
        <p className="font-bold text-xl">Your Bookings</p>
      </div>
      <div className=" mt-2 md:mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 ">

        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </div>
  )
}

export default Booking