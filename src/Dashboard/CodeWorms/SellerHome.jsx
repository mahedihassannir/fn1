import React from 'react';
import { MdPendingActions ,MdDashboardCustomize} from 'react-icons/md';
import { FaShippingFast, FaListOl, FaCartArrowDown, FaFirstOrderAlt } from 'react-icons/fa';
// import { BsArrowReturnLeft, BsChatRight } from 'react-icons/';
import { GoCodeReview } from 'react-icons/go';


const SellerHome = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-2'>
            <MdDashboardCustomize></MdDashboardCustomize>
            <h2 className='text-2xl font-bold'> Dashboard</h2>
            </div>
          
          <hr className='mt-6 shadow border border-green-900'/>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
            <div className='w-25 bg-slate-50 shadow-2xl p-8'><span className=''><MdPendingActions className='text-3xl border-2 rounded-full'></MdPendingActions></span><br/><p className='font-bold text-lg'>Pending Orders<br/><u>20</u></p></div>
            <div className='w-25 bg-slate-50 shadow-2xl p-8'><span><FaShippingFast className='text-3xl border rounded-full'></FaShippingFast> </span><br/><p className='font-bold text-lg'>Ready To Ship<br/><u>35</u></p></div>
            <div className='w-25 bg-slate-50 shadow-2xl p-8'><br/><p className='font-bold text-lg'>Pending Return<br/><u>05</u></p></div>
            <div className='w-25 bg-slate-50 shadow-2xl p-8'><span><GoCodeReview className='text-3xl border rounded-full'></GoCodeReview> </span><br/><p className='font-bold text-lg'>New Reviews<br/><u>110</u></p></div>
          </div>
          <div className='text-center mt-8'>
          <button className='font-bold rounded-lg px-20 py-2 bg-[#0A1727] text-white text-center'>See More</button>
          </div>

        <div className='shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
            <div className='shadow-2xl bg-[#2083C2] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaListOl></FaListOl></span>
           <h2 className='text-2xl font-bold text-white'> Products 770</h2></div>
           <div className='bg-[#5CE85B] p-8 flex items-center gap-6'>
           <h2 className='shadow-2xl text-2xl font-bold text-white'>Customers</h2></div>
           <div className='shadow-2xl bg-[#FFB64B] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaCartArrowDown></FaCartArrowDown></span>
           <h2 className='text-2xl font-bold text-white'> Product Categories</h2></div>
           <div className='shadow-2xl bg-[#E34D4E] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaFirstOrderAlt></FaFirstOrderAlt></span>
           <h2 className='text-2xl font-bold text-white'>Order List</h2></div>
        </div>

        <div>
            <h2>New Orders</h2>
        </div>

        </div>
    );
};

export default SellerHome;
