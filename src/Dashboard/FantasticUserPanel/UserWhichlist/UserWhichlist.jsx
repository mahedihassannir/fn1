import { RxCross1 } from 'react-icons/rx';

const UserWhichlist = () => {
    return (
        <div>
            <h1 className="text-center uppercase text-gray-600 text-xl font-semibold">Wishlist</h1>
            <div>
                <table className="mx-auto my-20 w-full bg-gray-50">
                    <thead>
                        <tr className="grid grid-cols-5 text-gray-700 py-5">
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-black flex justify-center border-t-0'><RxCross1 /></td>
                            <td className=' border-t-0'><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td className=' border-t-0'>Product Name</td>
                            <td className=' border-t-0'>1000 Taka</td>
                            <td className=' border-t-0'><button className='bg-black text-white px-2 py-1 hover:bg-gray-800'>Add to Cart</button></td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-black flex justify-center border-t-0'><RxCross1 /></td>
                            <td className=' border-t-0'><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td className=' border-t-0'>Product Name</td>
                            <td className=' border-t-0'>1000 Taka</td>
                            <td className=' border-t-0'><button className='bg-black text-white px-2 py-1 hover:bg-gray-800'>Add to Cart</button></td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-black flex justify-center border-t-0'><RxCross1 /></td>
                            <td className=' border-t-0'><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td className=' border-t-0'>Product Name</td>
                            <td className=' border-t-0'>1000 Taka</td>
                            <td className=' border-t-0'><button className='bg-black text-white px-2 py-1 hover:bg-gray-800'>Add to Cart</button></td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-black flex justify-center border-t-0'><RxCross1 /></td>
                            <td className=' border-t-0'><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td className=' border-t-0'>Product Name</td>
                            <td className=' border-t-0'>1000 Taka</td>
                            <td className=' border-t-0'><button className='bg-black text-white px-2 py-1 hover:bg-gray-800'>Add to Cart</button></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h1 className=' text-center text-xl'>You have not selected any Item!</h1>
                </div>
            </div>
        </div>
    );
};

export default UserWhichlist;