import React, { useContext } from 'react'
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6'
import AuthContext from '../context/AuthProvider'

const CheckForAvailbility = () => {

    const { checkForAvailbilityInfo, setCheckForAvailbilityInfo } = useContext(AuthContext);

    console.log(checkForAvailbilityInfo);



    const increaseAdultsCounter = () => {

    }
    const decreaseAdultsCounter = () => {

    }

    const decreaseChildrenCounter = () => {

    }
    const increaseChildrenCounter = () => {

    }
    return (
        <div className='py-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 flex-grow'>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">CHECK IN</div>
                    <input type='date' name='checkin' onChange={(e) => setCheckForAvailbilityInfo({ ...checkForAvailbilityInfo, checkin: e.target.value })} className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">CHECK IN</div>
                    <input type='date' name='checkout' onChange={(e) => setCheckForAvailbilityInfo({ ...checkForAvailbilityInfo, checkout: e.target.value })} className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">ROOM 1</div>
                    <div className='flex justify-between items-center px-5 py-[9px] mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5'>
                        <div>Adults</div>
                        <div className='flex items-center gap-5'>
                            <FaSquareMinus onClick={() => decreaseAdultsCounter()} size={18} className='text-zinc-700 cursor-pointer' />
                            {checkForAvailbilityInfo.adults}
                            <FaSquarePlus onClick={() => increaseAdultsCounter()} size={18} className='text-zinc-700 cursor-pointer' />
                        </div>

                    </div>
                </div>
                {/* <div className="flex flex-col">
                    <div className="self-end text-sm font-medium text-sky-900">
                        + ADD ANOTHER ROOM
                    </div>
                </div> */}

                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">ROOM 1</div>
                    <div className='flex justify-between items-center px-5 py-[9px] mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5'>
                        <div>Children (Age 0-12 years)</div>
                        <div className='flex items-center gap-5'>
                            <FaSquareMinus onClick={() => decreaseChildrenCounter()} size={18} className='text-zinc-700 cursor-pointer' />
                            {checkForAvailbilityInfo.children}
                            <FaSquarePlus onClick={() => increaseChildrenCounter()} size={18} className='text-zinc-700 cursor-pointer' />
                        </div>

                    </div>
                </div>
                <button className="mt-2 text-center justify-center items-start px-5 py-2.5 rounded-md bg-neutral-200 max-md:px-5">
                    Enter Promo Code
                </button>
                <button className="mt-2 text-center justify-center items-center px-5 py-2.5 text-white bg-sky-900 rounded-md max-md:px-5">
                    Check Availability
                </button>
            </div>
        </div>
    )
}

export default CheckForAvailbility