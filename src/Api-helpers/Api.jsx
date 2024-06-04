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

