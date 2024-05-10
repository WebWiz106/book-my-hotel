import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoSync } from "react-icons/io5";
import { GiBackwardTime } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import InventoryTable from './Tables/InventoryTable';
import PriceTable from './Tables/PriceTable';


const Mange = () => {
  const [showInventory, setShowInventory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const handleInventoryClick = () => {
    setShowPrice(false);
    setShowInventory(true)
  }
  const handlePriceClick = () => {
    setShowInventory(false)
    setShowPrice(true);
  }

  return (
    <div className='maxwidth px-5 mx-auto mt-4'>
      <div className='flex justify-between'>
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            All
          </button>
          <button onClick={handleInventoryClick} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            Inventory
          </button>
          <button onClick={handlePriceClick} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
            Price
          </button>
        </div>
        <div>
          <button className='px-4 py-2 text-sm font-medium text-blue-400 bg-white border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'><BsThreeDots size={22} /></button>
        </div>
      </div>
      {
        showInventory && <>
          <InventoryTable />
        </>
      }
      {
        showPrice && <>
          <PriceTable />
        </>
      }
      {/* <div className='mt-4'>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 border-2 border-gray-300 rounded-md">
            <thead class="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" class="flex justify-between w-[16rem] h-[64px] px-4 py-2 bg-gray-200">
                  <button className='px-4 py-1 text-sm font-medium text-blue-400 bg-white border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 flex items-center gap-1'><IoSync size={20} />Sync</button>
                  <button className='px-4 py-1 text-sm font-medium text-blue-400 bg-white border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 flex items-center gap-1'><GiBackwardTime size={20} />Logs</button>
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-100 w-full mx-auto text-center border-2 border-gray-300">
                  <input type="date" className="border-2 p-2 px-4 border-black border-opacity-25 rounded-md" /><button><FaArrowLeft /></button><button><FaArrowRight /></button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b-2 border-gray-300">
                <th scope="row" class="px-6 py-4 font-medium text-black  bg-gray-200 whitespace-nowrap w-[16rem]">
                  <span className="text-[2rem] font-bold">Rooms</span>
                </th>
                <td class="w-full flex">
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                  <div className='flex flex-col text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">01</span>
                  </div>
                  <div className='flex flex-col  text-center border-r-2 border-gray-300'>
                    <span>May</span>
                    <span>2024</span>
                    <span>Tue</span>
                    <span className="bg-blue-500 text-white px-6 ">02</span>
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b">
                <th scope="row" class="px-6 font-medium text-black  bg-gray-200  w-[16rem] py-2">
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
              <tr class="bg-white border-t-2 border-gray-300">
                <th scope="row" class="px-6 font-medium text-black  bg-gray-200  w-[16rem] py-2">
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
              <tr class="bg-white border-t-2 border-gray-300">
                <th scope="row" class="px-6 font-medium text-black  bg-gray-200  w-[16rem] py-2">
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
      </div> */}
    </div>
  )
}

export default Mange