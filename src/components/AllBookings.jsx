import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import BookingEditPopup from './BookingEditPopup';


export const AllBookings = () => {
  const { AllBookings, bookingPopup, setBookingPopup } = useContext(AuthContext)
  const [dateRange, setDateRange] = useState(false);
  const [singleBookingSearch, setSingleBookingSearch] = useState(false)
  const [all, setAll] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.id === "3") {
      setSingleBookingSearch(false);
      setAll(false);
      setDateRange(true)
    } else if (event.target.id === "4") {
      setAll(false);
      setDateRange(false);
      setSingleBookingSearch(true);
    } else if (event.target.id === "1") {
      setDateRange(false);
      setSingleBookingSearch(false);
      setAll(true);
    } else {
      setDateRange(false);
      setSingleBookingSearch(false);
      setAll(false);
    }
  }

  const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]


  const handleEditBookingPopup = () => {
    setBookingPopup(!bookingPopup)
  }


  return (
    <div className="maxwidth mx-auto">
      <div className="radio flex justify-start md:gap-4 max-md:flex-col flex-wrap max-md:px-2">
        <div className='flex items-center'>
          <input type="radio" id='1' name="bookingType" className="mt-[2px]" onChange={handleRadioChange} />
          <label htmlFor="1" className='ms-1'>All</label>
        </div>
        <div className='flex items-center'>
          <input type="radio" id='2' name="bookingType" className="mt-[2px]" onChange={handleRadioChange} />
          <label htmlFor="2" className='ms-1'>This Month</label>
        </div>
        <div className='flex items-center'>
          <input type="radio" id='3' name="bookingType" className="mt-[2px]" onChange={handleRadioChange} />
          <label htmlFor="3" className='ms-1'>Date range Booking</label>
        </div>
        <div className='flex items-center'>
          <input type="radio" id='4' name="bookingType" className="mt-[2px]" onChange={handleRadioChange} />
          <label htmlFor="4" className='ms-1'>Single Booking Search</label>
        </div>
        <div className='flex items-center'>
          <button className="border-2 border-blue-500 text-blue-500 px-[18px] rounded-md hover:bg-blue-500 hover:text-white hover:cursor-pointer">Close</button>
        </div>
      </div>
      {dateRange && <div className="flex flex-wrap justify-between mt-2">
        <div className="flex items-center">
          <label htmlFor="" className=''>Playing Date From: </label>
          <input type="date" className='ms-4 border-2 border-opacity-25 border-black px-4 rounded-md' />
        </div>
        <div className="flex items-center">
          <label htmlFor="">Playing Date To: </label>
          <input type="date" className='ms-4 border-2 border-opacity-25 border-black px-4 rounded-md' />
        </div>
        <div className="flex items-center">
          <button className='p-3 border-2 border-blue-500 text-blue-500 px-[18px] rounded-md hover:bg-blue-500 hover:text-white hover:cursor-pointer'>Show Bookings</button>
        </div>
      </div>}
      {singleBookingSearch && <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <label htmlFor="">Booking Id: </label>
          <input type="text" className='ms-4 border-2 border-opacity-25 border-black px-4 rounded-md' placeholder="Enter booking Id" />
        </div>
        <div className="flex items-center">
          <button className='p-3 border-2 border-blue-500 text-blue-500 px-[18px] rounded-md hover:bg-blue-500 hover:text-white hover:cursor-pointer'>Show Bookings</button>
        </div>
      </div>}
      {all && <div className="checkbox flex justify-start gap-4 mt-2">
        <div className='flex items-center'>
          <input type="checkbox" id='1' className="mt-[2px]" style={{ borderRadius: '0' }} />
          <label htmlFor="1" className='ms-1'>ADVANCED</label>
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id='2' className="mt-[2px]" />
          <label htmlFor="2" className='ms-1'>SUCCESS</label>
        </div>
      </div>}
      <div class="relative overflow-x-auto mt-4 h-[80vh] ">
        <table class="w-full text-sm text-left rtl:text-right">
          <thead class="text-xs text-white uppercase bg-zinc-700">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Booking Id
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Name
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Email-Id
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Phone
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Total Price
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Remaining
              </th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody className='bg-neutral-200'>
            {AllBookings.map((item, index) => (
              <tr key={index} class=" border-b">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                  {item.bookingId}
                </th>
                <td class="px-6 py-4">
                  {item.guestInfo.guestName}
                </td>
                <td class="px-6 py-4">
                  {item.guestInfo.EmailId}
                </td>
                <td class="px-6 py-4">
                  {item.guestInfo.Phone}
                </td>
                <td class="px-6 py-4">
                  {item.price.Total}
                </td>
                <td class="px-6 py-4">
                  {item.price.Total - item.price.amountPay}
                </td>
                <td class="px-6 py-4">
                  {item.payment.Status}
                </td>
                <td class="px-6 py-4">
                  <div onClick={handleEditBookingPopup} className="flex gap-4">
                    <button>Edit</button>
                    <button>Update</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {bookingPopup && <BookingEditPopup />}
    </div>
  )
}

export default AllBookings;