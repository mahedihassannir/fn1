import { Outlet } from "react-router-dom";
import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'


const DashBoardManage = () => {
    return (
		<div className='flex'>
			<div className='w-[20%]  h-[100vh] overflow-y-auto bg-[#0A1727] sidbarContainer'>
				<Sidebar></Sidebar>
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-hidden p-8 bg-[#EBEFF8]'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;