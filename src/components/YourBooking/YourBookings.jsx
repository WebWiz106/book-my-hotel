import React from 'react'

const YourBookings = () => {
  const handleEditBookingPopup= ()=>{
    alert("edit popup");
  }
  return (
    <div className="maxwidth mx-auto p-4">
      <div className="flex p-2 justify-center border-2 border-black border-opacity-25 rounded-md">
        <p className="font-bold text-xl">Your Bookings</p>
      </div>
      <div className=" mt-2 md:mt-6 cards">
        <div class="relative overflow-x-auto">
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
              <tr class=" border-b">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                  BH1234567BTK
                </th>
                <td class="px-6 py-4">
                  Shubham Aggarwal
                </td>
                <td class="px-6 py-4">
                  shubham@gmail.com
                </td>
                <td class="px-6 py-4">
                  9897663645
                </td>
                <td class="px-6 py-4">
                  4500/-
                </td>
                <td class="px-6 py-4">
                  1200/-
                </td>
                <td class="px-6 py-4">
                  Fully paid
                </td>
                <td class="px-6 py-4">
                  <div onClick={handleEditBookingPopup} className="flex gap-4">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default YourBookings