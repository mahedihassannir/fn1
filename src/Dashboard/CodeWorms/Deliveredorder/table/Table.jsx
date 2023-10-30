
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import '../../../../ExtraCss/ExtraCss.css'
import Rating from 'react-rating';
import { FaBeer, FaStar, FaStarHalfAlt } from "react-icons/fa";



const Table = () => {
    return (
        <div>


            {/* Order table  */}
            <div className='mt-4 bg-white rounded px-3 overflow-x-auto'>
                <div className='min-w-[900px]'>
                    <table className='text-[11px]  w-full'>
                        {/* order table head  */}
                        <thead>
                            <tr className='uppercase   py-5 text-blue-600'>
                                <th className='w-[8%] '>#Order</th>
                                <th className='w-[20%] '>Product</th>
                                <th className='w-[20%]'>Category</th>
                                <th className='w-[20%]'>Payment</th>
                                <th className='w-[20%]'>Order Status</th>
                                <th className='w-[12%]'>Rate</th>
                            </tr>
                        </thead>

                        {/* order tabel body  */}
                        <tbody className='font-bold'>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
                                </td>

                                {/* product and product image  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                src=''
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p>Oculus Quest 2 VR Headset 64GB</p>
                                            <div className='text-[10px] text-gray-400'>
                                                <p>Regular Price: 870</p>
                                                <p>Sale Price: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* category  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[25px] h-[25px] bg-[#035ECF] rounded'></div>
                                        <p>Electronics</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Fully Paid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                        Completed
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
                                    <Rating
                                        readonly
                                        placeholderRating={3.5}
                                        emptySymbol={
                                            <FaStarHalfAlt className='text-yellow-500' />
                                        }
                                        placeholderSymbol={
                                            <FaStar className='text-yellow-500' />
                                        }
                                    />
                                </td>
                            </tr>

                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
                                </td>

                                {/* product and product image  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                src=''
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p>Oculus Quest 2 VR Headset 64GB</p>
                                            <div className='text-[10px] text-gray-400'>
                                                <p>Regular Price: 870</p>
                                                <p>Sale Price: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* category  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[25px] h-[25px] bg-[#FF5470] rounded'></div>
                                        <p>Electronics</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#FF5470] text-white rounded-md'>
                                        Cancelled
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
                                    <Rating
                                        readonly
                                        placeholderRating={3.5}
                                        emptySymbol={
                                            <FaStarHalfAlt className='text-yellow-500' />
                                        }
                                        placeholderSymbol={
                                            <FaStar className='text-yellow-500' />
                                        }
                                    />
                                </td>
                            </tr>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
                                </td>

                                {/* product and product image  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                src=''
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p>Oculus Quest 2 VR Headset 64GB</p>
                                            <div className='text-[10px] text-gray-400'>
                                                <p>Regular Price: 870</p>
                                                <p>Sale Price: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* category  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[25px] h-[25px] bg-[#F8D518] rounded'></div>
                                        <p>Services</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#00BA9D] text-white rounded-md'>
                                        Confirmed
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
                                    <Rating
                                        readonly
                                        placeholderRating={3.5}
                                        emptySymbol={
                                            <FaStarHalfAlt className='text-yellow-500' />
                                        }
                                        placeholderSymbol={
                                            <FaStar className='text-yellow-500' />
                                        }
                                    />
                                </td>
                            </tr>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
                                </td>

                                {/* product and product image  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                src=''
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p>Oculus Quest 2 VR Headset 64GB</p>
                                            <div className='text-[10px] text-gray-400'>
                                                <p>Regular Price: 870</p>
                                                <p>Sale Price: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* category  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[25px] h-[25px] bg-[#00193B] rounded'></div>
                                        <p>Groceries</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#515C6B] text-white rounded-md'>
                                        Refunded
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
                                    <Rating
                                        readonly
                                        placeholderRating={3.5}
                                        emptySymbol={
                                            <FaStarHalfAlt className='text-yellow-500' />
                                        }
                                        placeholderSymbol={
                                            <FaStar className='text-yellow-500' />
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* pagination for order  */}
            <div className='px-3 mt-4'>
                <div className='text-xs font-semibold flex items-center gap-2'>
                    <div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
                        <BiChevronsLeft />
                    </div>
                    <button className='w-[25px] h-[25px] bg-[#035ECF] flex items-center justify-center text-white rounded'>
                        1
                    </button>
                    <button className='w-[25px] h-[25px] border border-[#035ECF] flex items-center justify-center text-[#035ECF] hover:bg-[#035ECF] hover:text-white duration-150 rounded'>
                        2
                    </button>

                    <div className='w-[25px] h-[25px]  flex items-center justify-center text-[#035ECF] text-xl cursor-pointer font-normal rounded'>
                        <BiChevronsRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;