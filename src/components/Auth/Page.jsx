import React, { useState } from 'react'

const Page = ({ modalType, closeModal }) => {
    console.log(modalType, closeModal);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-4 flex justify-center">{modalType === "login" ? "Login" : "Signup"}</h2>
                {modalType === "login" &&
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Email or Phone" className="md:w-[560px] border-2 border-opacity-50 hover:border-gray-500 rounded-md p-2" />
                        <input type="password" placeholder="Password" className="md:w-[560px] border-2 border-opacity-50 hover:border-gray-500 rounded-md p-2" />
                    </div>}
                {modalType === "signup" &&
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder='Username' className="md:w-[560px] border-2 border-opacity-50 hover:border-gray-500 rounded-md p-2" />
                        <input type="text" placeholder="Email" className="md:w-[560px] border-2 border-opacity-50 hover:border-gray-500 rounded-md p-2" />
                        <input type="text" placeholder="phone" className="md:w-[560px] border-2 border-opacity-50 hover:border-gray-500 rounded-md p-2" />
                    </div>}
                <button onClick={closeModal} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700">{modalType === "login" ? "Login" : "Signup"}</button>
            </div>
        </div>
    )
}

export default Page