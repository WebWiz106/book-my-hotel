import React, { useContext } from 'react';
import { IoMdClose } from "react-icons/io";
import AuthContext from '../../context/AuthProvider';


const Page = () => {

    const { modalType, setIsModalOpen,hotelDetails } = useContext(AuthContext);
    // console.log(modalType);

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div onBlur={closeModal} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-black/20 p-6  flex flex-col gap-4 w-full">

                {modalType === "login" &&
                    <section class=" w-full ">
                        <div class="flex flex-col items-center justify-center py-8 mx-auto h-screen lg:py-0">
                            {/* <a href="#" class="flex items-center h-[50px] mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img class="h-[100%]" srcSet={require("../../assets/images/logo/logo-white.png")} alt="logo" />

                            </a> */}
                            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">

                                <div class="px-6 pb-6 space-y-4 md:space-y-6 sm:p-8">
                                    <div className="flex justify-between items-center">
                                        <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                                            Sign up to your account
                                        </h1>
                                        <IoMdClose size={24} onClick={closeModal} className="hover:text-orange-500 hover:cursor-pointer" />
                                    </div>
                                    <form class="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                                            <input type="email" name="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="remember" class="">Remember me</label>
                                                </div>
                                            </div>
                                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                        </div>
                                        <button type="submit" class="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                        <p class="text-sm font-light ">
                                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                }
                {modalType === "signup" &&
                    <section class=" w-full ">
                        <div class="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
                            {/* <a href="#" class="flex items-center h-[50px] mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img class="h-[100%]" srcSet={require("../../assets/images/logo/logo-white.png")} alt="logo" />

                            </a> */}
                            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">

                                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <div className="flex justify-between items-center">
                                        <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                                            Sign up to your account
                                        </h1>
                                        <IoMdClose size={24} onClick={closeModal} className="hover:text-orange-500 hover:cursor-pointer" />
                                    </div>


                                    <form class="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label for="username" class="block mb-2 text-sm font-medium ">Username</label>
                                            <input type="text" name="username" id="username" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 " placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                                            <input type="email" name="email" id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " required="" />
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50  " required="" />
                                                </div>
                                                <div class="ml-3 text-sm">
                                                    <label for="remember" class="">Remember me</label>
                                                </div>
                                            </div>
                                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                        </div>
                                        <button type="submit" class="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign up</button>
                                        <p class="text-sm font-light ">
                                            Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                {/* <button onClick={closeModal} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700">{modalType === "login" ? "Login" : "Signup"}</button> */}
            </div>
        </div >
    )
}

export default Page