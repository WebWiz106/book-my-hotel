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

                payment, setpayment,

                showAll, setShowAll, showInventory, setShowInventory, showPrice, setShowPrice,



            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
