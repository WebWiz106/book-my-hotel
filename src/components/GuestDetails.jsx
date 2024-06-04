import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; // import css file from root.
import useRazorpay from "react-razorpay";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

import { useNavigate } from 'react-router-dom';
const GuestDetails = () => {

    const { subTotal,baseUrl } = useContext(AuthContext)


    // console.log(subTotal)


    return (
        <div >
            <div className="justify-center items-start px-2 md:px-4 py-3.5 w-full text-lg text-white bg-zinc-700 rounded-t-lg ">
                Guest Details
            </div>
            <div className='flex flex-col md:flex-row '>
                <div className='w-full md:w-[50%] lg:w-[40%] md:order-2'>
                    <BookingDetails />
                </div>
                <div className='w-full md:w-[50%] lg:w-[60%]'>
                    <Guest />

                </div>

            </div>
        </div>

    )
}


const Guest = () => {
    const { grandTotal, bookingDetails, setBookingDetails,subTotal,

        setpayment,baseUrl,taxes,checkinInDate,
        checkoutDate,hotelProfile,selectedRooms,
        selectedRoomDetails,Adults,
        kids
    } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState("option3");

    const navigate = useNavigate();




    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [Razorpay, createOrder] = useRazorpay();
    const computeTotalPrice = () => {
        let totalPrice = 0;
       
        // Iterate over keys in the dictionary
        for (let key in subTotal) {
            // Convert the value to a number and add it to totalPrice
            totalPrice += parseInt(subTotal[key]);
        }

        
        return totalPrice;
    }


    const CreateSemiHalfBooking = async() => {
        if (bookingDetails.name.length > 0 && bookingDetails.email.length > 0 && bookingDetails.phone.length > 0) {
            const bookedRooms = [];

            for (let  i = 0; i < Object.keys(selectedRooms).length; ++i) {
                const temp = {
                    RoomType: Object.keys(selectedRooms)[i],
                    Qty: Object.values(selectedRooms)[i]
                }
                bookedRooms.push(temp);
            }
            setpayment(0.25)
            const response = await fetch(`${baseUrl}/order/create_order`, {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  "roomNumbers": [],
                  "hId": localStorage.getItem("locationid"),
                  "jiniId": localStorage.getItem("hotelid"),
                  "amount": 0.25 * grandTotal,
                  "currency": hotelProfile.currency,
                  "guestInfo": {
                        guestName: bookingDetails.name,
                        EmailId: bookingDetails.email,
                        Phone: bookingDetails.phone,
                        Requests: bookingDetails.request
                    },
                  "Adults": Adults,
                  "Kids": kids,
                  "Bookings": bookedRooms,
                  "payment": {
                    Status: "PENDING",
                    RefNo: "",
                    PaymentProvider: "RazorPay",
                    Mode: "Online",
                  },
                  "mealPlan": {
                    PackageId: "NA",
                    PackageName: "NA",
                    PackagePrice: "NA",
                    PackageperRoom: "NA",
                  },
                  "promocode": {
                    PromoId: "NA",
                    Code: "NA",
                    Discount: "NA",
                  },
                  "packages": {
                    packageId: "NA",
                    packageName: "NA",
                    packagePrice: "NA",
                    specialRequest: "NA",
                  },
                  "checkIn": checkinInDate,
                  "checkOut": checkoutDate,
                  "price": {
                    amountPay: 0.25 * grandTotal,
                    Principal: computeTotalPrice(),
                    Tax: taxes,
                    Total: grandTotal,
                  },
                  "isCheckedIn": false,
                  "isCheckedOut": false
                 }),
             });

            const bookingResponse = await response.json()
            console.log(bookingResponse)
          
            //   const json = await response.json();
            toast.success(`Initiating Booking with ${bookingResponse.order_id}`);

        }

        else {
            toast.warning("Please fill your details")
        }
    }
    const CreateHalfBooking = async() => {

        if (bookingDetails.name.length > 0 && bookingDetails.email.length > 0 && bookingDetails.phone.length > 0) {
            const bookedRooms = [];

            for (let  i = 0; i < Object.keys(selectedRooms).length; ++i) {
                const temp = {
                    RoomType: Object.keys(selectedRooms)[i],
                    Qty: Object.values(selectedRooms)[i]
                }
                bookedRooms.push(temp);
            }
            setpayment(0.50)
            const response = await fetch(`${baseUrl}/order/create_order`, {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  "roomNumbers": [],
                  "hId": localStorage.getItem("locationid"),
                  "jiniId": localStorage.getItem("hotelid"),
                  "amount": 0.5 * grandTotal,
                  "currency": hotelProfile.currency,
                  "guestInfo": {
                        guestName: bookingDetails.name,
                        EmailId: bookingDetails.email,
                        Phone: bookingDetails.phone,
                        Requests: bookingDetails.request
                    },
                  "Adults": Adults,
                  "Kids": kids,
                  "Bookings": bookedRooms,
                  "payment": {
                    Status: "PENDING",
                    RefNo: "",
                    PaymentProvider: "RazorPay",
                    Mode: "Online",
                  },
                  "mealPlan": {
                    PackageId: "NA",
                    PackageName: "NA",
                    PackagePrice: "NA",
                    PackageperRoom: "NA",
                  },
                  "promocode": {
                    PromoId: "NA",
                    Code: "NA",
                    Discount: "NA",
                  },
                  "packages": {
                    packageId: "NA",
                    packageName: "NA",
                    packagePrice: "NA",
                    specialRequest: "NA",
                  },
                  "checkIn": checkinInDate,
                  "checkOut": checkoutDate,
                  "price": {
                    amountPay: 0.5 * grandTotal,
                    Principal: computeTotalPrice(),
                    Tax: taxes,
                    Total: grandTotal,
                  },
                  "isCheckedIn": false,
                  "isCheckedOut": false
                 }),
             });

            const bookingResponse = await response.json()
            console.log(bookingResponse)
          
            toast.success(`Initiating Booking with ${bookingResponse.order_id}`);

        }

        else {
            toast.warning("Please fill your details")
        }
    }
    const CreateFullBooking = async() => {
        if (bookingDetails.name.length > 0 && bookingDetails.email.length > 0 && bookingDetails.phone.length > 0) {
            const bookedRooms = [];

            for (let  i = 0; i < Object.keys(selectedRooms).length; ++i) {
                const temp = {
                    RoomType: Object.keys(selectedRooms)[i],
                    Qty: Object.values(selectedRooms)[i]
                }
                bookedRooms.push(temp);
            }
            setpayment(1)
            const response = await fetch(`${baseUrl}/order/create_order`, {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  "roomNumbers": [],
                  "hId": localStorage.getItem("locationid"),
                  "jiniId": localStorage.getItem("hotelid"),
                  "amount": 1 * grandTotal,
                  "currency": hotelProfile.currency,
                  "guestInfo": {
                        guestName: bookingDetails.name,
                        EmailId: bookingDetails.email,
                        Phone: bookingDetails.phone,
                        Requests: bookingDetails.request
                    },
                  "Adults": Adults,
                  "Kids": kids,
                  "Bookings": bookedRooms,
                  "payment": {
                    Status: "PENDING",
                    RefNo: "",
                    PaymentProvider: "RazorPay",
                    Mode: "Online",
                  },
                  "mealPlan": {
                    PackageId: "NA",
                    PackageName: "NA",
                    PackagePrice: "NA",
                    PackageperRoom: "NA",
                  },
                  "promocode": {
                    PromoId: "NA",
                    Code: "NA",
                    Discount: "NA",
                  },
                  "packages": {
                    packageId: "NA",
                    packageName: "NA",
                    packagePrice: "NA",
                    specialRequest: "NA",
                  },
                  "checkIn": checkinInDate,
                  "checkOut": checkoutDate,
                  "price": {
                    amountPay: 1 * grandTotal,
                    Principal: computeTotalPrice(),
                    Tax: taxes,
                    Total: grandTotal,
                  },
                  "isCheckedIn": false,
                  "isCheckedOut": false
                 }),
             });

            const bookingResponse = await response.json()
            console.log(bookingResponse)
            // alert(bookingResponse.order_id)
          
            //   const json = await response.json();
            toast.success(`Initiating Booking with ${bookingResponse.order_id}`);

        }

        else {
            toast.warning("Please fill your details")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setBookingDetails({ ...bookingDetails, [name]: value });

    }

    const HandlePaymentRazorpay = (orderID, amnt, status) => {
        navigate('/Success')
        // alert('Payment')
        // try {
        //   // alert(props.GatewayConnected)
        //   const mockOrderData = {
        //     amount: parseInt(Number(amnt)) * 100, // Convert amount to paise (assuming INR)
        //     orderId: "98032028092", // Generate a unique order ID
        //   };

        //   const options = {
        //     key: GatewayConnected.API_KEY, // Enter the Key ID generated from the Dashboard rzp_test_UZ0V9jh3jMC0C9,rzp_live_5uaIIwZcxLC70j
        //     amount: mockOrderData.amount.toString(), // Use the amount from the order data
        //     currency: currency,
        //     name: HotelName,
        //     description: "Test Transaction",
        //     image: websiteData?.Footer?.Logo,
        //     order_id: OrderId, // Use the order ID from the order data
        //     handler: async function (response) {
        //       setOrderId(response.razorpay_order_id);
        //       UpdateBooking(orderID, response.razorpay_payment_id, status);
        //       setPayment({
        //         Status: true,
        //         Logo: websiteData?.Footer?.Logo,
        //         HotelName: HotelName,
        //         Order: orderID,
        //         Payment: response.razorpay_payment_id,
        //         Name: Name,
        //         Phone: Phone,
        //         Email: Email,
        //         City: "",
        //         Country: "",
        //         Checkin: selectedDate,
        //         Checkout: nextselectedDate,
        //         Adult: Adult,
        //         Kid: kids,
        //         Tax: tax,
        //         Total: Subtotal,
        //         Grandtotal: Grandtotal,
        //         Paid: amnt,
        //         PayStatus: status,
        //         Delux: Delux,
        //         Sd: SuperDelux,
        //         Suite: Suite,
        //         Premium: Premium,
        //         PremiereRetreat: PremiereRetreat,
        //         EliteSuite: EliteSuite,
        //         GrandDeluxe: GrandDeluxe,
        //         ImperialSuite: ImperialSuite,
        //         SupremeRetreat: SupremeRetreat,
        //         RoyalDeluxe: RoyalDeluxe,
        //         PrestigeSuite: PrestigeSuite,
        //         ExclusiveRetreat: ExclusiveRetreat,
        //         MealPlan: "",
        //         Mealprice: "",
        //         Rooms: RoomCategoryCombination,
        //       });
        //     },

        //     theme: {
        //       color: "#978667",
        //     },
        //   };

        //   const rzp1 = new Razorpay(options);

        //   rzp1.on("payment.failed", function (response) {
        //     alert(response.error.code);
        //     alert(response.error.description);
        //     alert(response.error.source);
        //     alert(response.error.step);
        //     alert(response.error.reason);
        //     alert(response.error.metadata.order_id);
        //     alert(response.error.metadata.payment_id);
        //   });

        //   rzp1.open();
        // } catch (error) {
        //   console.log("Payment Error:", error);
        // }
    }
    return (
        <div className='w-full'>
            <ToastContainer floatingTime={5000} />

            <div className="flex flex-col gap-2 px-0 md:px-5 py-3 text-sm leading-6  text-neutral-400">

                <div className='w-full'>
                    <input
                        placeholder='Name*'
                        required
                        name='name'
                        value={bookingDetails.name}
                        onChange={handleChange}
                        className=" outline-none w-full justify-center items-start px-5  text-neutral-700 py-3 whitespace-nowrap bg-white rounded-md border" />

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <input
                        placeholder='Email*'
                        name='email'
                        value={bookingDetails.email}
                        onChange={handleChange}
                        required
                        className=" outline-none justify-center items-start px-5 py-3  text-neutral-700 whitespace-nowrap bg-white rounded-md border" />

                    <input
                        placeholder='Phone Number*'
                        name='phone'
                        value={bookingDetails.phone}
                        onChange={handleChange}
                        required
                        className=" outline-none justify-center items-start px-5  text-neutral-700 py-3 whitespace-nowrap bg-white rounded-md border" />

                </div>
                <div>
                    <textarea
                        placeholder='Special Request'
                        name='request'
                        value={bookingDetails.request}
                        onChange={handleChange}
                        className=" outline-none w-full h-[75px] justify-center  text-neutral-700 items-start px-5 py-3 whitespace-nowrap bg-white rounded-md border" />

                </div>

                <div className='flex flex-col gap-5  text-neutral-700 bg-white rounded-md mt-2 border px-5 py-4 md:px-5 hover:border-blue-400 cursor-pointer'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex gap-2 items-center' htmlFor="option1">
                            <input
                                type="radio"
                                id="option1"
                                name="option"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleOptionChange} />
                            <label htmlFor="option1" className='text-[16px] font-semibold'>I prefer to pay 25% now</label>
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <div>Pay Now</div>
                                <div className='text-[20px] text-[#05db5c] font-semibold'>₹ {0.25 * grandTotal}</div>
                            </div>
                            <div className=' flex justify-between'>
                                <div>Pay later</div>
                                <div>₹ {grandTotal - 0.25 * grandTotal}</div>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex gap-2 items-center' htmlFor="option2">
                            <input
                                type="radio"
                                id="option2"
                                name="option"
                                value="option2"
                                checked={selectedOption === "option2"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option2" className='text-[16px] font-semibold'>I prefer to pay 50% now</label>
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <div>Pay Now</div>
                                <div className='text-[20px] text-[#05db5c] font-semibold'>₹ {0.50 * grandTotal}</div>
                            </div>
                            <div className=' flex justify-between'>
                                <div>Pay later</div>
                                <div>₹ {grandTotal - 0.50 * grandTotal}</div>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
                        <div className='flex gap-2 items-center' htmlFor="option3">
                            <input
                                type="radio"
                                id="option3"
                                name="option"
                                value="option3"
                                checked={selectedOption === "option3"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option3" className='text-[16px] font-semibold'>I prefer to pay 100% now</label>
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <div>Pay Now</div>
                                <div className='text-[20px] text-[#05db5c] font-semibold'>₹ {grandTotal}</div>
                            </div>
                            <div className=' flex justify-between'>
                                <div>Pay later</div>
                                <div>₹ {grandTotal - grandTotal}</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center py-2 px-5 text-neutral-700'>
                    <div className='text-[#05db5c]'>Secure your stay before the prices change!</div>
                    <div className=''>By completing this reservation you are accepting our <Link to="" className="text-blue-900">Terms & Conditions</Link></div>

                    {selectedOption === "option1" ?

                        <button onClick={CreateSemiHalfBooking} className='text-center mt-2 justify-center items-center px-24 py-2 text-white  bg-orange-600 hover:bg-orange-700 rounded-md max-md:px-5 text-[18px]'>Book Now</button>
                        :
                        selectedOption === "option2" ? <button onClick={CreateHalfBooking} className='text-center mt-2 justify-center items-center px-24 py-2 text-white  bg-orange-600 hover:bg-orange-700 rounded-md max-md:px-5 text-[18px]'>Book Now</button>
                            :
                            <button onClick={CreateFullBooking} className='text-center mt-2 justify-center items-center px-24 py-2 text-white  bg-orange-600 hover:bg-orange-700 rounded-md max-md:px-5 text-[18px]'>Book Now</button>
                    }
                </div>
            </div>
        </div>
    )
}


const BookingDetails = () => {




    const { Rooms, setRooms, checkinInDate,
        checkoutDate,
        Adults,
        kids, isRoomSelected, setisRoomSelected, selectedRooms, RoomTypeToName } = useContext(AuthContext);
    const { subTotal, taxes, setTaxes, grandTotal, setGrandTotals } = useContext(AuthContext)
    const [numberOfNights, setNumberOfNights] = useState(0);



    const computeTotalPrice = () => {
        let totalPrice = 0;
       
        // Iterate over keys in the dictionary
        for (let key in subTotal) {
            // Convert the value to a number and add it to totalPrice
            totalPrice += parseInt(subTotal[key]);
        }
        setTaxes(0.18 * totalPrice)
        setGrandTotals(0.18 * totalPrice + totalPrice)

        console.log(totalPrice)
        return totalPrice;
    }




    function formatDate(inputDate) {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        const dateParts = inputDate.split('-');
        const year = dateParts[0].slice(2);
        const monthIndex = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);

        const formattedDate = `${day} ${months[monthIndex]}'${year}`;

        return formattedDate;
    }

    function handleCalculateNumberOfNights(checkinInDate, checkoutDate) {
        const checkin = new Date(checkinInDate);
        const checkout = new Date(checkoutDate);
        const differenceInTime = checkout.getTime() - checkin.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays;
    }

    return (
        <div className=''>

            <div className="flex flex-col gap-5 py-3 text-sm leading-6  text-neutral-700">
                <div className='grid grid-cols-1 md:grid-cols-2 px-5 '>
                    <div className='max-md:flex max-md:items-center max-md:justify-between'>
                        <div>Check In</div>
                        <div className='text-[18px]  font-[500]'>{formatDate(checkinInDate)}</div>
                    </div>
                    <div className='max-md:flex max-md:items-center max-md:justify-between max-md:mt-5'>
                        <div>Check Out</div>
                        <div className='text-[18px]  font-[500]'>{formatDate(checkoutDate)}</div>
                    </div>
                </div>

                <div className=' flex justify-between  px-5 '>
                    <div>No of Nights</div>
                    <div className='text-[16px] '>{handleCalculateNumberOfNights(checkinInDate, checkoutDate)} Night</div>
                </div>
                <div className='flex justify-between px-5 '>
                    <div>Room</div>
                    <div className='flex flex-col items-end'>


                        {Object.keys(selectedRooms).map((key) => {
                            const roomLabel = RoomTypeToName[key] || `Room-${key}`; // Use the label from RoomLabels if available, otherwise use a default label
                            return (

                                <div key={key}>
                                    <p className='text-[16px]'>{roomLabel}:- {selectedRooms[key]} rooms {""}</p>
                                </div>
                            );
                        })}


                    </div>
                </div>
                <div className=' flex justify-between  px-5'>
                    <div>Guest</div>
                    <div className='text-[16px]'>{Adults} Adults, {kids} Kids</div>
                </div>
                <div className='flex flex-col gap-4 h-[100%] border rounded-md p-5 bg-white'>
                    {/* <div className='flex justify-between'>
                        <div className='flex items-start gap-1'>
                            <IoMdCheckmarkCircle size={20} className='text-zinc-700 mt-[3px]' />
                            <div >Rooms only</div>
                        </div>
                        <div>
                            <div className='text-[16px]'>INR 45678</div>
                        </div>
                    </div> */}

                    {/* <div className=' flex justify-between'>
                        <div>{formatDate(checkinInDate)}</div>
                        <div className='text-[14px]'>₹price</div>
                    </div> */}
                    <div className=' flex justify-between'>
                        <div>Sub Total</div>
                        <div className='text-[16px]' >₹ {computeTotalPrice()}</div>
                    </div>
                    <div className=' flex justify-between'>
                        <div>Taxes and Fees</div>
                        <div className='text-[16px]'>₹ {taxes}</div>
                    </div>
                    <hr class="h-px my-2 bg-zinc-400 border-0"></hr>

                    <div className=' flex justify-between'>
                        <div className='text-[18px] font-medium'>Grand Total</div>
                        <div className='text-[24px] font-semibold'>₹ {grandTotal}</div>
                    </div>
                    <p className='text-center'>You are saving <span className='text-[#05db5c]'>INR {0.20 * grandTotal}</span>  on this deal!</p>
                </div>
            </div>

        </div>
    )
}



export default GuestDetails





