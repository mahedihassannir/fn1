import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'
import { FaDollarSign, FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';
import { useContext } from 'react';
import { ContexM } from '../../../../Authentication/AuthProvider/AuthProvider';
import UseRecentAcivity from '../../../../Hooks/RecentAcivity/RecentAcivity';
import { ToastContainer, toast } from 'react-toastify';
import useUserProfile from '../../../../Hooks/user/userProfile';
const UserHomeThirdSection = () => {

    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    console.log(userProfile);
    return (
        <div className='grid grid-cols lg:grid-cols-2 gap-x-10'>
            <div className=''>
                <ToastContainer></ToastContainer>
                <div className='flex justify-between px-2 my-7'>
                    <p className='font-bold'>My Listings</p>
                    <Link to="mylisting">
                        <p className='flex items-center gap-x-2'>See All <BsArrowRightShort /></p>
                    </Link>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-2'>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-6 font-bold text-slate-400'>Annual vince</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-fill' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaRegHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-8 font-bold text-slate-400'>AirPods</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaRegHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1  font-bold text-slate-400'>Gaming Consol</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-2 font-bold text-slate-600'>Robotic Drone</p>
                    </div>
                </div>
                {/* third section Listing Ends here */}

                {/* third section TopProducts,Featured Products start*/}
                <div className='grid grid-cols gap-3 md:grid-cols-2 mt-6'>
                    <div>
                        <div className='flex justify-between mt-8 mb-6'>
                            <p className='font-bold'>Top Products</p>
                            <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>
                        </div>
                        <div>
                            <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <p className='text-4xl mb-2 mx-2'>|</p>
                                <div>
                                    <p>2K Reviews</p>
                                    <p className='flex items-center text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mt-8 mb-6'>
                            <p className='font-bold'>Featured Products</p>
                            <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>
                        </div>
                        <div>
                            <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <p className='text-4xl mb-2 mx-2'>|</p>
                                <div>
                                    <p>2K Reviews</p>
                                    <p className='flex items-center text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* third section TopProducts,Featured Products start ends*/}

            {/* third section recent activity start */}
            <div className=''>
                <div className='flex justify-between my-7'>
                    <p className='font-bold'>Activity</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>

                </div>

                <div className='w-full h-auto border-2 shadow-md'>

                    <div className='text-center pt-2 text-pretty font-semibold text-lg'>
                        Refer Balance: {userProfile?.sanitizedResult?.balance} Taka
                    </div>

                    <hr className='border-2 mt-2' />

                    <div>
                        <div className='flex items-center p-2 justify-between w-11/12 h-20 rounded-md shadow-md mx-auto mt-2 mb-4'>

                            <div>
                                <img className='h-fit w-10 rounded-md' src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div>
                                Mahedi Hassan
                            </div>
                            <div>
                                Rafered
                            </div>

                        </div>
                    </div>





                </div>
                {/* third section recent activity Ends */}
            </div>
        </div>
    );
};

export default UserHomeThirdSection;