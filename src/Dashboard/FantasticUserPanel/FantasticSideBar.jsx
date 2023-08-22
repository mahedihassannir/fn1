import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import { FaBusinessTime, FaDropbox, FaListUl } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
// import AuthorOfDashboard from '../../../../Components/Avengers/DashboardRelatedCompo/SidBarCompo/AuthorOfDashboard/AuthorOfDashboard';



const isAdmin = true
// const user = true
// const seller = true

const FantasticSideBar = () => {
    return (
		<div className=' text-white px-5 py-8'>
			<div className='flex items-center justify-center'>
				<img
					className='w-[80px] h-[80px] rounded-[50%] '
					src='https://i.ibb.co/YDYc4hM/Black-Geometric-Depop-Profile-Picture.png'
					alt=''
				/>
			</div>
			<div className='text-center'>
				<h3 className='mt-3 font-semibold'>masum</h3>
				<h4>masum@gmail.com</h4>
				
			</div>
			<div className='text-left flex flex-col gap-1 mt-8 mx-3 font-normal'>
				{/* nav items */}
				{/* Home */}
				<div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
					<HiHome className='w-4 h-4'></HiHome>
					<h4> Home</h4>
				</div>
				{/* User Order */}
				<div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
						<FaListUl className='w-4 h-4'></FaListUl>
						<h4>My Order</h4>
				</div>
				{/* Order progress */}
				<div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
						<FaBusinessTime className='w-4 h-4'></FaBusinessTime>
						<h4>Order Progress</h4>
				</div>
				{/* Payment History */}
				<div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
					<MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
					<h4>Payment History</h4>
				</div>
				<div className='flex items-center py-2 gap-4 hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg hover:text-green-600'>
					<MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
					<h4>Wish List</h4>
				</div>
			</div>
			
			<button className='border-stone-300
			border rounded-lg w-[90%] mt-4 font-normal px-12 py-2 text ml-2'>
					Log out
				</button>
		</div>
	);
};

export default FantasticSideBar;