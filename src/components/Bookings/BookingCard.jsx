import React from 'react'

const BookingCard = () => {
    return (
        <div className='w-full'>
            <a href="#" class="flex flex-col w-full items-center bg-neutral-200 border border-gray-200 rounded-lg shadow md:flex-row">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-[12rem] md:w-[40%] md:rounded-none md:rounded-s-lg" src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-zinc-700">Noteworthy technology acquisitions 2021</h5>
                    <div className='flex flex-col gap-2'>
                        <div className="flex justify-between">
                            <p className="">Customer Name</p>
                            <p className=''><span>Aduls: </span>2 <span>Child: </span>2</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Check In: </p>
                            <p className="">10 may 2021</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="">Check out: </p>
                            <p className="">12 may 2021</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BookingCard