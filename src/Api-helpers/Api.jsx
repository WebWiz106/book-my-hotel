import axios from "axios";
export const inventoryGetApi = async () => {
    try {
        const res = await axios.get("http://127.0.0.1:5000/inventory/getinventory/all/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZjllYzIxNDItNmM0MS00OGRlLWExYjYtNGNlZWY2ZmRjYTc3IiwiaWQiOiIyYjk1Y2UzZi03MTYyLTRhM2QtYTAwNi1jYWIwOGE1OTZlZWEiLCJleHAiOjE3MTg1NTc0ODQuMTI0Mjc5fQ.la20f4IfFiBXOyD_QKFIXrWNfAzdEBSkL4JE72CloAA/95291122")
            .catch((err) => console.log(err));

        const result = await res.data;
        // console.log("result", result);
        return result;
    } catch (err) {
        console.error("Error fetching inventory:", err);
        return null;
    }
}

export const addRoom = async (data) => {
    const res = await axios.post("http://127.0.0.1:5000/rooms/create/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhZDFjZTUtYzY2OC00MzhiLWI0NTItYzBiY2NhZTM3YmNkIiwiaWQiOiIzNWI3MmVjOS0zNzhkLTQ5YjQtYjM0Mi1jYjgyMWYyNWNiNDkiLCJleHAiOjE3MTg3NDg1MzYuMzY5NDA2fQ.ExfaipXOvRhQz3d5dc_p27eSfY_vMDQgejSe-RqIkVk", {
        roomType: 1,
        hId: 95291122,
        roomName: data.roomName,
        isWeekendFormat: false,
        changedPrice: {
            "weekend": 6000,
            "weekday": 6000
        },
        roomDescription: data.roomDescription,
        child: data.child,
        adult: data.adult,
        noOfRooms: data.noOfRooms,
        price: data.price,
        roomImage: data.roomImage,
        roomFacilities: data.roomFacilities,
        roomSubheading:"Balcony with Sea View"
    })

    const result = await res.data;
    return result;
}

export const deleteRoom=async({hId,roomtype})=>{
    const res= await axios.post(`http://127.0.0.1:5000/rooms/delete/${roomtype}`,{
        token:localStorage.getItem("engineUserToken"),
        hId:hId
    })
    const result= res.data;
    return result;
}

