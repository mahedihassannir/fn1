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
import { ToastContainer, toast } from "react-toastify";
import UseOrders from "../../../Hooks/useOrderManage/UseOrderManage";

const { RangePicker } = DatePicker;
const OrderManage = () => {
  const sellerAuthToken = localStorage.getItem("sellerToken");
  const id = localStorage.getItem("sId");

  const [orders, refetch] = UseOrders();


  const handleDelivered = (productId, userId) => {
    // console.log(productId);
    // console.log(userId);
    axios.post(
      `http://localhost:5000/api/v1/seller/orders/${productId}/delivered?sellerId=${id}`,
      { userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sellerAuthToken}`
        }
      }
    )
      .then(response => {
        // console.log(response.data.code);
        // console.log(response.data);

        if (response.data.code === 201) {
          toast.success("অনুরোধ সফলভাবে জমা দেওয়া হয়েছে ই কম এর অফিস থেকে ডেলিভারি এর জন্য লোক আসবে ৫ মিনিট এর মধ্যে");
        }
      })
      .catch(error => {
        console.error('Error handling delivery:', error);
      });
    // console.log("handle delivery");
  };

  refetch();
  return (
    <div>
      <ToastContainer />
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


            {/* // console.log(item.order.address?.address), */}


            {orders && orders.result && orders.result.length > 0 ? (
              orders?.result?.map(res =>
                <div key={res._id} className="w-full mt-5 ">
                  {/* this dive is for change the progress of order */}
                  <div className=" w-[100%] lg:w-[40%] shadow-lg  h-10 bg-white rounded-t-md ">

                    <div className="flex items-center gap-1 pt-2 pl-4  ">


                      {/* this div is the button for the delivered or not delivered */}
                      <div className="">


                        <button onClick={() => handleDelivered(res?.order?._id, res?.order?.user,)} className="py-2 px-5 border-2 border-red-300">

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
                          product <br /> <span className="text-center">{""}</span>
                          <p className="flex items-center justify-center text-red-600">
                            {/* TODO */}
                            {/* {} */}
                            <span> <TbCurrencyTaka />{res?.product?.price * res?.quantity}</span>
                          </p>
                        </p>


                      </div>

                      {/* this is the order product shipping details */}
                      <div className="w-full p-2 ">

                        <ul>
                          <li className="text-[13px] font-semibold">product name: <span className="text-red-500">{res?.product?.product_name}</span></li>


                          <li className="text-[13px] font-semibold">product id: <span className="text-red-500">{res?._id}</span></li>

                          <li className="text-[13px] font-semibold">delivery address: <span className="text-red-500">{res?.order?.address}</span></li>

                          <li className="text-[13px] font-semibold">paymentMethod: <span className="text-red-500">{res?.order?.paymentMethod}</span></li>

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
                        <img className="p-2 w-24 h-20  lg:ml-2 border-2 lg:w-40 lg:h-32" src={res?.product?.product_images[0]} alt="" />

                      </div>
                      <div>
                        <h1 className="text-[19px]">Product Quantity: {res.quantity}</h1>
                      </div>
                      {/* ))} */}

                    </div>



                  </div>






                  {/* this is the product name and the address detail work ends */}

                </div>

              )
            ) : (

              <div className="text-center mx-auto w-full">
                <h1 className="text-center mt-10 text-[25px]">no order</h1>
                <img className="mx-auto mt-5" src="data:image/png;base64,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" alt="" />
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
