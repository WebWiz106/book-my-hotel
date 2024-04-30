import { createContext, useEffect, useState } from "react";

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





    return (
        <AuthContext.Provider
            value={{
                hotelDetails, setHotelDetails,
                checkForAvailbilityInfo, setCheckForAvailbilityInfo
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
