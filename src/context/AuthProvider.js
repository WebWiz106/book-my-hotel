import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {


    const baseUrl = "http://127.0.0.1:5000"
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [isAdmin,setisAdmin] = useState(true)
    const [bookingId,setbookingId] = useState("")
    const [hotelDetails, setHotelDetails] = useState({
        "AboutUs": "About us of booking engine",
        "Clarity": "",
        "Colors": {
            "BackgroundColor": "#311807",
            "BoardColor": "#0A3A75",
            "ButtonColor": "#f78708"
        },
        "Footer": {
            "AboutText": "",
            "Address": "-- address --",
            "City": "-- city --",
            "Email": "-- Email --",
            "Logo": "None",
            "NewsLetterText": "Hi this text is for newsletter",
            "Phone": "-- number --",
            "WhatsApp": "-- alternate number --"
        },
        "Gateway": {
            "API_KEY": "rzp_test_UZ0V9jh3jMC0C9",
            "SECRET_KEY": "XHctZxmnMhzkkwcAlDtF0Xuc",
            "Type": "Razorpay"
        },
        "HotelName": "-- Hotel Name --",
        "Labels": {
            "ConfirmButton": "Book",
            "PayButton": "Pay Now",
            "ReserveBoard": "Reservation Here",
            "ReserveButton": "Look For Rooms"
        },
        "Links": {
            "Facebook": "https://www.facebook.com/testhotel",
            "FacebookRequired": true,
            "Instagram": "https://www.instagram.com/EazyHotel",
            "InstagramRequired": true,
            "Linkedin": "https://www.linkedin.com/EazyHotel",
            "LinkedinRequired": true,
            "Pinterest": "https://www.pinterest.com/EazyHotel",
            "PinterestRequired": true,
            "Reddit": "https://www.reddit.com/EazyHotel",
            "RedditRequired": true,
            "Snapchat": "https://www.snapchat.com/EazyHotel",
            "SnapchatRequired": true,
            "Tripadvisor": "https://www.tripadvisor.com/EazyHotel",
            "TripadvisorRequired": true,
            "Tripadvisors": null,
            "Tumblr": "https://www.tumblr.com/EazyHotel",
            "TumblrRequired": true,
            "Twitter": "https://www.twitter.com/EazyHotel",
            "TwitterRequired": true,
            "Whatsapp": "https://www.whatsapp.com/EazyHotel",
            "WhatsappRequired": true,
            "Youtube": "https://www.youtube.com/EazyHotel",
            "YoutubeRequired": true
        },
        "Location": "https://www.google.com/maps/embed/v1/place?key=AIzaSyB7275VpUoxX56JWDwoISq00bXcq2LSHtI&q=Eazy%20Hotel+addr+State+Dhampur+India",
        "PrivacyPolicy": "Privacy policy",
        "TermsConditions": "TermsConditions policy",
        "addTax": true,
        "isOnlinePayment": true,
        "isPayatHotel": true,
        "isSemiPayment": true
    });

    const [hotelProfile,sethotelProfile] = useState()

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



    const FetchUserExistance = async()=>{
        const response = await fetch(`${baseUrl}/auth/getuser/engine/${localStorage.getItem("engineUserToken")}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
              },
            }
        );
      
        const json = await response.json();
        // console.log(json);
        if(json.Status){
            setisAuthenticated(true)
            if(json.isAdmin){
                setisAdmin(true)
            }
            else{
                setisAdmin(false)
            }
        }
        else{
            setisAuthenticated(false)
            localStorage.clear()
        }
    }

    const FetchProfileOfEngine = async()=>{
        const response = await fetch(`${baseUrl}/bookings/getenginedetails/${localStorage.getItem("hotelid")}/${localStorage.getItem("locationid")}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
              },
            }
        );
      
        const json = await response.json();
        // console.log(json);
        if(json.Status){
            setHotelDetails(json.Details)
            sethotelProfile(json.Profile)
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const hotelid = urlParams.get("hotelid");
        const locationid = urlParams.get("locationid");
        localStorage.setItem("hotelid", hotelid);
        localStorage.setItem("locationid", locationid);

        if(localStorage.getItem("engineUserToken")!==null){
            FetchUserExistance()
        }
        FetchProfileOfEngine()
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
        "1": 0,
        "2": 0,
    })






    // View Selected Room Details
    const [selectedRoomDetails, setSelectedRoomDetails] = useState({});


    // selected Room Price

    const [subTotal, setSubTotal] = useState({})
    const [taxes, setTaxes] = useState("")
    const [grandTotal, setGrandTotals] = useState("");



    const [payment, setpayment] = useState(null);


    const [AllBookings, setAllBookings] = useState([
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

    const FetchAllBookings = async()=>{
        const response = await fetch(`${baseUrl}/bookings/bookings/${localStorage.getItem("engineUserToken")}/${localStorage.getItem("locationid")}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
              },
            }
        );
      
        const json = await response.json();
        // console.log(json);
        if(json.Status){
            setAllBookings(json.Details)
        }
    }

    const [AllRooms,setAllRooms] = useState([])
    const FetchAllRooms = async()=>{
        const response = await fetch(`${baseUrl}/rooms/${localStorage.getItem("engineUserToken")}`,
            {
              method: "GET",
              headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
              },
            }
        );
      
        const json = await response.json();
        // console.log(json);
        if(json.Status){
            setAllRooms(json.data)
        }
    }


    const [bookingPopup, setBookingPopup] = useState(false)

    const [showAll, setShowAll] = useState(false)
    const [showInventory, setShowInventory] = useState(true);
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





                selectedRoomDetails, setSelectedRoomDetails,FetchUserExistance,

                bookingDetails, setBookingDetails, isAuthenticated,isAdmin, setisAuthenticated,

                payment, setpayment, AllBookings, setAllBookings,

                showAll, setShowAll, showInventory, setShowInventory, showPrice, setShowPrice,
                bookingPopup, setBookingPopup,

                baseUrl,hotelProfile,
                FetchProfileOfEngine,bookingId,setbookingId,FetchAllBookings,
                AllRooms,FetchAllRooms
  
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
