import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import { FaBusinessTime,  FaListUl, FaQuestionCircle } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import AuthorOfDashboard from '../../../../Components/Avengers/DashboardRelatedCompo/SidBarCompo/AuthorOfDashboard/AuthorOfDashboard';



const isAdmin = true
// const user = true
// const seller = true

const FantasticSideBar = () => {
	const [activeRoute, setActiveRoute] = useState("Home")
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
				<Link to="dashboard/userhome"><div onClick={() => setActiveRoute("Home")}
						className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${
							activeRoute === "Home"
								? "bg-[#19D895] text-[#0A1727]"
								: ""
						} cursor-pointer  gap-4`}
					>
					<HiHome className='w-4 h-4'></HiHome>
					<h4> Home</h4>
				</div></Link>
				{/* User Order */}
				<Link to="dashboard/userorder">
				<div onClick={() => setActiveRoute("My Order")}
					className={`flex hover:bg-[#19D895] duration-700 items-center relative p-2 ${
						activeRoute === "My Order"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
						<FaListUl className='w-4 h-4'></FaListUl>
						<h4>My Order</h4>
				</div>
				</Link>
				{/* Order progress */}
				<Link to="dashboard/userprogress">
				<div  onClick={() => setActiveRoute("Order Progress")}
					className={`flex hover:bg-[#19D895] duration-700 items-center relative p-2 ${
						activeRoute === "Order Progress"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
						<FaBusinessTime className='w-4 h-4'></FaBusinessTime>
						<h4>Order Progress</h4>
				</div>
				</Link>
				{/* Payment History */}
				<Link to="dashboard/userpaymenthistory">
				<div onClick={() => setActiveRoute("Payment History")}
					className={`flex hover:bg-[#19D895] duration-700 items-center relative p-2 ${
						activeRoute === "Payment History"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
					<MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
					<h4>Payment History</h4>
					
				</div>
				</Link>
				<Link to="dashboard/userwishlist">
				<div onClick={() => setActiveRoute("Wish List")}
					className={`flex hover:bg-[#19D895] duration-700 items-center relative p-2 ${
						activeRoute === "Wish List"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
					<MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
					<h4>Wish List</h4>
				</div>
				</Link>
				<hr  className='my-2'/>
				<Link to="/">
				<div onClick={() => setActiveRoute("Home Page")}
					className={`flex hover:bg-[#19D895] duration-700 items-center relative p-2 ${
						activeRoute === "Home Page"
							? "bg-[#19D895] text-[#0A1727]"
							: ""
					} cursor-pointer gap-4`}
				>
					<AiOutlineArrowLeft className='w-4 h-4'></AiOutlineArrowLeft>
					<h4 className=''>Home Page</h4>
				</div>
				</Link>
				<div className='text-center text-black relative mt-6'>
					<div className='absolute -top-5 left-20 flex justify-center rounded-full' style={{color:"#bdf094",border:"6px solid #0A1727",backgroundColor:"#0A1727"}} >
					<FaQuestionCircle className='text-2xl'/>
					</div>
					<div className='rounded-lg py-4' style={{backgroundColor:"#bdf094"}}>
					<h1 className='font-bold'>Help Center</h1>
					<p>Having Trouble in Product</p>
					<p>Please Contact Use for</p>
					<p>More Information</p>
					<div>
						<Link to="dashboard/customersupport">
						<button className='px-2 py-1 rounded-lg' style={{color:"#bdf094",backgroundColor:"#0A1727"}}>Go To Help Center</button>
						</Link>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FantasticSideBar;