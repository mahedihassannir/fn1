import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import AuthorOfDashboard from '../../AuthorOfDashboard/AuthorOfDashboard';

const isAdmin = true
// const user = true
// const seller = true

const Sidebar = () => {
    return (
        <div className=' text-white px-5 py-8'>
            <div className='flex items-center justify-center'>
                <img className='w-[80px] h-[80px] rounded-[50%] ' src="https://i.ibb.co/kHKXS8C/760dab6c14dacbbb9e1cbdb719749032.jpg" alt="" />
            </div>
            <div className='text-center'>
                <h3 className='mt-3 font-semibold'>Toma Akter Hashi</h3>
                <h4>toma@gmail.com</h4>
                <button className='bg-[#19D895] w-[90%] mt-4 font-normal px-12 py-2 rounded-sm'>Upgrade</button>
            </div>
            <div className='text-left mt-8 mx-3 font-normal'>
                <div className='flex items-center mt-4 gap-4'>
                    <HiHome className='w-4 h-4'></HiHome>
                    <h4> Home</h4>
                </div>
                <div className='flex justify-between mt-4 gap-4'>
                    <div className='flex items-center gap-4'>
                        <HiChartBar className='w-4 h-4'></HiChartBar>
                        <h4>Transactions</h4>
                    </div>
                    <div className='flex items-center justify-center py-2 px-3 bg-[#8E6CE5] w-[20px] h-[20px] mt-3 rounded-lg '>
                        <small>45</small>
                    </div>
                </div>
               

                <div className='flex justify-between mt-4  gap-4'>
                    <div className='flex items-center gap-4'>
                    <HiUsers className='w-4 h-4'></HiUsers>
                    <h4>Sales</h4>
                    </div>
                    <div className='flex items-center justify-center py-2 px-3 bg-[#19D895] w-[20px] h-[20px] mt-3 rounded-lg '>
                        <small>45</small>
                    </div>

                </div>
                <div className='flex items-center mt-4  gap-4'>
                    <HiOutlineFolder className='w-4 h-4'></HiOutlineFolder>
                    <h4>Products</h4>
                </div>
                <div className='flex items-center mt-4  gap-4'>
                    <HiMiniAdjustmentsHorizontal className='w-4 h-4'></HiMiniAdjustmentsHorizontal>
                    <h4>Members</h4>
                </div>
                <div className='flex items-center mt-4  gap-4'>
                    <HiMiniShoppingCart className='w-4 h-4'></HiMiniShoppingCart>
                    <h4>Investment</h4>
                </div>
                <div className='flex items-center mt-4  gap-4'>
                    <HiMiniCalculator className='w-4 h-4'></HiMiniCalculator>
                    <h4>Analytics</h4>
                </div>
                <div className='flex items-center  mt-4  gap-4'>
                    <HiMiniUsers className='w-4 h-4'></HiMiniUsers>
                    <h4>Reporting</h4>
                </div>
                <div className='flex items-center mt-4   gap-4'>
                    <HiArchiveBoxXMark className='w-4 h-4'></HiArchiveBoxXMark>
                    <h4>Back Accounts</h4>
                </div>
                <div className='flex items-center mt-4  gap-4'>
                    <HiAcademicCap className='w-4 h-4'></HiAcademicCap>
                    <h4>Admin/HR</h4>
                </div>

            </div>
            <div className='flex items-center justify-center '>
                <AuthorOfDashboard></AuthorOfDashboard>
            </div>


            <Link to="analytics"></Link>



        </div>
    );
};

export default Sidebar;