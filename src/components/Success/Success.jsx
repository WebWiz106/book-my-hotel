import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';

import { MdEmail, MdPhone } from "react-icons/md";
import generatePDF from 'react-to-pdf';

const Success = () => {
    const { hotelDetails, setHotelDetails, Adults,
        kids, bookingDetails, checkinInDate,
        checkoutDate, selectedRooms, RoomTypeToName, subTotal,
        setTaxes, grandTotal, setGrandTotals,
        payment, bookingId
    } = useContext(AuthContext);


    const targetRef = useRef();

    const [isPDFGenerationInProgress, setPDFGenerationInProgress] = useState(false);


    console.log("Line number 24 ", hotelDetails,)

    const handleDownloadClick = () => {
        // if (!isPDFGenerationInProgress) {
        //     setPDFGenerationInProgress(true);

        //     const element = document.getElementById('success-content');

        //     if (!element) {
        //         console.error('Element with id "success-content" not found.');
        //         setPDFGenerationInProgress(false);
        //         return;
        //     }

        //     try {
        //         html2pdf()
        //             .from(element)
        //             .save('receipt.pdf')
        //             .then(() => {
        //                 console.log('PDF generated successfully');
        //                 setPDFGenerationInProgress(false);
        //             })
        //             .catch(error => {
        //                 console.error('Error generating PDF:', error);
        //                 setPDFGenerationInProgress(false);
        //             });
        //     } catch (error) {
        //         console.error('Synchronous error in HTML2PDF processing:', error);
        //         setPDFGenerationInProgress(false);
        //     }
        // } else {
        //     console.log('PDF generation is already in progress.');
        // }
    };
    const getDayOfWeek = (date) => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayIndex = new Date(date).getDay();
        return daysOfWeek[dayIndex];
    };

    const getDayFromDate = (dateString) => {
        const dt = new Date(dateString);
        return dt.getDate();
    }

    const getMonthInWords = (dateString) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dt = new Date(dateString);
        const monthIndex = dt.getMonth();
        return monthNames[monthIndex];
    };

    const computeTotalPrice = () => {
        let totalPrice = 0;

        // Iterate over keys in the dictionary
        for (let key in subTotal) {
            // Convert the value to a number and add it to totalPrice
            totalPrice += parseInt(subTotal[key]);
        }
        setTaxes(0.18 * totalPrice)
        setGrandTotals(0.18 * totalPrice + totalPrice)
        return totalPrice;
    }


    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };


    return (
        <div className='px-2 w-full'>
            <div ref={targetRef} className={`max-w-[800px] md:w-[800px] mx-auto border-2 border-zinc-400  ${isPDFGenerationInProgress ? '' : 'rounded-lg'} bg-white`}>
                <div className='flex max-md:flex-col gap-5 md:gap-10 py-4  px-5'>
                    <div className='w-full flex-col gap-1 md:w-[60%] flex justify-center '>
                        <p className='text-[20px]  text-neutral-700 font-semibold'>{hotelDetails?.HotelName}</p>
                        <p className='text-[16px]   text-neutral-700 font-semibold'>{hotelDetails.Footer.Address}, {hotelDetails.Footer.City}</p>
                    </div>
                    <div className='w-full flex-col gap-1 md:w-[40%] flex justify-center md:items-end'>
                        <p className='text-[20px]  text-neutral-700 font-semibold'>Booking ID - {bookingId}</p>
                        <Link onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })} className='text-[12px] text-blue-500 '> {isPDFGenerationInProgress ? '' : 'PRINT / DOWNLOAD RECEIPT'}</Link>

                    </div>
                </div>

                <hr class="h-px bg-zinc-400 border-0" />


                <div className='flex max-md:flex-col gap-10 py-4  px-5'>
                    <div className='w-full flex flex-col gap-2 md:w-[60%] '>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            <div className='lg:col-span-2 flex flex-col gap-2'>
                                <div className='text-[16px] font-semibold  text-neutral-700'>Checkin Details</div>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className='border border-zinc-700'>
                                        <div className='bg-zinc-700 py-1 w-full text-center text-white'>{getDayOfWeek(checkinInDate)}</div>
                                        <div className='text-center  text-neutral-700 text-[22px] py-1'>{getDayFromDate(checkinInDate)}</div>
                                        <div className='text-center  text-neutral-700 py-1'>{getMonthInWords(checkinInDate)}</div>
                                    </div>
                                    <div className='border border-zinc-700'>
                                        <div className='bg-zinc-700 py-1 w-full text-center text-white'>{getDayOfWeek(checkoutDate)}</div>
                                        <div className='text-center  text-neutral-700 text-[22px] py-1'>{getDayFromDate(checkoutDate)}</div>
                                        <div className='text-center  text-neutral-700 py-1'>{getMonthInWords(checkoutDate)}</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='text-[16px] font-semibold  text-neutral-700'>Rooms Fare Breakup</div>
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-xs text-neutral-700 uppercase">
                                <tr>
                                    <th scope="col" class=" py-2">
                                        Room Name
                                    </th>
                                    <th scope="col" class=" py-2">
                                        Quantity
                                    </th>
                                    <th scope="col" class=" py-2 text-end">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {Object.keys(selectedRooms).map((key) => {
                                    const roomLabel = RoomTypeToName[key] || `Room-${key}`; // Use the label from RoomLabels if available, otherwise use a default label
                                    return (

                                        <tr key={key}>
                                            <td className=" py-2">{roomLabel}</td>
                                            <td className=" py-2"> {selectedRooms[key]}</td>
                                            <td className='text-[16px] text-end'> {subTotal[key]}</td>
                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>
                        <div className='flex flex-col items-end'>



                        </div>
                        <div className='flex justify-end'>Taxes Rs. <span className='font-semibold text-neutral-700 ml-2'> {0.18 * computeTotalPrice()}</span></div>
                        <div className='flex justify-end font-semibold text-green-700'>Total Rs. {grandTotal}</div>
                        {payment && <div className='flex justify-end'>Amount paid <span className='font-semibold text-neutral-700 ml-2'>Rs {payment * grandTotal}</span> </div>}
                        {payment && <div className='flex justify-end'>Balance ammout to pay<span className='font-semibold text-red-700 ml-2'> Rs {grandTotal - payment * grandTotal} </span></div>}

                    </div>



                    <div className='relative w-full flex flex-col gap-2 md:w-[40%]'>
                        <div className='bg-zinc-700 w-full uppercase text-center text-[white] font-normal py-2'>
                            Status of booking
                        </div>
                        <div className='text-neutral-400 font-semibold'>
                            Name :  <span className='text-neutral-700'>{bookingDetails.name}</span>
                        </div>
                        <div className='text-neutral-400 font-semibold'>
                            Phone :  <span className='text-neutral-700'>{bookingDetails.phone}</span>
                        </div>
                        <div className='text-neutral-400 font-semibold'>
                            Email :  <span className='text-neutral-700'>{bookingDetails.email}</span>
                        </div>

                        <div className='flex text-neutral-400 font-semibold'>
                            Guest :   <span className=' text-neutral-700'> {Adults} Adults, {kids} Kids</span>
                        </div>

                        <div className='text-neutral-400 font-semibold'>
                            Hotel Details :   <span className='text-neutral-700'>{hotelDetails.HotelName}</span>
                        </div>
                        <div className='text-neutral-700 font-semibold flex items-center gap-1'>
                            <MdPhone size={20} className='text-neutral-700' />
                            {hotelDetails.Footer.Phone}
                        </div>
                        <div className='text-neutral-700 font-semibold flex items-center gap-1'>
                            <MdEmail size={20} className='text-neutral-700' />
                            {hotelDetails.Footer.Email}
                        </div>
                        <Link to="/" className='absolute bottom-0 right-0 text-blue-600 underline' > {isPDFGenerationInProgress ? 'Booked by Webjini.booking' : 'go to home'}</Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Success