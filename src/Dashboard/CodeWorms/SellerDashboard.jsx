
/**
 * 
 * name:mahedi hassan
 * work:seller Dashboard 
 * Date:28/8/2023
 * 
 */



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, HiMiniAdjustmentsHorizontal, HiMiniCalculator, HiMiniShoppingCart, HiMiniUsers } from "react-icons/hi2";
import { HiAcademicCap, HiChartBar, HiHome, HiOutlineFolder, HiUsers } from 'react-icons/hi';
import { FaBusinessTime, FaDropbox, FaLightbulb, FaListUl, FaProductHunt, FaQuestionCircle } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';

const SellerDashboard = () => {

    const [activeRoute, setActiveRoute] = useState("Seller Home")

    return (
        <div className=' text-white px-5 py-8'>
            <div className='flex items-center justify-center'>
                <img
                    className='w-[80px] h-[80px] rounded-[50%] '
                    src='data:image/png;base64,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'
                    alt=''
                />
            </div>
            <div className='text-center'>
                <h3 className='mt-3 font-semibold'>Mahedi Hassan nir</h3>
                <h4>mahedinir34678@gamil.com</h4>

            </div>
            <div className='text-left flex flex-col gap-1 mt-8 mx-3 font-normal'>
                {/* sidebar items */}



                {/* Seller Home */}

                <Link to="dashboard/sellerhome"><div onClick={() => setActiveRoute("Seller Home")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Seller Home"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <HiHome className='w-4 h-4'></HiHome>
                    <h4> Home</h4>
                </div></Link>
                {/* Seller Home ends */}


                {/* Seller Add Product */}
                <Link to="dashboard/additems"><div onClick={() => setActiveRoute("Add Product")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Add Product"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaListUl className='w-4 h-4'></FaListUl>
                    <h4> E-com review</h4>
                </div></Link>
                {/* Seller Add Product ends */}


                {/* Order progress and orders */}

                <Link to="dashboard/manageproduct"><div onClick={() => setActiveRoute("Manage Product")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Manage Product"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaProductHunt className='w-4 h-4'></FaProductHunt>
                    <h4>Product Manager</h4>
                </div></Link>
                {/* Order progress and orders */}



                {/*  Seller Payment History */}

                <Link to="dashboard/payhistory"><div onClick={() => setActiveRoute("Payment History")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Payment History"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4> Manage Product</h4>
                </div></Link>

                {/*  Seller Payment History ends */}


                {/* custommer feedback on my product */}
                <Link to="dashboard/customerfeedback"><div onClick={() => setActiveRoute("CustomerFeedback")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "CustomerFeedback"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <MdOutlinePayments className='w-4 h-4'></MdOutlinePayments>
                    <h4> Manage Product</h4>
                </div></Link>
                {/* custommer feedback on my product ends */}



                {/* Markating solution for seller starts */}
                <Link to="/dashboard/markatingpage"><div onClick={() => setActiveRoute("Markating Solution")}
                    className={`flex hover:bg-[#19D895] duration-700 items-center p-2 ${activeRoute === "Markating Solution"
                        ? "bg-[#19D895] text-[#0A1727]"
                        : ""
                        } cursor-pointer  gap-4`}
                >
                    <FaLightbulb className='w-4 h-4'></FaLightbulb>
                    <h4>Markating Solution</h4>
                </div></Link>

                {/* Markating solution for seller ends */}

            </div>


            <hr className='my-10' />

            <div className='text-center text-black relative mt-6'>
                <div className='absolute -top-5 left-20 flex justify-center rounded-full' style={{ color: "#bdf094", border: "6px solid #0A1727", backgroundColor: "#0A1727" }} >
                    <FaQuestionCircle className='text-2xl' />
                </div>
                <div className='rounded-lg py-4' style={{ backgroundColor: "#bdf094" }}>
                    <h1 className='font-bold'>Help Center</h1>
                    <p>Having Trouble in Product</p>
                    <p>Please Contact Use for</p>
                    <p>More Information</p>
                    <div>
                        <Link to="dashboard/customersupport">
                            <button className='px-2 py-1 rounded-lg font-bold' style={{ color: "#ffffff", backgroundColor: "#0A1727" }}>Go To Help Center</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;