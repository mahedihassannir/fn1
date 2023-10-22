
import React from 'react';
import {FaExclamationCircle, FaGreaterThan, FaToggleOn, } from 'react-icons/fa';
const AccStatement = () => {
    return (
        <div className='bg-base-100 pb-10 px-5'>
<h2 className='text-2xl font-bold pt-4'>Account Statement</h2>
           <div className='flex gap-10'>
<div>
<h2 className='text-xl font-bold py-4'>Payment Method</h2>
<div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded space-y-4'>
<div className='flex justify-between p-3'>
<div className='relative'>
<button className="px-5 py-3 rounded-md bg-blue-700 text-white font-semibold border">PRE PAID</button>
<p className='text-xl absolute bottom-2'>Auto-top-up</p>
</div>
<div className='space-y-3'>
<p className='text-xl '>Available Credit</p>
<h2 className='text-xl font-semibold'>BDT 0</h2>
<button className='px-3 py-1 text-white rounded-lg font-bold text-center bg-orange-500 text-xl'>Top Up</button>
<p className='w-12 h-10'><FaToggleOn className='w-12 h-12 text-orange-600'></FaToggleOn></p>
</div>
</div>
<hr className='px-3 h-0.5'/>
<div className='flex justify-between px-4 py-4'>
<p className='text-xl'>Promotional credit balance</p>
<p className='flex gap-x-3 font-semibold items-center text-xl'>BDT 2,500 <span> <FaExclamationCircle className='text-orange-600'></FaExclamationCircle> </span></p>
</div>
</div>
</div>

<div>
<h2 className='text-xl font-bold p-4'>Monthly Summary</h2>
<div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded'>
<div className='bg-base-300 flex justify-between items-center gap-x-8 p-4'>
 <p className='text-xl'>Available Credit</p>
<p className='text-xl font-semibold'>BDT 30</p>
</div>
<div className='flex justify-between items-center gap-x-8  p-4'>
 <p className='text-xl'>Opening Credit</p>
<p className='text-xl font-semibold'>BDT 40</p>
</div>
<div className='flex justify-between items-center gap-x-8 p-4'>
 <p className='text-xl'>Add-Top Up-Store Earning</p>
<p className='text-xl font-semibold'>BDT 10</p>
</div>
<div className='flex justify-between items-center gap-x-8 p-4'>
 <p className='text-xl'>Less:Net Ad spend this month</p>
<p className='text-xl font-semibold'>BDT 20</p>
</div>
<div className='flex justify-between items-center gap-x-8 p-4'>
 <p className='text-xl'>Less:Tax dedication</p>
<p className='text-xl font-semibold'>BDT 70</p>
</div>
<div className='flex justify-between items-center gap-x-8 p-4'>
 <p className='text-xl'>Available Credit</p>
<p className='text-xl font-semibold'>BDT 80</p>
</div>

</div>
</div>
</div> 

<div className='flex gap-6 items-center mt-10'>
<p className='text-xl text-orange-600'>Transaction History</p>
<p className='text-xl'>Invoices</p>
</div>    
<hr  className='h-1.5 mt-2  w- bg-orange-600'/>    

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

