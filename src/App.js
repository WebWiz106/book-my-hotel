import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RoomDetails from "./components/RoomDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room-details" element={<RoomDetails />} />


        {/* Wildcard route */}
        <Route path="*" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
