import { Outlet } from "react-router-dom";
import Sidebar from "../adminpanel/Sidebar/Sidebar";

const DashBoardManage = () => {
    return (
        <div>

            <Sidebar></Sidebar>
            {/* outlet */}
            <Outlet></Outlet>

        </div>
    );
};

export default DashBoardManage;