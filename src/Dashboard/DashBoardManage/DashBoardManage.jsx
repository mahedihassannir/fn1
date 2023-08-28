import { Outlet } from "react-router-dom";
// this import for the test avenger 
// import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'
import { useContext, useState } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import FantasticSideBar from "../FantasticUserPanel/FantasticSideBar";

import SellerDashboard from "../CodeWorms/SellerDashboard";
import AdminSidebar from "../Avengers/adminpanel/AdminSidebar/AdminSidebar";
import { FaLeaf } from "react-icons/fa";


const DashBoardManage = () => {
	// state import from authcontext for show or not select
	const { showCategory, setShowCategory, showSorting, setShowSorting } = useContext(ContexM);

	const [values, setValue] = useState(true);

	return (
		<div
			onClick={() => {
				setShowCategory(false);
				setShowSorting(false);
			}}
			className='flex relative'
		>
			<div
				className={`w-[265px] absolute md:relative h-[100vh] overflow-y-auto bg-[#0A1727] z-[999] duration-500 sidbarContainer ${
					values ? "-left-[500px]" : "left-[0px]"
				} md:left-0`}
			>
				<AdminSidebar />
				{/* <FantasticSideBar/> */}

				{/* <SellerDashboard></SellerDashboard> */}
			</div>

			<div
				onClick={() => setValue(!values)}
				className='md:hidden absolute right-0 top-2 text-lg cursor-pointer bg-red-400'
			>
				<button>...</button>
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-y-auto p-2 md:px-4 md:py-8 bg-[#EBEFF8] dashboardContainer'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;