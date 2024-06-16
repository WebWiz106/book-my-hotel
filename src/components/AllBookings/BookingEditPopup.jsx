import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import AuthContext from '../../context/AuthProvider';


const BookingEditPopup = ({ bookingInfo }) => {

    const { setBookingPopup, FetchAllBookings, baseUrl } = useContext(AuthContext)




    const handleBookingCloseClick = () => {
        setBookingPopup(false)
    }

    console.log(bookingInfo);

    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        let formattedHours = parseInt(hours, 10);
        const ampm = formattedHours >= 12 ? 'PM' : 'AM';

        // Convert 24-hour format to 12-hour format
        formattedHours = formattedHours % 12 || 12;

        return `${formattedHours}:${minutes} ${ampm}`;
    }

    function formatDateString(dateString) {
        // Parse the input date string into a Date object
        const date = new Date(dateString);

        // Check if the date is valid
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date format");
        }

        // Extract date components
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        // Format and return the date in DD-MM-YYYY format
        return `${day}-${month}-${year}`;
    }


    const updateBookingStatus = async (bookingid) => {
        const response = await fetch(`${baseUrl}/bookings/payment/status/SUCCESS`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "token": localStorage.getItem("engineUserToken"),
                "bookingId": bookingid,
                "hId": localStorage.getItem("locationid")
            }),
        });

        const json = await response.json()
        if (json.Status) {
            FetchAllBookings()
            setBookingPopup(false)
        }
        else {
            // alert("Wrong Combination")
        }
    }




    return (
        <div className='fixed max-md:overflow-auto top-0 left-0 z-10 max-md:pb-[4rem] w-full h-full max-md:h-[100%] max-md:px-5 flex justify-center items-center  bg-[#000000A6]'>
            <div className=" flex max-md:overflow-scroll max-md:mt-[100%]  flex-col items-center max-md:h-[auto] py-3 px-3 bg-white rounded-lg  max-md:w-full max-w-[786px] lg:w-[786px]">
                <div className='flex w-full justify-end'>
                    <RxCross2 className='cursor-pointer text-[] hover:text-orange-700' size={24} onClick={handleBookingCloseClick} />
                </div>
                <div className='w-full'>
                    <h1 className='heading  !text-center'>Booking ID: {bookingInfo.bookingId}</h1>
                </div>
                <div className='grid grid-cols-2 w-full  gap-10 max-md:grid-cols-1 max-md:gap-5 mt-5'>
                    <div className='flex flex-col gap-5 '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Payment Id:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.payment.payId}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Guest Name:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.guestName}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Email:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.EmailId}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Phone:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.Phone}</h1>
                        </div>



                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Bookings: </h1>

                            {/* <div className='flex'>

                                <h1 style={{ fontSize: "13px", border: "1px solid #ddd", padding: ".3rem .5rem" }}>{formatTime(bookingInfo.bookedSlots[0].slotstart)} - {formatTime(bookingInfo.bookedSlots[bookingInfo.bookedSlots.length - 1].slotEnd)}</h1>
                                <h1 style={{ fontSize: "13px", border: "1px solid #ddd", padding: ".3rem .5rem" }}>{bookingInfo.bookedSlots[0].turfName}</h1>

                            </div> */}

                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Payment Status:</h1>
                            <p>
                                {bookingInfo.payment.Status === "PENDING" ? (
                                    <span className='bg-orange-600 px-5 rounded-sm py-1 text-white'>{bookingInfo.payment.Status}</span>
                                ) : bookingInfo.payment.Status === "ADVANCED" ? <span className='badge_advance'>{bookingInfo.payment.Status}</span> :
                                    bookingInfo.payment.Status === "CANCELLED" ? <span className='badge_cancelled'>{bookingInfo.payment.Status}</span> : (
                                        <span>
                                            <span className='bg-green-600 px-5 rounded-sm py-1 text-white'>{bookingInfo.payment.Status}</span>

                                        </span>
                                    )}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Reservation Date:</h1>
                            <h1 className='max-md:text-[14px]'>{formatDateString(bookingInfo.bookingDate)}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Checked In:</h1>
                            {bookingInfo.isCheckedIn ? <spna className={''}>Checked In</spna> : <span className={'badge_pending'}>Pending</span>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Checked Out:</h1>
                            {bookingInfo.isCheckedOut ? <spna className={''}>Checked Out</spna> : <span className={'badge_pending'}>Pending</span>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Price:</h1>

                            <table className="table table-bordered" style={{ left: "0" }}>
                                <tbody>
                                    <tr>
                                        <td>Amount:</td>
                                        <td>{bookingInfo.price.Principal.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax:</td>
                                        <td>{bookingInfo.price.Tax.toString()}</td>
                                    </tr>
                                    <tr>
                                        <td>Total:</td>
                                        <td>{bookingInfo.price.Total.toString()}</td>
                                    </tr>
                                    {bookingInfo.payment.Status !== "PENDING" ? <tr>
                                        <td>Paid:</td>
                                        <td>{bookingInfo.price.amountPay.toString()}</td>
                                    </tr> : <tr>
                                        <td>Payment:</td>
                                        <td ><strong>PENDING</strong></td>
                                    </tr>}
                                </tbody>
                            </table>
                        </div>

                        <div className='flex items-center justify-end' style={{ cursor: "pointer" }}>
                            {bookingInfo.price.amountPay === bookingInfo.price.Total ? "" : <spna className={'badge_success'} onClick={() => { updateBookingStatus(bookingInfo.bookingId) }} >Full Payment Paid</spna>}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default BookingEditPopup