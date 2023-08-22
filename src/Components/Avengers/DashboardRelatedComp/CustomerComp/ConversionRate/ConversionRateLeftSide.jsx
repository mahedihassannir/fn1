//AVENGERS 
//TOMA 
//ConversionRateSide left section

import { HiOutlineUserGroup, HiUserAdd } from "react-icons/hi";

const ConversionRateLeftSide = () => {
    return (
        <div className="flex gap-5 w-[48%] ">
            <div >
                <div className="flex flex-col items-center justify-center w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiOutlineUserGroup className="mb-2 bg-[#00BA9D] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">32,987</h3>
                    <p className="text-xl font-semibold">All Customers</p>
                </div>

            </div>
            <div >
                <div className="flex flex-col items-center justify-center w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiUserAdd className="mb-2 bg-[#035ECF] p-2 w-[40px] h-[40px] rounded text-white"></HiUserAdd>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">17,153</h3>
                    <p className="text-xl font-semibold">New Customers</p>

                </div>

            </div>
            <div>
                <div className="flex flex-col items-center justify-center w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiOutlineUserGroup className="mb-2 bg-[#FF5470] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">7,587</h3>
                    <p className="text-xl font-semibold">Regular Customers</p>

                </div>

            </div>
        </div>

    );
};

export default ConversionRateLeftSide;