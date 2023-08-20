// Date:08/20/2023
// Author:MASUM
// Description:Show male products

import { FaStar } from "react-icons/fa";
import useProducts from "../../../../Hooks/Fantastic/useProducts";

const Male = () => {
     // All Products From Hooks
     const { products,loading} = useProducts()

     // Filter Only Fashion Category
     const maleFashion = products.filter(male=>male.category==="male")
    return (
        <section>
        {/* banner */}
        <img className="my-10" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />


        {/* display male fashion product */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 lg:mx-20 my-10'>
            {
                maleFashion.map(male => <div key={male._id}>
                    <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg'>
                       <div className='relative'>
                       <img className='rounded-t-lg' src={male.image} alt="" />
                        <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                        <p className='absolute top-0  left-2 bg-orange-100 opacity-100 rounded-full text-orange-500 font-semibold px-1'>0 Sold</p>
                        <p className='absolute bottom-0  left-0 bg-orange-500 text-white font-bold px-1 flex items-center'><FaStar/>HOT</p>
                       </div>
                       <div className="pl-2">
                       <div className="h-14 overflow-hidden">
                       <p className='font-bold my-2 overflow-hidden'>{male.name}</p>
                       </div>
                       <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{male.price}</p>
                       </div>
                       <div className='text-center'>
                       <button className="mt-4 bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
                       </div>
                    </div>
                </div>)
            }
        </div>
    </section>
    );
};

export default Male;