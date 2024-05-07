// import 'antd/dist/antd.css';
import { DatePicker } from "antd";
// import "./OrdersTable.css";
import OrdersTable from "../../../Components/Avengers/DashboardRelatedCompo/Orders/OrdersTable/OrdersTable";
import Rating from "react-rating";
import { FaBeer, FaStar, FaStarHalfAlt } from "react-icons/fa";
import UseSellerOrders from "../../../Hooks/UseSellerOrders/UseSellerOrders";
import { ContexM } from "../../../Authentication/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import axios from "axios";

const { RangePicker } = DatePicker;
const OrderManage = () => {
  const [orders, SetOrders] = useState(null);
  const sellerAuthToken = localStorage.getItem("sellerToken");
  const id = localStorage.getItem("sId")
  console.log(id);
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get(`http://localhost:5000/api/v1/seller/orders?sellerId=${id}`, {
          headers: { Authorization: `Bearer ${sellerAuthToken}` }
        });
        const sellerData = response.data;
        SetOrders(sellerData);
        console.log({ sellerData });
        console.log(sellerData);

        // Set sellerData in your component state or context for rendering.
      } catch (error) {
        console.error('Error fetching seller data:', error);
      };
    };

    fetchData();

  }, []);
  console.log(orders);




  return (
    <div>
      <h1 className="text-xl font-semibold">Order Overview</h1>
      <div className="mt-10 flex justify-between lg:justify-start">
        <ul className="lg:flex gap-4 font-semibold">
          <li>
            All <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Pending All{" "}
            <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Ready to ship{" "}
            <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Shipped <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Delivered{" "}
            <span className="lg:border-r border-indigo-400 mx-3"></span>
          </li>
        </ul>
        <ul className="lg:flex gap-4 font-semibold">
          <li>
            Cancled <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Retuned <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>
            Failed Delivery{" "}
            <span className="lg:border-r border-indigo-400 ml-3"></span>
          </li>
          <li>Refund Only</li>
        </ul>
      </div>

      <div className="bg-white py-1 px-2 mt-4">
        <ul className="flex flex-col lg:flex lg:flex-row gap-2 mt-4 ">
          <li className="border-2">
            <input
              type="text"
              name=""
              placeholder="Order Number"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] outline-none"
            />
          </li>
          <li className="border-2">
            <input
              type="text"
              name=""
              placeholder="Customer"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] outline-none"
            />
          </li>
          <li className="border-2">
            <input
              type="text"
              name=""
              placeholder="Product"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] outline-none"
            />
          </li>
          <li className="border-2">
            <span
              type="text"
              list="data"
              name=""
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] "
            >
              {" "}
            </span>
            <select id="data" className="outline-none">
              <option>Product Tag</option>
              <option>One</option>
              <option>Two</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
              <option>Five</option>
            </select>
          </li>
          <li className="border-2">
            <input
              type="text"
              name=""
              placeholder="Seller SKU"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] outline-none"
            />
          </li>
          <li className="border-2">
            <input
              type="text"
              name=""
              placeholder="Payment"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[110px] outline-none"
            />
          </li>
          <li className=" lg:ml-24 border-2">
            <input
              type="text"
              name=""
              placeholder="Search"
              id=""
              className="border-none text-sm px-2 py-1 lg:w-[100px] outline-none"
            />
          </li>
        </ul>
        <ul className="mt-4">
          <li className="pb-2">
            <RangePicker></RangePicker>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <div>
          <ul className="flex flex-col lg:flex lg:flex-row gap-2 mt-10">
            <li className="border-2 bg-white">
              <span
                type="text"
                list="data1"
                name=""
                id=""
                className="border-none text-sm px-2 py-1 lg:w-[110px]"
              ></span>
              <select id="data1" className="outline-none">
                <option>Print</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </select>
            </li>
            <li className=" border-2 bg-white">
              <span
                type="text"
                list="data2"
                name=""
                id=""
                className="border-none text-sm px-2 py-1 lg:w-[110px]"
              ></span>
              <select id="data2" className="outline-none">
                <option>Set Status</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col lg:flex lg:flex-row gap-2 mt-10">
            <li className="border-2 bg-white">
              <span
                type="text"
                list="data3"
                name=""
                id=""
                className="border-none text-sm px-2 py-1 lg:w-[110px]"
              ></span>
              <select id="data3" className="outline-none">
                <option>Export</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </select>
            </li>
            <li className=" border-2 bg-white">
              <span
                type="text"
                list="data4"
                name=""
                id=""
                className="border-none text-sm px-2 py-1 lg:w-[110px]"
              ></span>
              <select id="data4" className="outline-none">
                <option>Import</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </select>
            </li>
            <li className=" border-2 bg-white">
              <span
                type="text"
                list="data5"
                name=""
                id=""
                className="border-none text-sm px-2 py-1 lg:w-[110px]"
              ></span>
              <select id="data5" className="outline-none">
                <option>View History</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* Order Table */}
      <div>
        {/* <OrdersTable></OrdersTable> */}
        <div className="min-w-full">
          <table className="text-[11px]  w-full">
            {/* order table head  */}


            {/* order tabel body  */}

            {/* here is the order manage tables */}


              // console.log(item.order.address?.address),

            {
              orders?.result?.map(res =>
                <div className="w-full mt-5 ">
                  {/* this dive is for change the progress of order */}
                  <div className=" w-[100%] lg:w-[40%] shadow-lg  h-10 bg-white rounded-t-md ">

                    <div className="flex items-center gap-1 pt-2 pl-4  ">


                      {/* this div is the button for the delivered or not delivered */}
                      <div className="">


                        <button onClick={() => handleDelivered("")} className="py-2 px-5 border-2 border-red-300">

                          PRODUCT DELIVERED

                        </button>


                      </div>
                      {/* this div is the button for the delivered or not delivered ends */}





                      {/* this dive is for the title */}
                      <div className="">


                        <p className="font-semibold text-[14px] uppercase">change the order progress</p>

                      </div>
                      {/* this dive is for the title ends */}

                    </div>

                  </div>
                  {/* this dive is for change the progress of order ends */}

                  <div className=" rounded-md w-full shadow-md border-spacing-2 py-4 bg-white flex-row-reverse lg:flex">
                    {/* starts of the product sheeping address and the person who ordered */}

                    <div className=" w-full lg:w-[20%]  flex lg:grid   ml-2 border-r-2 border-r-indigo-800">

                      <div className=" w-28 flex justify-center items-center h-28  rounded-full border-2 ">

                        <p className="text-lg font-semibold text-center">
                          product <br /> <span className="text-center">"</span>
                          <p className="flex items-center justify-center text-red-600">
                            {/* TODO */}
                            {/* {} */}
                            <span> <TbCurrencyTaka /></span>
                          </p>
                        </p>


                      </div>

                      {/* this is the order product shipping details */}
                      <div className="w-full p-2 ">

                        <ul>
                          <li className="text-[13px] font-semibold">f</li>
                          <li className="text-[13px] font-semibold">f</li>
                          <li className="text-[13px] font-semibold">f</li>
                          <li className="text-[13px] font-semibold">f</li>
                        </ul>


                      </div>
                      {/* this is the order product shipping details ends */}

                    </div>
                    <hr className="py-2  mt-2 text-blue-800" />
                    {/* ends of the product sheeping detail */}


                    <div className=" w-full  lg:w-[80%] grid grid-cols-4 lg:grid-cols-6 gap-2 ">
                      {/* {Object.values(item.order.cart).map((cartItem, cartIndex) => (
                      console.log(cartItem), */}

                      <div className="" key={""}>
                        {/* Display images */}


                        {/* <img className="w-40 h-32" src="https://i.ibb.co/jRDShZf/Screenshot-2023-08-19-162626.png" alt="" /> */}
                        {/* {Array.isArray(cartItem.imageurls) && cartItem.imageurls[0] &&
                          <img className="p-2 w-24 h-20  lg:ml-2 border-2 lg:w-40 lg:h-32" src={cartItem.imageurls[0]} alt="" />

                        } */}
                        {/* 
                        <p className="pl-2 font-semibold">{cartItem.name}</p> */}
                        {/* <h1>hi i am mahedi</h1> */}

                      </div>
                      {/* ))} */}

                    </div>



                  </div>






                  {/* this is the product name and the address detail work ends */}

                </div>

              )
            }





            {/* here is the order manage tables  ends*/}


          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
