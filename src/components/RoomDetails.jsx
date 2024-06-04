import { Star } from '@mui/icons-material';
import { Button } from "@mui/joy";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useContext } from 'react';
import { CiHeart } from "react-icons/ci";
import { IoChevronBackSharp, IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthProvider';


const RoomDetails = () => {


    const { selectedRoomDetails, setSelectedRoomDetails } = useContext(AuthContext);

    // console.log("roomData:", selectedRoomDetails);



    const dummyData = {
        "title": "Cozy Beachfront Studio Apartment",
        "location": "Santa Monica, California",
        "guests": 2,
        "bedrooms": 1,
        "bathrooms": 1,
        "pricePerNight": 150,
        "description":
            "Enjoy the ocean breeze and stunning sunsets from this charming studio apartment, just steps from the beach. Relax on the private balcony, cook in the fully equipped kitchen, and explore the vibrant Santa Monica scene.",
        "host": {
            name: "Sarah Jones",
            avatarUrl: "https://picsum.photos/50/50",
        },
        "photos": [
            "https://picsum.photos/600/300?image=100",
            "https://picsum.photos/600/300?image=101",
            "https://picsum.photos/600/300?image=102",
        ],

    };



    return (
        <div className='maxwidth mx-auto px-5'>
            <div className=" flex justify-between items-center pt-4">
                <Link to="/">
                    <h1 className="flex items-center space-x-2 font-semibold text-xl">
                        <IoChevronBackSharp />
                        <span>Home</span>
                    </h1>
                </Link>
                <div>
                    <Button variant="plain" color="neutral" className="space-x-2">
                        <IoShareOutline />
                        <span>share</span>
                    </Button>
                    <Button variant="plain" color="neutral" className="space-x-2">
                        <CiHeart />
                        <span>save</span>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-10 py-6 w-full h-full">
                <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-2 row-span-2">
                    <img
                        src={selectedRoomDetails?.roomImage[0]}
                        alt="Image 1"
                        className="w-full h-full object-cover hover:opacity-90 rounded-tl-xl rounded-bl-xl"
                    />
                </div>
                <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
                    <img
                        src={selectedRoomDetails?.roomImage[1]}
                        alt="Image 2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
                    <img
                        src={selectedRoomDetails?.roomImage[2]}
                        alt="Image 3"
                        className="w-full h-full object-cover rounded-tr-xl"
                    />
                </div>
                <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
                    <img
                        src={selectedRoomDetails?.roomImage[3]}
                        alt="Image 4"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hidden md:block col-span-1 md:col-span-1 lg:col-span-1">
                    <img
                        src={selectedRoomDetails?.roomImage[0]}
                        alt="Image 4"
                        className="w-full h-full object-cover  rounded-br-xl"
                    />
                </div>
                <div className="md:hidden">
                    <MobileView />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 gap-4 mt-2"></div>
                <div className="md:flex md:space-x-6 mt-4">
                    <div className="md:w-1/2">
                        <h4 className="text-2xl font-bold">{dummyData.title}</h4>
                        <div className="flex items-center mt-1 text-gray-600">
                            <span className="mr-1">{dummyData.location}</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} />
                                ))}
                            </div>
                        </div>
                        <div className="mt-2">
                            <p>{dummyData.description}</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Guests</p>
                                <p className="text-md">{dummyData.guests} people</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Bedrooms</p>
                                <p className="text-md">{dummyData.bedrooms}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">Bathrooms</p>
                                <p className="text-md">{dummyData.bathrooms}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />
        </div>
    )
}


const MobileView = () => {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img
                    src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/06/offbeat_airbnb-2.jpg"
                    alt="Image 1"
                    className="rouded-xl"
                />
            </SplideSlide>
            <SplideSlide>
                <img
                    src="https://www.meganstarr.com/wp-content/uploads/2021/02/Casa-Moab.jpg"
                    alt="Image 2"
                />
            </SplideSlide>
        </Splide>
    );
};

const TestimonialCard = ({ name, avatar, content }) => (
    <div className="w-full mx-auto rounded-lg bg-white text-gray-800 font-light  h-full">
        <div className="w-full flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src={avatar} alt={name} />
            </div>
            <div className="flex-grow pl-3">
                <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
            </div>
        </div>
        <div className="w-full">
            <p className="text-sm leading-tight">
                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>
                {content}
                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span>
            </p>
        </div>
    </div>
);


const Testimonials = () => {
    const dummyTestimonials = [
        {
            "name": "Kenzie Edgar",
            "avatar": "https://i.pravatar.cc/100?img=1",
            "content":
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
        },
        {
            "name": "Stevie Tifft",
            "avatar": "https://i.pravatar.cc/100?img=2",
            "content":
                "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
        },
        {
            "name": "Stevie Tifft",
            "avatar": "https://i.pravatar.cc/100?img=2",
            "content":
                "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
        },
        {
            "name": "Stevie Tifft",
            "avatar": "https://i.pravatar.cc/100?img=2",
            "content":
                "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
        },
    ];
    return (
        <div className=" flex items-center justify-start py-5 mt-5">
            <div className="w-full  mx-auto">
                <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 items-start">
                    {dummyTestimonials.map((testimonial, index) => (
                        <div className=" w-full h-full" key={index}>
                            <TestimonialCard name={testimonial.name} avatar={testimonial.avatar} content={testimonial.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default RoomDetails