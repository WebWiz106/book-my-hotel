import React from 'react'
import RoomCard from './RoomCard'

const Rooms = ({toggleAccordion}) => {
    return (
        <div className='flex flex-col gap-10'>
            <RoomCard  toggleAccordion={toggleAccordion} />
            {/* <RoomCard /> */}
        </div>
    )
}

export default Rooms