import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setisAuthenticated] = useState(true)
    const [hotelDetails, setHotelDetails] = useState({
        "hotelName": "Ritz-Carlton Hotel",
        "hotelSlogan": "Stay once, carry memories forever",
        "phone": "9724384753",
        "alternatePhone": "9724384753",
        "hotelEmail": "sam@webjini.com",
        "hotelAddress": "Sultanpur, Lucknow, UttarPradesh",
    });

    const [checkForAvailbilityInfo, setCheckForAvailbilityInfo] = useState({
        "checkin": "",
        "checkout": "",
        "adults": "0",
        "children": "0",
    });



    const [bookingDetails, setBookingDetails] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "request": ""
    })

    useEffect(() => {
        localStorage.setItem("jiniId", "c94fcd4b-2625-4d5c-9177-2b62fbda9fe1");
        localStorage.setItem("hId", "45813642");
    }, []);




    const today = new Date().toISOString().split('T')[0];



    // Get tomorrow's date by adding 1 day to the current date
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    const [currentDate, setCurrentDate] = useState(today)
    const [checkinInDate, setcheckinInDate] = useState(today)
    const [checkoutDate, setcheckoutDate] = useState(tomorrow)
    const [Adults, setAdults] = useState(1)
    const [kids, setkids] = useState(0)
    const [maxAdult, setmaxAdult] = useState({})

    //   login-page-popup

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    // menu-option

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuType, setMenuType] = useState("")

    // Check Availability loader

    const [loading, setLoading] = useState(false)

    const [Rooms, setRooms] = useState([]);
    const [RoomTypeToName, setRoomTypeToName] = useState({})
    const [customPrice, setCustomPrice] = useState({});

    const [isRoomSelected, setisRoomSelected] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState({});


    const [fetchDynamicRoomInventory, setFetchDynamicRoomInventory] = useState({
        "1": 5,
        "2": 3,
    })






    // View Selected Room Details
    const [selectedRoomDetails, setSelectedRoomDetails] = useState({});


    // selected Room Price

    const [subTotal, setSubTotal] = useState({})
    const [taxes, setTaxes] = useState("")
    const [grandTotal, setGrandTotals] = useState("");



    const [payment, setpayment] = useState(null);


    const [AllBookings,setAllBookings] = useState([
        {
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
        }])




    const [showAll, setShowAll] = useState(true)
    const [showInventory, setShowInventory] = useState(false);
    const [showPrice, setShowPrice] = useState(false);



    return (
        <AuthContext.Provider
            value={{
                hotelDetails, setHotelDetails,
                checkForAvailbilityInfo, setCheckForAvailbilityInfo,

                currentDate, setCurrentDate,
                checkinInDate, setcheckinInDate,
                checkoutDate, setcheckoutDate,
                Adults, setAdults,
                kids, setkids,
                Rooms, setRooms,
                customPrice, setCustomPrice,
                isRoomSelected, setisRoomSelected,
                loading, setLoading, selectedRooms, setSelectedRooms,
                fetchDynamicRoomInventory, setFetchDynamicRoomInventory,
                RoomTypeToName, setRoomTypeToName,
                isModalOpen, setIsModalOpen,
                modalType, setModalType,
                isMenuOpen, setIsMenuOpen,
                menuType, setMenuType,

                subTotal, setSubTotal,
                taxes, setTaxes,
                grandTotal, setGrandTotals,
                maxAdult, setmaxAdult,





                selectedRoomDetails, setSelectedRoomDetails,

                bookingDetails, setBookingDetails, isAuthenticated, setisAuthenticated,

                payment, setpayment,AllBookings,setAllBookings

                showAll, setShowAll, showInventory, setShowInventory, showPrice, setShowPrice,



            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
