import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import AuthContext from '../../context/AuthProvider';


const BookingEditPopup = () => {

    const { setBookingPopup } = useContext(AuthContext)

    const bookingInfo = {
        "Adults": "1",
        "Bookings": [
            {
                "Qty": 1,
                "RoomType": "1"
            },
            {
                "Qty": 0,
                "RoomType": "2"
            },
            {
                "Qty": 0,
                "RoomType": "3"
            },
            {
                "Qty": 0,
                "RoomType": "4"
            },
            {
                "Qty": 0,
                "RoomType": "5"
            },
            {
                "Qty": 0,
                "RoomType": "6"
            },
            {
                "Qty": 0,
                "RoomType": "7"
            },
            {
                "Qty": 0,
                "RoomType": "8"
            },
            {
                "Qty": 0,
                "RoomType": "9"
            },
            {
                "Qty": 0,
                "RoomType": "10"
            },
            {
                "Qty": 0,
                "RoomType": "11"
            },
            {
                "Qty": 0,
                "RoomType": "12"
            }
        ],
        "Kids": "0",
        "_id": {
            "$oid": "65d13267b3792b168ae21c67"
        },
        "bookingDate": "2024-02-18 03:55:43.453692",
        "bookingId": "B2024021800001",
        "checkIn": "2024-03-04",
        "checkOut": "2024-03-05",
        "guestInfo": {
            "City": "Dhampur",
            "Country": {
                "label": "India",
                "value": "IN"
            },
            "EmailId": "test@gmail.com",
            "Phone": "+919119059286",
            "address": "Dhampur",
            "guestName": "Divyanshu Sharma"
        },
        "hId": "56369483",
        "isCheckedIn": false,
        "isCheckedOut": false,
        "mealPlan": {
            "PackageId": "",
            "PackageName": "",
            "PackagePrice": 0,
            "PackageType": null
        },
        "ndid": "e3854af8-e62b-4fab-8236-2f6dbf3660a2",
        "packages": {
            "packageId": "NA",
            "packageName": "NA",
            "packagePrice": "NA",
            "specialRequest": "NA"
        },
        "payment": {
            "Mode": "Online",
            "PaymentProvider": "RazorPay",
            "RefNo": "NE2wdHDZVunnTeh6dzBTTR",
            "Status": "SUCCESS",
            "payId": "USER DASHBOARD"
        },
        "price": {
            "Principal": 5800,
            "Tax": 1044,
            "Total": 6844,
            "amountPay": 6844
        },
        "promocode": {
            "Code": "NA",
            "Discount": "NA",
            "PromoId": "NA"
        },
        "roomNumbers": [
            "101"
        ]
    }


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




    return (
        <div className='fixed max-md:overflow-auto top-0 left-0 z-10 max-md:pb-[4rem] w-full h-full max-md:h-[100%] max-md:px-5 flex justify-center items-center  bg-[#000000A6]'>
            <div className=" flex max-md:overflow-scroll max-md:mt-[100%]  flex-col items-center max-md:h-[auto] py-3 px-3 bg-white rounded-2xl max-md:w-full max-w-[786px] lg:w-[786px]">
                <div className='flex w-full justify-end'>
                    <RxCross2 style={{ cursor: "pointer" }} size={24} onClick={handleBookingCloseClick} color='#333333' />
                </div>
                <div className='w-full'>
                    <h1 className='heading  !text-center'>Booking ID: {bookingInfo.sportBookingId}</h1>
                </div>
                <div className='grid grid-cols-2 w-full gap-10 max-md:grid-cols-1 max-md:gap-5 mt-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Payment Id:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.payment.payId}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Guest Name:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.Name}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Email:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.Email}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Phone:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.guestInfo.Phone}</h1>
                        </div>

                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Payment Id:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.payment.payId}</h1>
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
                                    <span className='badge_pending'>{bookingInfo.payment.Status}</span>
                                ) : bookingInfo.payment.Status === "ADVANCED" ? <span className='badge_advance'>{bookingInfo.payment.Status}</span> :
                                    bookingInfo.payment.Status === "CANCELLED" ? <span className='badge_cancelled'>{bookingInfo.payment.Status}</span> : (
                                        <span>
                                            <span className='badge_success'>{bookingInfo.payment.Status}</span>

                                        </span>
                                    )}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Reservation Date:</h1>
                            <h1 className='max-md:text-[14px]'>{bookingInfo.bookingDate}</h1>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Checked In:</h1>
                            {bookingInfo.isCheckedIn ? <spna className={'badge_success'}>Checked In</spna> : <span className={'badge_pending'}>Pending</span>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[18px] max-md:text-[16px]'>Checked Out:</h1>
                            {bookingInfo.isCheckedOut ? <spna className={'badge_success'}>Checked Out</spna> : <span className={'badge_pending'}>Pending</span>}
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

                        {/* <div className='flex items-center justify-end' style={{cursor:"pointer"}}>
                            {bookingInfo.payment.Status === "PENDING" || bookingInfo.payment.Status === "ADVANCED" ? <spna className={'badge_success'} onClick={()=>{PaidBookingFun(bookingInfo.sportBookingId,bookingInfo.payment.RefNo)}}>Full Payment Paid</spna> : ""}
                        </div> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default BookingEditPopup