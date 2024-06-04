import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';

const HotelDetails = () => {
    const { hotelDetails, setHotelDetails } = useContext(AuthContext);
    // console.log(hotelDetails);


    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Email submitted:', email);
        setEmail('');
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling behavior
            });
        };

        scrollToTop();
    }, [])
    return (
        <div className="flex flex-col">
            <div className="justify-center items-start px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg  border border-solid border-zinc-700">
                Hotel Details
            </div>
            <div className="flex flex-col gap-[13px] px-4 py-2  w-full text-base border-t-0 bg-stone-50 border-2 rounded-b-lg">
                <div className="font-medium">{hotelDetails.HotelName}</div>
                <div className=" font-medium">Phone:</div>
                <div className=" text-stone-500">{hotelDetails.Footer.Phone}</div>
                <div className=" text-stone-500">{hotelDetails.Footer.WhatsApp}</div>
                <div className="self-start font-medium">Email:</div>
                <div className="self-start text-stone-500">
                    {hotelDetails.Footer.Email}
                </div>
                <div className=" font-medium">Hotel Address:</div>
                <div className=" text-stone-500">
                    {hotelDetails.Footer.Address}, {hotelDetails.Footer.City}
                </div>
                <div className=" text-sm text-sky-900">Reservation Policy</div>
                <div className=" text-sm text-sky-900">Cancellation Policy</div>
            </div>

            <div className='mt-3 max-md:mt-3'>

                <div className="justify-center items-start px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg  border border-solid border-zinc-700">
                    Subscribe to our newsletter

                </div>

                <form className='rounded-b-lg overflow-hidden flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='px-4'>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleChange}
                            required
                            className='py-3 outline-none border-b-2 w-full'
                        />
                    </div>
                    <button type="submit" className='border rounded-b-lg py-2 bg-orange-600 text-white'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default HotelDetails