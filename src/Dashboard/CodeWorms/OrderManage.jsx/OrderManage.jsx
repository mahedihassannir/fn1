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


  console.log(orderData);
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
        <div className="min-w-[900px]">
          <table className="text-[11px]  w-full">
            {/* order table head  */}
            <thead>
              <tr className="uppercase   py-5 text-blue-600">
                <th className="w-[8%] ">Document</th>
                <th className="w-[8%] ">Order No</th>
                <th className="w-[9%]">Ordaer Date</th>
                <th className="w-[11%]">Pending Since</th>
                <th className="w-[12%]">Payment Method</th>
                <th className="w-[9%]">Retail Price</th>
                <th className="w-[3%]">#</th>
                <th className="w-[8%]">Status</th>
                <th className="w-[14%]">Ship-on-Time SLA</th>
                <th className="w-[9%]">Printed</th>
                <th className="w-[9%]">Actions</th>
              </tr>
            </thead>

            {/* order tabel body  */}

            {
              order.map((order, index) => <tbody key={order._id} className="font-bold flex ">

                {/* {
                  order.cart.forEach(item => (console.log(item)))
                } */}
                <tr className=" ">
                  {/* id col  */}
                  <td className="text-blue-600 w-[6%] ">
                    #<span>1254</span>
                  </td>

                  {/* product and product image  */}
                  <td className=" w-[12%]">
                    <div className="flex items-center">
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p>${
                          order.order.totalMoney

                        }</p>
                        <div className="text-[10px] text-gray-400">
                          <p>Regular Price: 870</p>
                          <p>Sale Price: 600</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* category  */}
                  <td className=" w-[11%]">
                    <div className="flex items-center gap-4">
                      <p>Electronics</p>
                    </div>
                  </td>

                  {/* payment */}
                  <td className=" w-[9%] flex-col items-start">
                    <p className="">
                      $<span>
                        {/* TODO */}
                      </span>
                    </p>
                    <small>
                      <p className="text-gray-500">Fully Paid</p>
                    </small>
                  </td>
                  <td className=" w-[10%] flex-col items-start">
                    <p className="">
                      $<span>${order?.cart?.singleProductData?.price}</span>
                    </p>
                    <small>
                      <p className="text-gray-500">COD</p>
                    </small>
                  </td>
                  <td className=" w-[9%] flex-col items-start">
                    <p className="">
                      $<span>600</span>
                    </p>
                    <small>
                      <p className="text-gray-500">Fully Paid</p>
                    </small>
                  </td>
                  <td className=" w-[6%] flex-col items-start">
                    <p className="">
                      $<span>600</span>
                    </p>
                    <small>
                      <p className="text-gray-500">Fully Paid</p>
                    </small>
                  </td>
                  <td className=" w-[8%] flex-col items-start">
                    <p className="">
                      $<span>600</span>
                    </p>
                    <small>
                      <p className="text-gray-500">Fully Paid</p>
                    </small>
                  </td>

                  {/* order status  */}
                  <td className=" w-[10%]">
                    <div className="uppercase ">Completed</div>
                  </td>
                  {/* rating  */}
                  <td className=" w-[10%]">
                    <Rating
                      readonly
                      placeholderRating={3.5}
                      emptySymbol={<FaStarHalfAlt className="text-yellow-500" />}
                      placeholderSymbol={<FaStar className="text-yellow-500" />}
                    />
                  </td>

                  {/* ends */}

                  <td className='w-[5%] flex items-start' key={order.id}>
                    <div className='p-[6px] hover:bg-[#F5F5F5] rounded flex items-center justify-center text-sm cursor-pointer mx-auto relative'>
                      <PiDotsThreeVerticalBold onClick={() => toggleModal(index)} />

                      <div
                        className={`bg-white absolute top-[100%] text-[11px] right-0 overflow-hidden duration-300 shadow-md ${modalStates[index] ? "max-h-[500px]" : "max-h-[0px]"}`}
                      >
                        <ul className='w-[100px]'>
                          <li className='py-1 px-3 hover:bg-gray-200 text-green-600'>
                            prossing
                          </li>
                          <li className='py-1 px-3 hover:bg-gray-200 text-green-600'>
                            placed
                          </li>
                          <li className='py-1 px-3 hover:bg-gray-200 text-lime-600'>
                            Shipe
                          </li>
                          <li className='py-1 px-3 hover:bg-gray-200 text-red-600'>
                            Delivered
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>

              )
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
