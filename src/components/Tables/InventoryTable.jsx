import React, { useState } from 'react'
import { IoSync } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const InventoryTable = () => {

    return (
        <div className='mt-4'>
            <div class="relative overflow-x-auto ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-300">
                    <thead class="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" class="flex justify-between  gap-4 h-[64px] px-4 py-2 bg-gray-200">
                                <button className="px-4 text-sm font-medium  rounded-lg   text-gray-900 bg-white hover:bg-orange-600 hover:text-white flex items-center gap-1">
                                    <IoSync size={20} />Sync</button>
                                <button className="px-4 text-sm font-medium  rounded-lg   text-gray-900 bg-white hover:bg-orange-600 hover:text-white flex items-center gap-1">
                                    <GiBackwardTime size={20} />Logs</button>
                            </th>
                            <th scope="col" class="px-6 py-3 bg-gray-100 w-full mx-auto text-center border-t border-r border-b border-gray-300">
                                <input type="date" className="border p-2 px-4 border-black border-opacity-25 rounded-md" /><button><FaArrowLeft /></button><button><FaArrowRight /></button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-gray-300 flex-grow">
                            <th scope="row" class="px-4 py-4 font-medium text-zinc-700 bg-gray-200 whitespace-nowrap w-[16rem]">
                                <span className="text-[2rem] font-bold">Rooms</span>
                            </th>
                            <td class="w-full flex justify-between">
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                                <div className='flex flex-col text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">01</span>
                                </div>
                                <div className='flex flex-col  text-center border-r border-gray-300'>
                                    <span>May</span>
                                    <span>2024</span>
                                    <span>Tue</span>
                                    <span className="bg-zinc-500 text-white px-6 ">02</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-gray-300">
                            <th scope="row" class="px-4 font-medium text-zinc-700 bg-gray-200  w-[16rem] py-2">
                                <div className="gap-4 flex flex-col">
                                    <span className="font-extrabold text-1xl">Cottages</span>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <CiCirclePlus fontSize={20} fontWeight={500} />
                                            <span className='text-bold'>Inventory</span>
                                        </div>
                                        <div className='ms-7'>
                                            <span className='font-light border-b-2 border-gray-400'>Multi Update</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="w-full flex">
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">1</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">4</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">3</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">8</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">2</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-t border-gray-300">
                            <th scope="row" class="px-4 font-medium text-zinc-700 bg-gray-200  w-[16rem] py-2">
                                <div className="gap-4 flex flex-col">
                                    <span className="font-extrabold text-1xl">Swiss tents</span>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <CiCirclePlus fontSize={20} fontWeight={500} />
                                            <span className='text-bold'>Inventory</span>
                                        </div>
                                        <div className='ms-7'>
                                            <span className='font-light border-b-2 border-gray-400'>Multi Update</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="w-full flex">
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">1</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">4</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">3</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">8</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">2</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                            </td>
                        </tr>
                        <tr class="bg-white border-t border-gray-300">
                            <th scope="row" class="px-4 font-medium text-zinc-700 bg-gray-200  w-[16rem] py-2">
                                <div className="gap-4 flex flex-col">
                                    <span className="font-extrabold text-1xl">family tents</span>
                                    <div>
                                        <div className='flex items-center gap-2'>
                                            <CiCirclePlus fontSize={20} fontWeight={500} />
                                            <span className='text-bold'>Inventory</span>
                                        </div>
                                        <div className='ms-7'>
                                            <span className='font-light border-b-2 border-gray-400'>Multi Update</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="w-full flex">
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">1</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">4</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">3</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">8</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">2</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">6</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                                <div className='flex flex-col justify-end py-2 px-[10px] h-full border-l-2 border-white'>
                                    <span className="bg-green-600 h-[8px] rounded-md mb-[3px] mt-6"></span>
                                    <span className="border-2 border-gray-300 px-4 py-1 rounded-md">5</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InventoryTable