import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthProvider'
import { VscDiffRemoved } from "react-icons/vsc";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { addRoom, deleteRoom } from '../../Api-helpers/Api';
const Booking = () => {

  const { AllRooms, FetchAllRooms } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    roomName: "",
    roomDescription: "",
    child: "",
    adult: "",
    noOfRooms: "",
    price: ""
  })
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [imageInputs, setImageInputs] = useState(['']);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [currentFacility, setCurrentFacility] = useState('');

  const handleAddRoomClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  //To add Images Url
  const handleAddMoreClick = () => {
    setImageInputs([...imageInputs, '']);
  };

  const handleInputChange = (index, event) => {
    const newImageInputs = [...imageInputs];
    newImageInputs[index] = event.target.value;
    setImageInputs(newImageInputs);
  };

  const handleRemoveClick = (index) => {
    const newImageInputs = imageInputs.filter((_, i) => i !== index);
    setImageInputs(newImageInputs);
  };
  //For Room facilities
  const handleSelectChange = (e) => {
    setCurrentFacility(e.target.value);
  };

  const handleAddFacility = () => {
    if (currentFacility && !selectedFacilities.includes(currentFacility)) {
      setSelectedFacilities([...selectedFacilities, currentFacility]);
      setCurrentFacility('');
    }
  };

  const handleRemoveFacility = (facility) => {
    setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
  };

  const handleChange = (event) => {
    setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, imageInputs, selectedFacilities);
    addRoom({ ...inputs, roomImage: imageInputs, roomFacilities: selectedFacilities }).then(res => console.log(res)).catch((err) => console.log(err))
  }

  const handleDelete = ({ hId, roomtype }) => {
    deleteRoom({hId, roomtype}).then((res) => console.log(res)).catch((err) => console.log(err));
  }

  useEffect(() => {
    FetchAllRooms()
  }, [])
  // const roomdata= AllRooms.forEach((data)=>{
  //   const hId= data.hId;
  //   const roomtype= data.roomType
  //   console.log(hId, roomtype)
  // })

  return (
    <div className="maxwidth mx-auto p-4">
      <div className="flex p-2 justify-between border-2 border-black border-opacity-25 rounded-md ">
        <div></div>
        <p className="font-bold text-xl">Your Rooms</p>
        <button onClick={handleAddRoomClick} className="hover:text-orange-600">Add Room</button>
      </div>
      {isPopupVisible && (
        <div className="addroompopup z-20 overflow-y-auto flex justify-center items-center border-2 border-black fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded w-[60rem]">
            <div className="flex justify-between items-center gap-2">
              <div></div>
              <p>Room Details</p>
              <button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Close
              </button>
            </div>
            <div class="space-y-4 md:space-y-6" action="#">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label for="roomName" class="block mb-2 text-sm font-medium ">Room Name</label>
                  <input onChange={handleChange} value={inputs.roomName} type="text" name="roomName" id="roomName" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Room Name" required="" />
                </div>
                <div>
                  <label for="price" class="block mb-2 text-sm font-medium ">Price</label>
                  <input onChange={handleChange} value={inputs.price} type="number" name="price" id="price" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Price" required="" />
                </div>
              </div>
              <div>
                <label for="roomDescription" class="block mb-2 text-sm font-medium ">Room Description</label>
                <input onChange={handleChange} value={inputs.roomDescription} type="text" name="roomDescription" id="roomDescription" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Room Description" required="" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label for="adult" class="block mb-2 text-sm font-medium ">Adult</label>
                  <input onChange={handleChange} value={inputs.adult} type="number" name="adult" id="adult" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Adult Capacity" required="" />
                </div>
                <div>
                  <label for="child" class="block mb-2 text-sm font-medium ">Child</label>
                  <input onChange={handleChange} value={inputs.child} type="number" name="child" id="child" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Children Capacity" required="" />
                </div>
              </div>
              <div>
                <label for="noOfRooms" class="block mb-2 text-sm font-medium ">No Of Rooms</label>
                <input onChange={handleChange} value={inputs.noOfRooms} type="number" name="noOfRooms" id="noOfRooms" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Number of Rooms" required="" />
              </div>
              <div>
                <label for="roomImage" class="block mb-2 text-sm font-medium ">Room Images</label>
                <div className='flex gap-2'>
                  {imageInputs.map((input, index) => (
                    <div key={index} className='flex flex-col gap-2 mb-2'>
                      <input
                        type="text"
                        name="roomImage"
                        id={`roomImage-${index}`}
                        className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Enter Image URL"
                        value={input}
                        onChange={(e) => handleInputChange(index, e)}
                        required
                      />
                      <button
                        className='border-2 border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white px-2'
                        onClick={() => handleRemoveClick(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button onClick={handleAddMoreClick} className='h-[41px] w-[8rem] border-2 border-orange-700 text-orange-700 rounded-md hover:bg-orange-700 hover:text-white'>Add More</button>
                </div>
              </div>
              <div>
                <label htmlFor="roomFacilities" className="block mb-2 text-sm font-medium">
                  Room Facilities
                </label>
                <div className="flex border-2 border-gray-300 p-4 rounded-md flex-col gap-2 mb-2">
                  <div className='flex gap-2 mb-2'>
                    <select
                      name="roomFacilities"
                      id="roomFacilitiesSelect"
                      value={currentFacility}
                      onChange={handleSelectChange}
                      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    >
                      <option value="" disabled>Select a facility</option>
                      <option value="WiFi">WiFi</option>
                      <option value="Air Conditioning">Air Conditioning</option>
                      <option value="Swimming Pool">Swimming Pool</option>
                      <option value="Gym">Gym</option>
                      <option value="Parking">Parking</option>
                      <option value="Spa">Spa</option>
                    </select>
                    <button
                      onClick={handleAddFacility}
                      className="border-2 border-orange-700 text-orange-700 rounded-md hover:bg-orange-700 hover:text-white px-4"
                    >
                      Add
                    </button>
                  </div>
                  <div>
                    <ul className="grid grid-cols-1 md:grid-cols-4 gap-2 list-none p-0">
                      {selectedFacilities.map((facility, index) => (
                        <li key={index} className="flex w-[20rem] md:w-[13rem] justify-between items-center bg-gray-50 border border-gray-300 rounded-2xl p-2 mb-1">
                          <span>{facility}</span>
                          <button
                            onClick={() => handleRemoveFacility(facility)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <IoRemoveCircleSharp size={22} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="button flex gap-2 justify-center mt-4">
              <button
                onClick={handleClosePopup}
                className="border-2 border-orange-700 text-orange-700 rounded-md hover:bg-orange-700 hover:text-white px-4"
              >
                Cancel
              </button>
              <button
                type='submit'
                onClick={handleSubmit}
                className="border-2 border-orange-700 text-orange-700 rounded-md hover:bg-orange-700 hover:text-white px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" mt-2 md:ms-[29.5px] grid grid-cols-1 gap-2 md:grid-cols-2 md:mt-6 cards">
        {AllRooms.map((room) => {
          return <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

            <img class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-48 md:rounded-none md:rounded-s-lg" src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.roomName}</h5>
              <div className='flex flex-col gap-2'>
                <div className="flex justify-between">
                  <p className="text-white">Guest</p>
                  <p className='text-white'><span>Aduls: </span>{room.adult} <span>Child: </span>{room.child}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-white">Price: </p>
                  <p className="text-white">{room.price}</p>
                </div>
                <div className="flex justify-between">
                  <button className='text-white px-6 border-2 border-white rounded-md hover:bg-white hover:text-black'>Edit</button>
                  <button onClick={() => handleDelete({ hId: room.hId, roomtype: room.roomType })} className='text-white px-6 border-2 border-white rounded-md hover:bg-white hover:text-black'>Delete</button>
                </div>
              </div>
            </div>
          </a>
        })}

      </div>
    </div>
  )
}

export default Booking