import React from 'react'
import HotelSlider from '../HotelSlider/HotelSlider'
const Booking = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="flex grid-cols-3">
        <div className="card flex bg-orange-300 h-[14rem] w-[35rem] rounded-md">
          <div className="carosal w-[11rem] h-full">
            <HotelSlider />
          </div>
          <div className="bookings-Details">
            <span>Hello</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking