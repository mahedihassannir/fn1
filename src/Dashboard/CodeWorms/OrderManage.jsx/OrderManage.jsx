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

const { RangePicker } = DatePicker;
const OrderManage = () => {

  const [order, refetch] = UseSellerOrders(null)

  // const { modalIsOpen, setModalIsOpen } = useState(false);
  const [modalStates, setModalStates] = useState(Array(order.length).fill(false));

  const toggleModal = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };


  console.log(order);


  const [orderData, SetOrderData] = useState(null)
  useEffect(() => {

    order.forEach(order => {
      console.log(`Order ID: ${order._id}`);
      console.log(`Total Money: ${order.totalMoney}`);
      console.log(`Paid Status: ${order.paidStatus}`);
      console.log(`Transaction ID: ${order.tranjectionId}`);

      // Iterate through the cart items in this order
      Object.values(order.order.cart).forEach(cartItem => {

        SetOrderData(cartItem)

      });
    });

  })



  refetch();



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


            {order.map((item, index) => (

              // console.log(item.order.address?.address),



              <div className="w-full mt-5">

                {/* th is si the image work is starts */}
                <div className="w-full h-32 ">

                  {/* this is for the handle the 2 die product length and the product images */}
                  <div className="flex">

                    {/* this is the product length side */}
                    <div className=" flex justify-center items-center w-[14%] h-32 shadow-lg bg-white">
                      <div className="text-center ">

                        <p className="text-lg">Customer product</p>
                        <h1 className="text-2xl">
                          {/* {item.order.cart.length} */}
                          {Object.values(item.order.cart).length}

                        </h1>

                      </div>
                    </div>
                    {/* this is the product length  side ends */}

                    {/* this is the image side */}
                    <div className="w-[86%] pl-2 h-32 shadow-sm bg-white">

                      {/* images */}
                      <div key={index} className="flex gap-4">

                        {/* Display cart items */}
                        {Object.values(item.order.cart).map((cartItem, cartIndex) => (
                          console.log(cartItem),

                          <div className="" key={cartIndex}>
                            {/* Display images */}


                            {/* <img className="w-40 h-32" src="https://i.ibb.co/jRDShZf/Screenshot-2023-08-19-162626.png" alt="" /> */}
                            {Array.isArray(cartItem.imageurls) && cartItem.imageurls[0] &&
                              <img className=" border-2  p-2 w-40 h-32" src={cartItem.imageurls[0]} alt="" />

                            }

                            {/* <h1>hi i am mahedi</h1> */}

                          </div>
                        ))}
                      </div>



                    </div>
                  </div>
                  {/* this is for the handle the 2 die product length and the product images ends */}

                </div>
                {/* th is si the image option is end  */}

                {/* this is the product name and the address detail work starts */}
                <div className="w-full h-32 bg-white shadow-md ">
                  <div className="flex">
                    <div className="w-[18%] h-32">

                      <ul>
                        <li className="text-[13px]">{item.order.address?.address}</li>
                        <li className="text-[13px]">{item.order.address?.name}</li>
                        <li className="text-[13px]">{item.order.address?.mobile}</li>
                        <li className="text-[13px]">{item.order.address?.area}</li>
                      </ul>

                    </div>
                    <div className="w-[80%] h-32 ">
                      <div key={index} className="flex gap-2">

                        {/* Display cart items */}
                        {Object.values(item.order.cart).map((cartItem, cartIndex) => (
                          // console.log(cartItem)

                          <div key={cartIndex}>
                            {/* Display images */}


                            <h1 className="w-40 h-32 ">{cartItem.name}</h1>


                          </div>
                        ))}
                      </div>
                    </div>
                  </div>


                </div>
                {/* this is the product name and the address detail work ends */}

              </div>


            ))}

            {/* here is the order manage tables  ends*/}


          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
