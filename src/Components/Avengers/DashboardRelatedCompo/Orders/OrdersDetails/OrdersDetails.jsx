/** @format */


/**
 * Author: MG Rakib
 * date: 22-08-2023
 * 
 */

import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoCloudDoneSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
const OrdersDetails = () => {
    const [showCategory, setShowCategory] = useState(false);
    const [showSorting, setShowSorting] = useState(false);
	return (
		<div>
			<p>Sales period:</p>

			{/* sorting  */}
			<div className='mt-1 flex justify-between items-center'>
				<div className='py-1 px-3 border bg-white rounded'>Date</div>

				{/* sort by category and name or price  */}
				<div className='flex justify-between items-center gap-5'>
					{/* sort by category */}
					<div
						onClick={() => setShowCategory(!showCategory)}
						className=' border py-1 px-3 bg-white rounded hover:border hover:border-blue-500 duration-500 cursor-pointer w-[180px] flex items-center justify-between relative'
					>
						<small>All Products</small>

						<small>
							<AiOutlineCaretDown
								className={`${
									showCategory && "rotate-180 "
								} duration-300`}
							/>
						</small>

						<div
							className={`px-3  bg-white shadow absolute w-full left-0 top-[115%] overflow-hidden rounded duration-500 ${
								!showCategory
									? "max-h-0 opacity-0"
									: "max-h-[200px] opacity-100 py-1"
							}`}
						>
							<div className='py-[4px]  text-[10px] font-semibold '>
								All Products
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Electronics
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Groceries
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Fashion
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Services
							</div>
						</div>
					</div>

					{/* sort by name or price  */}
					<div
						onClick={() => setShowSorting(!showSorting)}
						className=' border py-1 px-3 bg-white rounded hover:border hover:border-blue-500 duration-500 cursor-pointer w-[180px] flex items-center justify-between relative'
					>
						<small>All Products</small>

						<small>
							<AiOutlineCaretDown
								className={`${
									showSorting && "rotate-180 "
								} duration-300`}
							/>
						</small>

						<div
							className={`px-3  bg-white shadow absolute w-full left-0 top-[115%] overflow-hidden rounded duration-500 ${
								!showSorting
									? "max-h-0 opacity-0"
									: "max-h-[200px] opacity-100  py-1"
							}`}
						>
							<div className='py-[4px] text-[10px] font-semibold '>
								Default Sorting
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								By Name: A-Z
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								By Name: Z-A
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Ratting: High to Low
							</div>
							<div className='py-[4px]  text-[10px] font-semibold '>
								Ratting: Low to High
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* order details  */}
			<div className='mt-4  grid grid-cols-5 gap-5 '>
				{/* order completed */}
				<div className='px-3 py-4 col-span-1  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<div className='w-[30px] h-[30px] rounded-sm bg-[#035ECF] flex items-center justify-center text-xl text-white'>
							<IoCloudDoneSharp />
						</div>

						<div>
							<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
						</div>
					</div>
					{/* title  */}
					<small>
						<p className='font-semibold'>Orders Completed</p>
					</small>

					<div>
						<p className='text-2xl font-bold leading-4'>2345</p>
					</div>
				</div>

				{/* order confirmed */}
				<div className='px-3 py-4 col-span-1  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<div className='w-[30px] h-[30px] rounded-sm bg-[#00BA9D] flex items-center justify-center text-xl text-white'>
							<IoCloudDoneSharp />
						</div>

						<div>
							<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
						</div>
					</div>
					{/* title  */}
					<small>
						<p className='font-semibold'>Orders Completed</p>
					</small>

					<div>
						<p className='text-2xl font-bold leading-4'>2345</p>
					</div>
				</div>

				{/* order canceled  */}
				<div className='px-3 py-4 col-span-1  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<div className='w-[30px] h-[30px] rounded-sm bg-[#FF5470] flex items-center justify-center text-xl text-white'>
							<IoCloudDoneSharp />
						</div>

						<div>
							<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
						</div>
					</div>
					{/* title  */}
					<small>
						<p className='font-semibold'>Orders Completed</p>
					</small>

					<div>
						<p className='text-2xl font-bold leading-4'>2345</p>
					</div>
				</div>

				{/* order canceled  */}
				<div className='px-3 py-4 col-span-1  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<div className='w-[30px] h-[30px] rounded-sm bg-[#035ECF] flex items-center justify-center text-xl text-white'>
							<IoCloudDoneSharp />
						</div>

						<div>
							<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
						</div>
					</div>
					{/* title  */}
					<small>
						<p className='font-semibold'>Orders Completed</p>
					</small>

					<div>
						<p className='text-2xl font-bold leading-4'>2345</p>
					</div>
				</div>

				{/* order canceled  */}
				<div className='px-3 py-4 col-span-1  bg-white shadow-[0px_0px_10px_rgba(0,0,0,.2)] flex flex-col gap-2'>
					<div className='flex items-center justify-between'>
						<div className='w-[30px] h-[30px] rounded-sm bg-[#035ECF] flex items-center justify-center text-xl text-white'>
							<IoCloudDoneSharp />
						</div>

						<div>
							<HiOutlineDotsVertical className='cursor-pointer text-xl text-[#035ecf]' />
						</div>
					</div>
					{/* title  */}
					<small>
						<p className='font-semibold'>Orders Completed</p>
					</small>

					<div>
						<p className='text-2xl font-bold leading-4'>2345</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrdersDetails;
