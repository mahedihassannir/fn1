import { Outlet } from "react-router-dom";
// this import for the test avenger 
// import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";
import './DashBoardManage.css'
import FantasticSideBar from "../FantasticUserPanel/FantasticSideBar";


const DashBoardManage = () => {
	return (
		<div className='flex'>
			<div className='w-[20%]  h-[100vh] overflow-y-auto bg-[#0A1727] sidbarContainer'>
				{/* <Sidebar></Sidebar> */}
				<FantasticSideBar/>
			</div>
			{/* outlet */}
			<div className='flex-1 h-[100vh] overflow-hidden p-8 bg-[#EBEFF8]'>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashBoardManage;