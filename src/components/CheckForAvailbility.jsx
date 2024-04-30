import React, { useContext } from 'react';
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';
import AuthContext from '../context/AuthProvider';

const CheckForAvailbility = ({ toggleAccordion}) => {

    const { checkForAvailbilityInfo, setCheckForAvailbilityInfo,checkinInDate,setcheckinInDate,
        checkoutDate,setcheckoutDate ,Adults,setAdults,
        kids,setkids,Rooms,setRooms} = useContext(AuthContext);

    console.log(checkForAvailbilityInfo);



    

    const countofAdults = (term) => {
        if (term == "add") {
            let number = Adults
            setAdults(number += 1)
        } else {
            let number = Adults;
            number -= 1
            if (number < 1) {
                setAdults(Adults)
            }
            else {
                setAdults(number)
            }
        }

    }

    const countofKids = (term) => {
        if (term == "add") {
            let number = kids
            setkids(number += 1)
        } else {
            let number = kids;
            number -= 1
            if (number < 0) {
                setkids(0)
            }
            else {
                setkids(number)
            }
        }


    }



    const handleDateChange = (event) => {
        let selectDate = new Date(event.target.value)

        let nextDate = new Date(selectDate);
        nextDate.setDate(selectDate.getDate() + 1);

        let nextSelectDate = nextDate.toISOString().split('T')[0];

        console.log(nextSelectDate)
        setcheckoutDate(nextSelectDate);

        setcheckinInDate(event.target.value);
        // var date1 = new Date(event.target.value);
        // var date2 = new Date(nextSelectDate);
        // var Difference_In_Time = date2.getTime() - date1.getTime();
        // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        // setNights(Difference_In_Days);
    };

    const handleDateChangeCheckout = (event) => {
        setcheckoutDate(event.target.value);
        // var date1 = new Date(selectedDate);
        // var date2 = new Date(event.target.value);
        // var Difference_In_Time = date2.getTime() - date1.getTime();
        // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        // setNights(Difference_In_Days);
        // FetchRoomsAndPrice()

    }

    const CheckRoomsAvaiblity = ()=>{
        toggleAccordion(2)
        setRooms([1,2]);
       
    }


    return (
        <div className='py-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 flex-grow'>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">CHECK IN</div>
                    <input type='date' name='checkin' value={checkinInDate} onChange={(e)=>{handleDateChange(e)}} className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">CHECK IN</div>
                    <input type='date' name='checkout' value={checkoutDate} onChange={(e)=>{handleDateChangeCheckout(e)}}  className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                </div>
                <div className="flex flex-col">
                    <div className="text-sm text-neutral-700">ROOM 1</div>
                    <div className='flex justify-between items-center px-5 py-[9px] mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5'>
                        <div>Adults</div>
                        <div className='flex items-center gap-5'>
                            <FaSquareMinus onClick={() => { countofAdults("sub") }} size={18} className='text-zinc-700 cursor-pointer' />
                                {Adults}
                            <FaSquarePlus onClick={() => { countofAdults("add") }} size={18} className='text-zinc-700 cursor-pointer' />
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
                            <FaSquareMinus onClick={() => { countofKids("sub") }} size={18} className='text-zinc-700 cursor-pointer' />
                                {kids}
                            <FaSquarePlus onClick={() => { countofKids("add") }} size={18} className='text-zinc-700 cursor-pointer' />
                        </div>

                    </div>
                </div>
                <button className="mt-2 text-center justify-center items-start px-5 py-2.5 rounded-md bg-neutral-200 max-md:px-5">
                    Enter Promo Code
                </button>
                <button className="mt-2 text-center justify-center items-center px-5 py-2.5 text-white bg-sky-900 rounded-md max-md:px-5" onClick={()=>{CheckRoomsAvaiblity()}}>
                    Check Availability
                </button>
            </div>
        </div>
    )
}

export default CheckForAvailbility