import { createContext, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {


    const [hotelDetails, setHotelDetails] = useState({
        "hotelName": "Ritz-Carlton Hotel",
        "hotelSlogan": "Stay once, carry memories forever",
        "phone": "9528295631",
        "alternatePhone": "9528295631",
        "hotelEmail": "abhijeet@webjini.com",
        "hotelAddress": "Sultanpur, Lucknow, UttarPradesh",
    });

    const [checkForAvailbilityInfo, setCheckForAvailbilityInfo] = useState({
        "checkin": "",
        "checkout": "",
        "adults": "0",
        "children": "0",
    });

    const today = new Date().toISOString().split('T')[0];

    // Get tomorrow's date by adding 1 day to the current date
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrow = tomorrowDate.toISOString().split('T')[0];

    const [checkinInDate,setcheckinInDate] = useState(today)
    const [checkoutDate,setcheckoutDate] = useState(tomorrow)
    const [Adults,setAdults] = useState(1)
    const [kids,setkids] = useState(0)

    const [Rooms,setRooms] = useState([])
    const [isRoomSelected,setisRoomSelected] = useState(false)





    return (
        <AuthContext.Provider
            value={{
                hotelDetails, setHotelDetails,
                checkForAvailbilityInfo, setCheckForAvailbilityInfo,

                checkinInDate,setcheckinInDate,
                checkoutDate,setcheckoutDate,
                Adults,setAdults,
                kids,setkids,
                Rooms,setRooms,
                isRoomSelected,setisRoomSelected
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
