import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import CheckForAvailbility from './CheckForAvailbility';
import GuestDetails from './GuestDetails';
import Rooms1 from '../Rooms/Rooms';

const Accordian = () => {
    const [openAccordion, setOpenAccordion] = useState(1);
    const [filledData, setFilledData] = useState(true)




    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };



    return (
        <div id="accordion-collapse" data-accordion="collapse">
            <AccordionItem
                index={1}
                heading="Check for Availability"
                content=<CheckForAvailbility toggleAccordion={toggleAccordion} />
                isOpen={openAccordion === 1}
                toggleAccordion={toggleAccordion}
                filledData={filledData}

            />
            <AccordionItem
                index={2}
                heading="Select Rooms"
                content=<Rooms1 toggleAccordion={toggleAccordion} />
                isOpen={openAccordion === 2}
                toggleAccordion={toggleAccordion}
                filledData={filledData}
            />
            <AccordionItem
                index={3}
                heading="Guest Details"
                content=<GuestDetails />
                isOpen={openAccordion === 3}
                toggleAccordion={toggleAccordion}
                filledData={filledData}
            />
        </div>
    );
};

const AccordionItem = ({ index, heading, content, isOpen, toggleAccordion, filledData }) => {
    const { Rooms, setRooms, checkinInDate,
        checkoutDate,
        Adults,
        kids, isRoomSelected, setisRoomSelected, selectedRooms, RoomTypeToName } = useContext(AuthContext);

    // console.log("line -57 ", selectedRooms)

    function formatDate(inputDate) {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        const dateParts = inputDate.split('-');
        const year = dateParts[0].slice(2);
        const monthIndex = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);

        const formattedDate = `${day} ${months[monthIndex]}'${year}`;

        return formattedDate;
    }

    return (
        <div className='mb-3'>
            {Rooms.length == 0 ?
                <h2 className={`${isOpen && index === 3 ? 'hidden' : ''}`} id={`accordion-collapse-heading-${index}`}>
                    <button
                        type="button"
                        className={`flex items-center justify-between px-4 py-3.5 w-full text-lg text-white bg-zinc-700 ${isOpen ? "rounded-t-lg" : "rounded-lg"}   gap-3`}
                        // onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                        aria-controls={`accordion-collapse-body-${index}`}
                    >
                        <span>{heading}</span>
                        <svg
                            data-accordion-icon
                            className={`w-3 h-3 ${isOpen ? "rotate-0" : "rotate-180"} shrink-0`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                :
                <h2 className={`${isOpen && index === 3 ? 'hidden' : ''}`} id={`accordion-collapse-heading-${index}`}>
                    {index === 1 ?
                        <button
                            type="button"
                            className={`flex md:items-center justify-between w-full text-lg text-white bg-zinc-700 ${isOpen ? "rounded-t-lg" : "rounded-lg"}   gap-3`}

                            aria-expanded={isOpen}
                            aria-controls={`accordion-collapse-body-${index}`}
                        >
                            <div className="flex gap-5 justify-between md:px-5 py-2.5 text-white rounded-xl bg-zinc-700 w-full max-md:flex-wrap max-md:px-5">
                                <div className="flex gap-2 justify-between my-auto text-base">
                                    <div className="gap-0 max-md:text-start">{formatDate(checkinInDate)} - {formatDate(checkoutDate)}</div>
                                    <div>|</div>
                                    <div className="gap-0 ">{Adults} Adults, {kids} Kids</div>
                                </div>
                                <button onClick={() => toggleAccordion(index)} className="flex gap-2 px-3 py-1 text-lg whitespace-nowrap rounded-md border border-white border-solid">
                                    <img
                                        loading="lazy"
                                        alt='modify'
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e48dbf3b36320b30e8d9a52ac50d237d8b74e4313d6ca0ed7212894ca2f8b7?"
                                        className="shrink-0 gap-0 w-6 aspect-square"
                                    />
                                    <div className="gap-0">Modify</div>
                                </button>
                            </div>
                        </button>
                        :
                        index === 2 && !isRoomSelected ?
                            <button
                                type="button"
                                className={`flex items-center justify-between px-4 py-3.5 w-full text-lg text-white bg-zinc-700 ${isOpen ? "rounded-t-lg" : "rounded-lg"}   gap-3`}
                                // onClick={() => toggleAccordion(index)}
                                aria-expanded={isOpen}
                                aria-controls={`accordion-collapse-body-${index}`}
                            >
                                <span>{heading}</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 ${isOpen ? "rotate-0" : "rotate-180"} shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                            : index === 2 && isRoomSelected ?
                                <button
                                    type="button"
                                    className={`flex items-center justify-between w-full text-lg text-white bg-zinc-700 ${isOpen ? "rounded-t-lg" : "rounded-lg"}   gap-3`}

                                    aria-expanded={isOpen}
                                    aria-controls={`accordion-collapse-body-${index}`}
                                >
                                    <div className="flex gap-5 justify-between md:px-5 py-2.5 text-white rounded-xl bg-zinc-700 w-full max-md:flex-wrap max-md:px-5">
                                        <div className="flex gap-2 justify-between my-auto text-base">
                                            {Object.keys(selectedRooms).length >= 1 ? <div className="gap-2 flex items-center">{Object.keys(selectedRooms).map((key) => {
                                                const roomLabel = RoomTypeToName[key] || `Room-${key}`; // Use the label from RoomLabels if available, otherwise use a default label
                                                return (
                                                    <div key={key}>
                                                        <p>{roomLabel}:- {selectedRooms[key]} rooms {""}|</p>
                                                    </div>
                                                );
                                            })}
                                            </div> : "Select Rooms"}
                                        </div>
                                        <button onClick={() => toggleAccordion(index)} className="flex gap-2 px-3 py-1 text-lg whitespace-nowrap rounded-md border border-white border-solid">
                                            <img
                                                loading="lazy"
                                                alt='modify'
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e48dbf3b36320b30e8d9a52ac50d237d8b74e4313d6ca0ed7212894ca2f8b7?"
                                                className="shrink-0 gap-0 w-6 aspect-square"
                                            />
                                            <div className="gap-0">Modify</div>
                                        </button>
                                    </div>
                                </button>
                                : index === 3 ?
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between px-4 py-3.5 w-full text-lg text-white bg-zinc-700 ${isOpen ? "rounded-t-lg" : "rounded-lg"}   gap-3`}
                                        // onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`accordion-collapse-body-${index}`}
                                    >
                                        <span>{heading}</span>
                                        <svg
                                            data-accordion-icon
                                            className={`w-3 h-3 ${isOpen ? "rotate-0" : "rotate-180"} shrink-0`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button> : ""}
                </h2>
            }




            <div
                id={`accordion-collapse-body-${index}`}
                className={`${isOpen ? `block  border-t-0 rounded-b-lg  bg-[#F8F8F8] ${isOpen && index === 3 ? "p-0 rounded-t-lg" : "p-5"}` : 'hidden'}`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
            >
                {content}
            </div>
        </div>
    );
};

export default Accordian;
