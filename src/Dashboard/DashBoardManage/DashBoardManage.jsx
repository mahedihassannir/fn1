import { Outlet } from "react-router-dom";
// import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'
import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import FantasticSideBar from "../FantasticUserPanel/FantasticSideBar";

import AdminSidebar from "../Avengers/adminpanel/AdminSidebar/AdminSidebar";


const DashBoardManage = () => {
	// state import from authcontext for show or not select
	const { showCategory, setShowCategory, showSorting, setShowSorting } =
		useContext(ContexM);

	return (
		<div
			onClick={() => {
				setShowCategory(false);
				setShowSorting(false);
			}}
			className='flex'
		>
			<div className='absolute md:relative z-[9999] -left-96 md:left-0 w-[265px]  h-[100vh] overflow-y-auto bg-[#0A1727] sidbarContainer'>
				<AdminSidebar />
				{/* <FantasticSideBar/> */}
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-y-auto p-2 md:px-4 md:py-8 bg-[#EBEFF8] dashboardContainer'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;