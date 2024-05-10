import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomDetails from "./components/RoomDetails";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import Mange from "./components/Mange";
import Room from "./components/Room";
import AllBookings from "./components/AllBookings";
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";
import Success from "./components/Success";

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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Bookings" element={<Booking />} />
        <Route path="/All Bookings" element={<AllBookings />} />
        <Route path="/Manage" element={<Mange />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Success" element={<Success />} />

        {/* Wildcard route */}
        <Route path="*" element={<Home />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
