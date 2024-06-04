import React, { useContext } from 'react';
import { FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthContext from '../context/AuthProvider';



const RoomCard = ({ toggleAccordion, roomData }) => {

    const { customPrice, setCustomPrice, } = useContext(AuthContext);

    const navigation = useNavigate();
    const { setisRoomSelected, setSelectedRoomDetails, Adults,
        selectedRooms, setSelectedRooms, fetchDynamicRoomInventory,
        setFetchDynamicRoomInventory,
        subTotal, setSubTotal,
        taxes, setTaxes,
        grandTotal, setGrandTotals, maxAdult, setmaxAdult
    } = useContext(AuthContext);





    // roomtype check into selected 
    const handleUpdatePrice = (roomType, price, counter) => {
        setSubTotal(prevSelectedPrice => {
            // Create a copy of the previous state
            const updatedSelectedPrice = { ...prevSelectedPrice };


            updatedSelectedPrice[roomType] = price * counter



            return updatedSelectedPrice;
        });

    }

    const handleUpdateMaxAdult = (roomType, adult, counter) => {
        setmaxAdult(prevSelectedadult => {
            // Create a copy of the previous state
            const updatedSelectedadults = { ...prevSelectedadult };


            updatedSelectedadults[roomType] = adult * counter



            return updatedSelectedadults;
        });

    }



    const handleSelectedRoomCounter = (roomType) => {
        setSelectedRooms(prevSelectedRooms => {
            // Create a copy of the previous state

            let maxvalue = Number(fetchDynamicRoomInventory[roomType]);

            const updatedSelectedRooms = { ...prevSelectedRooms };

            if (roomType in updatedSelectedRooms) {
                updatedSelectedRooms[roomType] += 1;
                if (updatedSelectedRooms[roomType] > maxvalue) {
                    updatedSelectedRooms[roomType] = maxvalue;
                    handleUpdatePrice(roomType, customPrice[roomType].Price, maxvalue)
                    handleUpdateMaxAdult(roomType, roomData.adult, maxvalue)

                }
                else{
                    handleUpdatePrice(roomType, customPrice[roomType].Price, updatedSelectedRooms[roomType])
                    handleUpdateMaxAdult(roomType, roomData.adult, updatedSelectedRooms[roomType])
                }
            }
            else {
                updatedSelectedRooms[roomType] = 1;
                handleUpdatePrice(roomType, customPrice[roomType].Price, 1)
                handleUpdateMaxAdult(roomType, roomData.adult, 1)
            }


            console.log(updatedSelectedRooms)
            return updatedSelectedRooms;
        });
    }

    const handleSelectedRoomCounterDescrease = (roomType) => {
        setSelectedRooms(prevSelectedRooms => {
            // Create a copy of the previous state
            const updatedSelectedRooms = { ...prevSelectedRooms };


            if (roomType in updatedSelectedRooms) {
                updatedSelectedRooms[roomType] -= 1;
                if (updatedSelectedRooms[roomType] <= 0) {

                    delete updatedSelectedRooms[roomType];
                    // updatedSelectedRooms[roomType] = 0;
                    handleUpdatePrice(roomType, customPrice[roomType].Price, 0)
                    handleUpdateMaxAdult(roomType, roomData.adult, 0)
                }
                else{
                    handleUpdatePrice(roomType, customPrice[roomType].Price, updatedSelectedRooms[roomType])
                    handleUpdateMaxAdult(roomType, roomData.adult, updatedSelectedRooms[roomType])
                }
            }
            else {
                updatedSelectedRooms[roomType] = 1;
                handleUpdatePrice(roomType, customPrice[roomType].Price, 1)
                handleUpdateMaxAdult(roomType, roomData.adult, 1)
            }

            // Log the updated state


            // Return the updated state to update the state
            // console.log(updatedSelectedRooms)
            return updatedSelectedRooms;
        });
    }






    const handleViewDetailRooms = () => {
        setSelectedRoomDetails(roomData);
        navigation('/room-details');
    }


    return (
        <div>
            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-md:flex-wrap">
                    <div className="flex flex-col gap-0 justify-center text-xs leading-6 text-white">
                        <div className="relative lg:h-[300px] rounded-lg  overflow-hidden aspect-[1.31]">
                            <Swiper
                                loop={true}

                                autoplay={{
                                    delay: 4000,
                                }}
                                pagination={{
                                    el: "#bullets-Portfolio",
                                }}
                                navigation={{
                                    prevEl: ".prev-btn",
                                    nextEl: ".next-btn",
                                }}
                                modules={[Pagination, Autoplay, Navigation]}
                            >
                                {roomData?.roomImage?.map((roomImg, index) => {
                                    return (
                                        <SwiperSlide>
                                            <img
                                                key={index}
                                                loading="lazy"
                                                src={roomImg}
                                                alt="room"
                                                className=" w-[100%] h-[100%] border"
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            {/* <img
                                loading="lazy"
                                src={RoomImage}
                                className="object-cover absolute overflow-hidden inset-0 size-full"
                            /> */}
                            <button onClick={handleViewDetailRooms} className="absolute z-10 flex  gap-2.5 justify-center px-3 py-1.5 left-[10px] bottom-[20px] transform translate-1/2 rounded-md bg-zinc-700 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb2b71629ebaf78253b038db61e828079f3c065dfe41e969f3dacef84cec79bf?"
                                    className="shrink-0 gap-0 my-auto aspect-square w-[18px]"
                                />
                                <div className="gap-0">View Photos</div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col self-start text-base font-medium text-neutral-700">
                        <div className="text-[16px] gap-0">{roomData.roomName}</div>
                        <div className="gap-0 mt-3 font-normal text-justify text-stone-500">
                            {roomData.roomDescription}
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                            {roomData?.roomFacilities?.wifi && <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/29992db67b5c798d2968948d165f7a99dd62b87751fe10cb007dfbc55e82e6c0?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Free Wifi</div>
                            </div>}
                            {roomData?.roomFacilities?.television && <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4eafddeac942014acfcdffc7ddebc3ed5b03b406be386ae442be8d79e67ce8b?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Television</div>
                            </div>}
                            {roomData?.roomFacilities?.airConditonar && <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d3b5b2a3d0c1dd2b2bd1a9a7a8b2362b670c3d974e247904e1e1f99d32c6aa?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">AirConditonar</div>
                            </div>}

                            {roomData?.roomFacilities?.coffeeMakers && <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cc9f8a77565b07bf4cac8af8bd260d9725613098c6c78d458d30ad6171f8597?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Coffee Makers</div>
                            </div>}
                        </div>
                    </div>
                </div>


                <div className="flex gap-5 justify-between mt-3 w-full text-base max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
                        <div className="gap-0 text-neutral-700">Room Only</div>
                        <div className="flex gap-2">
                            {/* <div className="gap-0 text-neutral-400">7,600.00</div> */}
                            <div className="gap-0 text-sky-900">{roomData.roomType in selectedRooms && selectedRooms[roomData.roomType] != 0 ? selectedRooms[roomData.roomType] * Number(customPrice[roomData.roomType].Price) : customPrice[roomData.roomType].Price}</div>
                            <div className="gap-0 my-auto text-xs text-neutral-700">
                                INR / Night
                            </div>
                        </div>
                    </div>


                    {/* <button onClick={() => { toggleAccordion(3); setisRoomSelected(true) }} className="justify-center px-12 py-2 text-white whitespace-nowrap bg-sky-900 rounded-md leading-[150%] max-md:px-5">
                        Book
                    </button> */}
                    {roomData.roomType in selectedRooms && selectedRooms[roomData.roomType] != 0 ? <div className='flex items-center gap-5'>
                        <FaSquareMinus onClick={() => { handleSelectedRoomCounterDescrease(roomData.roomType) }} size={24} className='text-zinc-700 cursor-pointer ' />
                        <p className='py-2 text-sky-900 text-[20px] '>{selectedRooms[roomData.roomType]}</p>
                        <FaSquarePlus onClick={() => { handleSelectedRoomCounter(roomData.roomType) }} size={24} className='text-zinc-700 cursor-pointer' />
                    </div>

                        :

                        Number(roomData.noOfRooms) !== 0 ? <button onClick={() => { handleSelectedRoomCounter(roomData.roomType) }} className="justify-center px-12 py-2 text-white whitespace-nowrap bg-zinc-700 rounded-md leading-[150%] max-md:px-5">Book</button> : "Sold out"

                    }
                </div>

                {/* <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
                        <div className="gap-0 text-neutral-700">Room with Breakfast</div>
                        <div className="flex gap-2">
                            <div className="gap-0 text-neutral-400">8,600.00</div>
                            <div className="gap-0 text-sky-900">7,400.00</div>
                            <div className="gap-0 my-auto text-xs text-neutral-700">
                                INR / Night + Taxes
                            </div>
                        </div>
                    </div>
                    <button  onClick={()=>{toggleAccordion(3);setisRoomSelected(true)}} className="justify-center px-12 py-2 text-white whitespace-nowrap bg-sky-900 rounded-md leading-[150%] max-md:px-5">
                        Book
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default RoomCard