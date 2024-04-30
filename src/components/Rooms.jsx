import React from 'react'
import RoomCard from './RoomCard'

const Rooms = () => {
    return (
        <div className='flex flex-col gap-10'>
            <RoomCard />
            <RoomCard />
        </div>
    )
}

export default Rooms