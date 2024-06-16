import React, { useContext } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdClose } from "react-icons/io";
import AuthContext from '../../context/AuthProvider';

const ImagePopup = ({ roomImages }) => {


    const { setRoomImagePopup } = useContext(AuthContext);


    const handleMenu = () => {
        setRoomImagePopup(false);
        // setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='fixed flex flex-col justify-center top-0 left-0 bg-black/90 h-screen w-full z-10'>
            <div className='maxwidth mx-auto  w-full px-2  '>
                <div className='flex justify-end'>
                    <IoMdClose size={44} onClick={handleMenu} className="text-white cursor-pointer hover:text-orange-600 hover:cursor-pointer" />
                </div>
                <div className='h-[300px] mt-5 overflow-hidden'>
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            el: "#bullets-Portfolio",
                        }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Autoplay, Navigation]}
                        className='h-[100%]'
                    >
                        {roomImages?.map((roomImg, index) => {
                            return (
                                <SwiperSlide>
                                    <img
                                        key={index}
                                        loading="lazy"
                                        src={roomImg}
                                        alt="room"
                                        className=" w-[100%] h-[100%] object-cover rounded-sm "
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default ImagePopup