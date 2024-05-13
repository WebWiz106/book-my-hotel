export const inventoryGetApi = async () => {
    try {
        const res = await fetch("http://127.0.0.1:5000/inventory/getinventory/all/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZjllYzIxNDItNmM0MS00OGRlLWExYjYtNGNlZWY2ZmRjYTc3IiwiaWQiOiIyYjk1Y2UzZi03MTYyLTRhM2QtYTAwNi1jYWIwOGE1OTZlZWEiLCJleHAiOjE3MTYzMTM5MDUuODMzODMyfQ.tC0s_OpewLXE7FsvD4CMY83imShF7d6pxDuK2GPaUzo/95291122");
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
