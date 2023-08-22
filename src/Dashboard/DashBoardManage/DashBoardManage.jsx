import { Outlet } from "react-router-dom";
import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";


const DashBoardManage = () => {
    return (
        <div className="flex">

            <div className="w-[20%] h-[100%] bg-[#0A1727]">
            <Sidebar></Sidebar>
            </div>
            {/* outlet */}
            <div className="flex-1 ">
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoardManage;