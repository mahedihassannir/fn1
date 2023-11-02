
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaExclamationCircle, FaGreaterThan, FaToggleOn, } from 'react-icons/fa';
import UseSellerDeliveredData from '../../../../Hooks/UsesellerdeliveredData/UsesellerdeliveredData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data } from 'autoprefixer';
// here is the all imports


const AccStatement = () => {
  // all stats starts
  // 1
  const [errMessage, seterr] = useState();//1
  // 2
  const [selectValue, Setselect] = useState(null);//2
  // 3
  const [deliveredData, refetch] = UseSellerDeliveredData();//3
  // 4
  // seller data 
  const [seller, Setseller] = useState(null);//4
  // ens of al stats


  // here is getting seller Data
  useEffect(() => {

    const fetchData = async () => {

      const id = localStorage.getItem("userID")
      console.log(id);

      try {
        const response = await axios.get(`http://localhost:5000/seller_data/${id}`);
        const sellerData = response.data;

        Setseller(sellerData);

        console.log({ sellerData });
        console.log(sellerData);



        // Set sellerData in your component state or context for rendering.
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    }

    fetchData();

  }, [])
  console.log(seller);
  // seller data ends




  const handleSelection = (e) => {

    Setselect(e.target.value)

  }
  console.log(selectValue);



  console.log("121212", deliveredData);


  const totalMoney = seller?.sellerAccountBalance


  const handleFromOnSubmit = (e) => {
    e.preventDefault();

    const from = e.target;

    const withwraAmount = from.amount.value
    const paymentMethod = selectValue
    const mobilenumber = from.mobilenumber.value

    const all = totalMoney - withwraAmount
    console.log("concatinate", all);

    if (totalMoney < withwraAmount) {

      seterr("NOT ENOUGH MONEY ")
      return toast.error(`তোলার জন্য পর্যাপ্ত টাকা নেই ${totalMoney} 💸`)


    }

    if (totalMoney > withwraAmount) {

      seterr(!errMessage)

    }


    if (mobilenumber.length !== 11 && mobilenumber.length < 11) {


      return toast.warn("YOUR NUMBER ARE NOT 11 digit")


    }

    const Data = {

      withwraAmount: withwraAmount,
      paymentMethod: paymentMethod,
      seller,
      mobile: mobilenumber

    }


    fetch("http://localhost:5000/seller_payment_req", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(Data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })





    console.log(Data);

  }







  refetch();
  return (
    <div className='bg-base-100 pb-10 px-5'>
      <ToastContainer />
      <div className="flex items-center ">

        <h2 className='text-2xl font-bold '>Account Statement</h2>


        <h1 className='font-semibold lg:text-lg lg:pl-20 text-red-300'>সর্বোচ্চ মাসিক উত্তোলনের পরিমাণ <span className='text-red-500'>৫</span> লাখ টাকা</h1>


      </div>
      <div className='lg:flex md:flex gap-10'>
        <div>
          <h2 className='text-xl font-bold py-4'>পেমেন্ট পদ্ধতি</h2>
          {/* this is the acc div  */}
          <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded space-y-4'>
            <div className='flex justify-between gap-2 p-3'>
              <form onSubmit={handleFromOnSubmit} className='relative w-3/4'>

                {/* this div is for the select payment method */}
                <div className="">
                  <label htmlFor="" className=''>
                    <span className='text-red-500 font-medium'> 💅select payment method</span>
                  </label>
                  <br />
                  {/* here is the select options */}
                  <select onChange={handleSelection} className=' py-2 px-4 border-2 border-green-500 hover:border-blue-600 rounded-md' value={selectValue} required>
                    {/* 1 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Select </option>
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Bkash👌 </option>
                    {/* 2 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Nagad ✌️</option>
                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Rocket 👍</option>

                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>Check&&br 😍</option>
                    {/* 3 */}
                    <option className='py-2 text-blue-400 text-md font-medium font-sans'>card 😎</option>

                    {/*  */}

                  </select>
                  {/* here is the select options ends */}

                </div>
                {/* this div is for the select payment method ends */}

                {/* recive ammount number  */}

                <div className="mt-4">
                  <label htmlFor="">
                    <span>Mobile Number for money recive 💸</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-2 pl-1  rounded-md  focus:text-blue-500' type="number" name="mobilenumber" placeholder='Mobile number for money recive' required />
                </div>
                {/* recive ammount number  ends */}

                {/* this div is for the amount  */}
                <div className="mt-3">

                  <label htmlFor="">
                    <span> write your amount 💸</span>
                  </label>
                  <br />
                  <input className='text-md font-semibold outline-none border-2 hover:border-blue-500 border-green-500 w-full  py-3 pl-2 rounded-md  focus:text-blue-500' type="number" name="amount" placeholder='Write your amount 💰' required />

                </div>
                {/* this div is for the amount  */}

                {/* this div is for the withawra payment btn */}

                <div className="mt-5 pl-2 ">
                  <button type='submit' className=" hover:text-black font-semibold py-2 px-3 bg-orange-600 text-white rounded-md">
                    withawra now
                  </button>

                </div>

                {/* this div is for the withawra payment btn ends */}


              </form>
              {/* ends of the payment selection */}

              {/* satrts balance sheet */}
              <div className='space-y-3 w-1/2 '>
                <p className='text-xl '>Main balance</p>
                <h2 className='text-xl  font-semibold'>BDT
                  <span className='pl-2 pr-2 bg-blue-800 text-white'>{totalMoney}</span>
                  <span>💸</span>
                </h2>
                <button className='px-3 py-1 text-white rounded-lg font-bold text-center bg-orange-500 text-xl'>Top Up</button>
                <p className='w-12 h-10'><FaToggleOn className='w-12 h-12 text-orange-600'></FaToggleOn></p>
              </div>
              {/* satrts balance sheet */}
              {/* ends */}
            </div>
            <hr className='px-3 h-0.5' />
            <div className='flex justify-between px-4 py-4'>
              <p className='text-xl'>Promotional credit balance</p>
              <p className='flex gap-x-3 font-semibold items-center text-xl'>2,500 টাকা <span> <FaExclamationCircle className='text-orange-600'></FaExclamationCircle> </span></p>
            </div>
          </div>
        </div>
        {/* ends */}
        <div>
          <h2 className='text-xl font-bold p-4'>Monthly Summary</h2>
          <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded'>
            <div className='bg-base-300 flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Available balance</p>
              <p className='text-xl font-semibold'> ৫000 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8  p-4'>
              <p className='text-xl'>Bonus </p>
              <p className='text-xl font-semibold'>৫ টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Add-Top Up-Store Earning</p>
              <p className='text-xl font-semibold'>10 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Less:Net Ad spend this month</p>
              <p className='text-xl font-semibold'>20 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Less:Tax dedication</p>
              <p className='text-xl font-semibold'>0 টাকা</p>
            </div>
            <div className='flex justify-between items-center gap-x-8 p-4'>
              <p className='text-xl'>Available Credit</p>
              <p className='text-xl font-semibold'>80 টাকা</p>
            </div>

          </div>
        </div>
      </div>

      <div className='flex gap-6 items-center mt-10'>
        <p className='text-xl text-orange-600'>Transaction History</p>
        <p className='text-xl'>Invoices</p>
      </div>
      <hr className='h-1.5 mt-2  w- bg-orange-600' />

      {/* 2 input field create */}
      <div className='flex justify-end gap-5 mt-8 pb-5'>
        <select name="" className=" border-2 border-gray-500 px-2 w-1/3 text-lg font-semibold  text-gray-600" id="">
          <option value="">Transaction Type</option>
          <option value="Bkash">Bkash</option>
          <option value="Nagad">Nagad</option>
          <option value="Rocket">Rocket</option>
        </select>
        <div className='border-2 border-gray-500 flex gap-5'>
          <span className='font-semibold'>Start date:</span>
          <input type="date" name="" id="" />
          <span className='font-semibold'>End date:</span>
          <input type="date" name="" id="" />
        </div>
      </div>

      <div className="overflow-x-auto my-5 w-full border rounded-xl">
        <table className="table w-full">
          {/* head */}
          <thead className=''>
            <tr className='grid grid-cols-5'>
              <th>Transaction Date</th>
              <th>Ad Tpe</th>
              <th>Transaction Type</th>
              <th>Transaction Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className='grid grid-cols-5 text-lg'>
              <td>06/09/2023</td>
              <td>search</td>
              <td>Promo Credit</td>
              <td>PA000000454253</td>
              <td>BDT 2,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccStatement;

