import React, { useEffect, useState } from 'react'
import { IoRemoveCircleSharp } from 'react-icons/io5';

const EditRoomPopup = ({ setIsEditPopupVisible, selectedRoomDetail }) => {

    const [editInputs, setEditInputs] = useState({
        roomType: "",
        roomName: "",
        roomDescription: "",
        child: "",
        adult: "",
        noOfRooms: "",
        price: "",
        roomImage: []
    })

    const [editSelectedFacilities, setEditSelectedFacilities] = useState([]);
    const [editCurrentFacility, setEditCurrentFacility] = useState('');

    useEffect(() => {
        if (selectedRoomDetail) {
            setEditInputs({
                roomType: selectedRoomDetail.roomType || "",
                roomName: selectedRoomDetail.roomName || "",
                roomDescription: selectedRoomDetail.roomDescription || "",
                child: selectedRoomDetail.child || "",
                adult: selectedRoomDetail.adult || "",
                noOfRooms: selectedRoomDetail.noOfRooms || "",
                price: selectedRoomDetail.price || "",
                roomImage: selectedRoomDetail.roomImage || []
            });
            if (selectedRoomDetail.roomFacilities) {
                const facilities = Object.keys(selectedRoomDetail.roomFacilities).filter(facility => selectedRoomDetail.roomFacilities[facility] === true);
                setEditSelectedFacilities(facilities);
              } else {
                setEditSelectedFacilities([]);
              }
        }
    }, [selectedRoomDetail]);

    console.log(editSelectedFacilities,selectedRoomDetail,editInputs.roomImage);

    const handleEditClosePopup = () => {
        setIsEditPopupVisible(false);
    }

    const handleEditChange = (event) => {
        setEditInputs((prevState) => ({ ...prevState, [event.target.name]: [event.target.value] }))
    }

    const handleImageChange = (index, e) => {
        const newImages = [...editInputs.roomImage];
        newImages[index] = e.target.value;
        setEditInputs((prevInputs) => ({
            ...prevInputs,
            roomImages: newImages
        }));
    };

    const handleAddMoreImage = () => {
        setEditInputs((prevInputs) => ({
            ...prevInputs,
            roomImages: [...prevInputs.roomImage, ""]
        }));
    };

    const handleRemoveImage = (index) => {
        const newImages = editInputs.roomImage.filter((_, i) => i !== index);
        setEditInputs((prevInputs) => ({
            ...prevInputs,
            roomImages: newImages
        }));
    };
    //room facililites
    const handleSelectChange = (e) => {
        setEditCurrentFacility(e.target.value);
    };

    const handleAddFacility = () => {
        if (editCurrentFacility && !editSelectedFacilities.includes(editCurrentFacility)) {
            setEditSelectedFacilities((prevFacilities) => [
                ...prevFacilities,
                editCurrentFacility
            ]);
            setEditCurrentFacility('');
        }
    };

    const handleRemoveFacility = (facility) => {
        setEditSelectedFacilities((prevFacilities) =>
            prevFacilities.filter((f) => f !== facility)
        );
    };


    return (
        <div className="editroompopup z-20 overflow-y-auto flex justify-center items-center border-2 border-black fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded w-[60rem]">
                <div className="flex justify-between items-center">
                    <div></div>
                    <p>Update Details</p>
                    <button onClick={handleEditClosePopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                        Close
                    </button>
                </div>
                <div class="space-y-4 md:space-y-6" action="#">
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <label for="roomName" class="block mb-2 text-sm font-medium ">Type</label>
                            <select value={editInputs.roomName} class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " name="roomType" id="roomType" onChange={handleEditChange}>
                                <option value="1">DELUX</option>
                                <option value="2">SUPER DELUX</option>
                                <option value="3">SUITE</option>
                                <option value="4">PREMIUM</option>
                                <option value="5">PREMIUM RETREAT</option>
                                <option value="6">ELITE SUITE</option>

                            </select>
                            {/* <input onChange={handleChange} value={inputs.roomName} type="text" name="roomName" id="roomName" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Room Name" required="" /> */}
                        </div>
                        <div>
                            <label for="roomName" class="block mb-2 text-sm font-medium ">Room Name</label>
                            <input onChange={handleEditChange} value={editInputs.roomName} type="text" name="roomName" id="roomName" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Room Name" required="" />
                        </div>
                        <div>
                            <label for="price" class="block mb-2 text-sm font-medium ">Price</label>
                            <input onChange={handleEditChange} value={editInputs.price} type="number" name="price" id="price" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Price" required="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <label for="adult" class="block mb-2 text-sm font-medium ">Adult</label>
                            <input onChange={handleEditChange} value={editInputs.adult} type="number" name="adult" id="adult" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Adult Capacity" required="" />
                        </div>
                        <div>
                            <label for="child" class="block mb-2 text-sm font-medium ">Child</label>
                            <input onChange={handleEditChange} value={editInputs.child} type="number" name="child" id="child" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Children Capacity" required="" />
                        </div>
                        <div>
                            <label for="noOfRooms" class="block mb-2 text-sm font-medium ">No Of Rooms</label>
                            <input onChange={handleEditChange} value={editInputs.noOfRooms} type="number" name="noOfRooms" id="noOfRooms" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Number of Rooms" required="" />
                        </div>
                    </div>
                    <div>
                        <label for="roomDescription" class="block mb-2 text-sm font-medium ">Room Description</label>
                        <input value={editInputs.roomDescription} onChange={handleEditChange} type="text" name="roomDescription" id="roomDescription" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Room Description" required="" />
                    </div>
                    <div>
                        <label for="roomImage" class="block mb-2 text-sm font-medium ">Room Images</label>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-2 mb-2'>
                                <input
                                    type="text"
                                    name="roomImage"
                                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Enter Image URL"
                                    onChange={handleImageChange}
                                    required
                                />
                                {editInputs.roomImage.map((input, index) => (
                                    <div className='flex flex-col justify-center gap-1'>
                                        <img src={input} alt="" />
                                        <button
                                            className='border-2 border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white px-2'
                                            onClick={() => handleRemoveImage(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleAddMoreImage} className='h-[41px] w-[8rem] border-2 border-orange-700 text-orange-700 rounded-md hover:bg-orange-700 hover:text-white'>Add More</button>
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
                                    value={editCurrentFacility}
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
                                    {editSelectedFacilities.map((facility, index) => (
                                        <li key={index} value={facility.roomFacilities} className="flex w-[20rem] md:w-[13rem] justify-between items-center bg-gray-50 border border-gray-300 rounded-2xl p-2 mb-1">
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
            </div>
        </div>
    )
}

export default EditRoomPopup