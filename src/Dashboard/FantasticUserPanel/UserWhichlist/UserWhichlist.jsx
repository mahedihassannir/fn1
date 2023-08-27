import { RxCross1 } from 'react-icons/rx';

const UserWhichlist = () => {
    return (
        <div>
            <h1 className="text-center uppercase text-gray-600 text-xl font-semibold">Wishlist</h1>
            <div>
                <table className="mx-auto my-20 w-full border-b-2">
                    <thead>
                        <tr className="grid grid-cols-5 text-gray-500">
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-red-700'><RxCross1/></td>
                            <td><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td>Product Name</td>
                            <td>1000 Taka</td>
                            <td className=" underline text-green-600">Add to Cart</td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-red-700'><RxCross1/></td>
                            <td><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td>Product Name</td>
                            <td>1000 Taka</td>
                            <td className=" underline text-green-600">Add to Cart</td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-red-700'><RxCross1/></td>
                            <td><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td>Product Name</td>
                            <td>1000 Taka</td>
                            <td className=" underline text-green-600">Add to Cart</td>
                        </tr>
                        <tr className=" grid grid-cols-5 bg-white">
                            <td className=' text-xl text-red-700'><RxCross1/></td>
                            <td><img src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg" alt="" className=" w-20" /></td>
                            <td>Product Name</td>
                            <td>1000 Taka</td>
                            <td className=" underline text-green-600">Add to Cart</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserWhichlist;