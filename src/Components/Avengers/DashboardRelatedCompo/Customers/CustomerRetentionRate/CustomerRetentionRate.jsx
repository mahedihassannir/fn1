//AVENGERS
//TOMA
//Customer Retention  section

import Demographic from "./Demographic";
import PieChart from "./PieChart";

import TotalCustomers from "./TotalCustomers";

const CustomerRetentionRate = () => {
    return (
        <div className="flex justify-between ">
            <div className="w-[62%] shadow-md ">
                <h4 className="text-2xl font-semibold  p-5">Customer Retention Rate</h4>
                <div className="flex justify-between px-5">
                    <div className="w-[45%]">
                       <PieChart></PieChart>
                    </div>
                    <div className="w-[45%]">
                        <TotalCustomers></TotalCustomers>
                    </div>
                </div>


            </div>

            <div className="w-[32%] shadow-md">
                <h4 className="text-2xl font-bold p-5 ">Demographic Segmentation By Age</h4>
                <Demographic></Demographic>


            </div>

        </div>
    );
};

export default CustomerRetentionRate;