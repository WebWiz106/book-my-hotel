import React, { useContext } from 'react';
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';
import AuthContext from '../../context/AuthProvider';

const CheckForAvailbility = ({ toggleAccordion }) => {

    const { checkForAvailbilityInfo, setCheckForAvailbilityInfo, checkinInDate, setcheckinInDate,
        checkoutDate, setcheckoutDate, Adults, setAdults,
        kids, setkids, Rooms, setRooms, loading, setLoading, customPrice, setCustomPrice, RoomTypeToName, setRoomTypeToName } = useContext(AuthContext);

    // console.log(checkForAvailbilityInfo);





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

        // console.log(nextSelectDate)
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



    const roomhost = "https://nexon.eazotel.com/room/engine/c94fcd4b-2625-4d5c-9177-2b62fbda9fe1"

    const CheckRoomsAvaiblity = async () => {

        setLoading(true);

        try {

            const body = {
                "checkIn": checkinInDate,
                "checkOut": checkoutDate,
                "hId": "45813642"
            }

            const response = await fetch(roomhost, {

                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                setRooms(data.Details);
                const dictionary = data.Details.reduce((acc, curr) => {
                    acc[curr.roomType] = curr.roomName;
                    return acc;
                }, {});
                setRoomTypeToName(dictionary);
                setCustomPrice(data.Price);
                setLoading(false);
                toggleAccordion(2)
            }
            else {
                // console.log("Error:", response.statusText);
            }

        } catch (error) {
            setLoading(false);
            // console.log("Error", error);
        }
    }


    const fetchDynamicRoomInventory = {
        "DELUX": 5,
        "EliteSuite": 0,
        "ExclusiveRetreat": 0,
        "GrandDeluxe": 0,
        "ImperialSuite": 0,
        "PREMIUM": 0,
        "PremiereRetreat": 0,
        "PrestigeSuite": 0,
        "RoyalDeluxe": 0,
        "SUITE": 0,
        "SUPERDELUX": 0,
        "SupremeRetreat": 0
    }


    return (
        <div className='py-2'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-md:gap-5'>
                <div className='col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5 flex-grow'>
                    <div className="flex flex-col">
                        <div className="text-sm text-neutral-700">CHECK IN</div>
                        <input type='date' name='checkin' value={checkinInDate} onChange={(e) => { handleDateChange(e) }} className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm text-neutral-700">CHECK OUT</div>
                        <input type='date' name='checkout' value={checkoutDate} onChange={(e) => { handleDateChangeCheckout(e) }} className="calender outline-none flex flex-col justify-center px-5 py-2 mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm text-neutral-700">ROOM 1</div>
                        <div className='flex justify-between items-center px-5 gap-2 py-[9px] mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5'>
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
                        <div className="text-sm text-neutral-700">Children(0-12)</div>
                        <div className='flex justify-between items-center gap-2 px-5 py-[9px] mt-2 w-full text-base leading-6 bg-white rounded-md border border-solid border-zinc-700 text-neutral-700 max-md:px-5'>
                            <div>Kids</div>
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
                    <button className="mt-2 text-center justify-center items-center px-5 py-2.5 text-white bg-orange-600 hover:bg-orange-700  rounded-md max-md:px-5" onClick={() => { CheckRoomsAvaiblity() }}>
                        {loading ? <div role="status">
                            <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div> : "Check Availability"}
                    </button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div></div>
                    <div className='col-span-2 grid grid-cols-1 gap-2'>
                        <OfferCard />
                        <SomeDetailsAboutHotelRooms />

                    </div>
                </div>
            </div>
        </div>
    )
}



const SomeDetailsAboutHotelRooms = () => {
    return (
        <div className=' bg-orange-100 flex flex-col gap-1 text-[12px] p-3 rounded-lg'>
            <p> Top rated hotel on tripadvisor</p>
            <p>Great Location - On the banks of river Ganges</p>
            <p>Infinity Swimming Pool</p>
            <p>Spa and Wellness Centre</p>
        </div>
    )
}


const OfferCard = () => {
    return (
        <div className='bg-green-100 flex flex-col gap-1 text-[12px] p-3 rounded-lg'>
            <p>Pay in Easy EMI, when you Book Direct</p>
            <p>Book Direct Offer - Flat 15% off on Best Available Rates</p>
            <p>Stay for 3 nights and get exciting offer and inclusions Use Deal Code - STAYCATION</p>
        </div>
    )
}


export default CheckForAvailbility