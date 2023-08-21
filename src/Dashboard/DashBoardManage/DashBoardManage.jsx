import { Outlet } from "react-router-dom";
import Sidebar from "../Avengers/adminpanel/Sidebar/Sidebar";


const DashBoardManage = () => {
    return (
        <div className="flex ">
            <div className="w-[20%] h-[100vh] overflow-y-auto  bg-[#0A1727]">
            <Sidebar></Sidebar>
            </div>
            {/* outlet */}
            <div className="flex-1  h-[100vh] overflow-y-auto">
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoardManage;