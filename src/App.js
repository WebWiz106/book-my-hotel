import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthProvider"

import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./pages/Home.jsx"
import RoomDetails from "./components/Rooms/RoomDetails.jsx"
import Profile from "./components/Profile/Profile.jsx"
import Booking from "./components/Bookings/Booking.jsx"
import AllBookings from "./components/AllBookings/AllBookings.jsx"
import BookingManage from "./components/BookingManage/Mange.jsx"
import Room from "./components/Rooms/Room.jsx"
import Success from "./components/Success/Success.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  const { setIsMenuOpen } = useContext(AuthContext);

  const handleBlur = () => {
    setIsMenuOpen(false)
  }
  return (
    <div onBlur={handleBlur}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/all-bookings" element={<AllBookings />} />
        <Route path="/manage" element={<BookingManage />} />
        <Route path="/room" element={<Room />} />
        <Route path="/success" element={<Success />} />

        {/* Wildcard route */}
        <Route path="*" element={<Home />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
