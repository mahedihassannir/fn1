import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import { FaBusinessTime, FaDropbox, FaListUl } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';

const SellerDashboard = () => {
    return (
        <div className=' text-white px-5 py-8'>
        <div className='flex items-center justify-center'>
            <img
                className='w-[80px] h-[80px] rounded-[50%] '
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShA4IgDbKsivtsoTXlIg4437FfD-Dbal91AA&usqp=CAU'
                alt=''
            />
        </div>
        <div className='text-center'>
            <h3 className='mt-3 font-semibold'>CodeWorms</h3>
            <h4>codeworms@gmail.com</h4>
            
        </div>
        <div className='text-left flex flex-col gap-1 mt-8 mx-3 font-normal'>
            {/* nav items */}
            {/* Home */}
            <Link to="dashboard/sellerhome"><div className='flex items-center py-2 gap-4 cursor-pointer rounded-lg hover:text-green-600'>
                <HiHome className='w-4 h-4'></HiHome>
                <h4> Home</h4>
            </div></Link>
            {/* User Order */}
            <Link to="dashboard/additems">
            <div className='flex items-center py-2 gap-4 cursor-pointer rounded-lg hover:text-green-600'>
                    <FaListUl className='w-4 h-4'></FaListUl>
                    <h4>Add Items</h4>
            </div>
            </Link>
            {/* Order progress */}
            <Link to="dashboard/">
            <div className='flex items-center py-2 gap-4 cursor-pointer rounded-lg hover:text-green-600'>
                    <FaBusinessTime className='w-4 h-4'></FaBusinessTime>
                    <h4>Order Progress</h4>
            </div>
            </Link>
            {/* Payment History */}
            <Link to="dashboard/">
            <div className='flex items-center py-2 gap-4 cursor-pointer rounded-lg hover:text-green-600'>
                <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                <h4>Payment History</h4>
                
            </div>
            </Link>
            <Link to="dashboard/">
            <div className='flex items-center py-2 gap-4 cursor-pointer rounded-lg hover:text-green-600'>
                <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                <h4>Wish List</h4>
            </div>
            </Link>
        </div>
        
        <button className='border-stone-300
        border rounded-lg w-[90%] mt-4 font-normal px-12 py-2 text ml-2'>
                Log out
            </button>
    </div>
    );
};

export default SellerDashboard;