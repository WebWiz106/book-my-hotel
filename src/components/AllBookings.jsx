import React, { useState } from 'react'


export const AllBookings = () => {
  const [dateRange, setDateRange] = useState(false);
  const [singleBookingSearch, setSingleBookingSearch] = useState(false)

  const handleRadioChange = (event) => {
    if (event.target.id === "3") {
      setSingleBookingSearch(false);
      setDateRange(true)
    } else if (event.target.id === "4") {
      setDateRange(false);
      setSingleBookingSearch(true);
    } else {
      setDateRange(false);
      setSingleBookingSearch(false);
    }
  }

  return (
    <div className="maxwidth px-5 mx-auto">
      <div className="radio flex justify-start gap-4">
        <div className='flex items-center'>
          <input type="radio" id='1' name="bookingType" className="mt-[2px]" onChange={handleRadioChange}  />
          <label htmlFor="1" className='ms-1'>All</label>
        </div>
        <div className='flex items-center'>
          <input type="radio" id='2' name="bookingType" className="mt-[2px]" onChange={handleRadioChange}  />
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
      {dateRange && <div className="flex justify-between mt-2">
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
      <div className="checkbox flex justify-start gap-4 mt-2">
        <div className='flex items-center'>
          <input type="checkbox" id='1' className="mt-[2px]" style={{ borderRadius: '0' }} />
          <label htmlFor="1" className='ms-1'>ADVANCED</label>
        </div>
        <div className='flex items-center'>
          <input type="checkbox" id='2' className="mt-[2px]" />
          <label htmlFor="2" className='ms-1'>SUCCESS</label>
        </div>
      </div>
      <div class="relative overflow-x-auto mt-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-4">
                  <button>Edit</button>
                  <button>Update</button>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-4">
                  <button>Edit</button>
                  <button>Update</button>
                </div>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <div className="flex gap-4">
                  <button>Edit</button>
                  <button>Update</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllBookings;