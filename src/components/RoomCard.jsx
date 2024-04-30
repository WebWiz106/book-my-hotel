import React, { useContext } from 'react'
import RoomImage from "../assets/9381Anandha_Inn_17 1.png"
import AuthContext from '../context/AuthProvider'

const RoomCard = ({toggleAccordion}) => {
    const {setisRoomSelected} = useContext(AuthContext)
    return (
        <div>
            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-md:flex-wrap">
                    <div className="flex flex-col gap-0 justify-center text-xs leading-6 text-white">
                        <div className="relative lg:h-[300px] rounded-lg  flex overflow-hidden flex-col gap-0 items-start px-2.5 pt-20 pb-2.5 w-full aspect-[1.31]">
                            <img
                                loading="lazy"
                                src={RoomImage}
                                className="object-cover absolute overflow-hidden inset-0 size-full"
                            />
                            <div className="absolute flex  gap-2.5 justify-center px-3 py-1.5 left-[10px] bottom-[20px] transform translate-1/2 rounded-md bg-zinc-700 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb2b71629ebaf78253b038db61e828079f3c065dfe41e969f3dacef84cec79bf?"
                                    className="shrink-0 gap-0 my-auto aspect-square w-[18px]"
                                />
                                <div className="gap-0">View Photos</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col self-start text-base font-medium text-neutral-700">
                        <div className="text-[16px] gap-0">Premium Room</div>
                        <div className="gap-0 mt-3 font-normal text-justify text-stone-500">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/29992db67b5c798d2968948d165f7a99dd62b87751fe10cb007dfbc55e82e6c0?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">King Bed</div>
                            </div>
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4eafddeac942014acfcdffc7ddebc3ed5b03b406be386ae442be8d79e67ce8b?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Free Wifi</div>
                            </div>
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d3b5b2a3d0c1dd2b2bd1a9a7a8b2362b670c3d974e247904e1e1f99d32c6aa?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Free Parking</div>
                            </div>
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    alt='tick'
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cc9f8a77565b07bf4cac8af8bd260d9725613098c6c78d458d30ad6171f8597?"
                                    className="shrink-0 gap-0 w-5 aspect-square"
                                />
                                <div className="gap-0">Upto 3 Guests</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex gap-5 justify-between mt-3 w-full text-base max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
                        <div className="gap-0 text-neutral-700">Room Only</div>
                        <div className="flex gap-2">
                            <div className="gap-0 text-neutral-400">7,600.00</div>
                            <div className="gap-0 text-sky-900">6,600.00</div>
                            <div className="gap-0 my-auto text-xs text-neutral-700">
                                INR / Night + Taxes
                            </div>
                        </div>
                    </div>
                    <button onClick={()=>{toggleAccordion(3);setisRoomSelected(true)}}  className="justify-center px-12 py-2 text-white whitespace-nowrap bg-sky-900 rounded-md leading-[150%] max-md:px-5">
                        Book
                    </button>
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