import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import useUserProfile from "../../../Hooks/user/userProfile";
import Rating from "react-rating";

const UserOrder = () => {
    const authToken = localStorage.getItem("userToken");
    const userProfile = useUserProfile(authToken);

    console.log(userProfile);


    return (
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
                        <th className='w-[12%]'>products</th>
                    </tr>
                </thead>

                {/* order tabel body  */}
                {userProfile?.sanitizedResult?.orderHistory.map((res, index) => (
                    <tbody className='font-bold'>
                        <tr className=' '>
                            {/* id col  */}
                            <td className='text-blue-600 w-[8%] '>
                                #<span>{index + 1}</span>
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
                                        {res.products.map((product) => (

                                            <div className='text-[10px] text-gray-400'>
                                                <p>product name : </p>
                                                <p>quantity: {product?.quantity}</p>
                                                
                                            </div>


                                        ))}
                                    </div>
                                </div>
                            </td>

                            {/* category  */}
                            <td className=' w-[20%]'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-[25px] h-[25px] bg-[#035ECF] rounded'></div>
                                </div>
                            </td>

                            {/* payment */}
                            <td className=' w-[20%] flex-col items-start'>
                                <p className=''>
                                    $<span>{res.totalPrice}</span>
                                </p>
                                <small>
                                    <p className='text-gray-500'>{res.paymentMethod}</p>
                                </small>
                            </td>

                            {/* order status  */}
                            <td className=' w-[20%]'>
                                <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                    {res.status}
                                </div>
                            </td>
                            {/* rating  */}
                            <td className=' w-[12%]'>
                                {res?.products?.length}
                            </td>
                        </tr>

                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default UserOrder;