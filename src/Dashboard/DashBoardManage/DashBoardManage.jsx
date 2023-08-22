import { Outlet } from "react-router-dom";
// this import for the test avenger 
// import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'
import { useContext } from "react";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import FantasticSideBar from "../FantasticUserPanel/FantasticSideBar";
import Seller from "../sellerdb/seller";
import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";


const DashBoardManage = () => {
	// state import from authcontext for show or not select
	const { showCategory, setShowCategory, showSorting, setShowSorting } = useContext(ContexM);

	return (
		<div onClick={() => {
			setShowCategory(false);
			setShowSorting(false);
		}} className='flex'>
			<div className='w-[20%]  h-[100vh] overflow-y-auto bg-[#0A1727] sidbarContainer'>
				{/* <Sidebar></Sidebar> */}
				{/* <FantasticSideBar/> */}
				<Seller></Seller>
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-y-auto p-8 bg-[#EBEFF8] dashboardContainer'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;