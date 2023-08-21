import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardsOfProducts = ({singleProduct}) => {
    return <div key={singleProduct._id}>
    <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg '>
       <div className='relative'>
      <Link to={`/products/${singleProduct._id}`}> <img className='rounded-t-lg' src={singleProduct.image} alt="" /></Link>
        <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
        <p className='absolute top-0  left-2 bg-orange-100 opacity-100 rounded-full text-orange-500 font-semibold px-1'>0 Sold</p>
        <p className='absolute bottom-0  left-0 bg-orange-500 text-white font-bold px-1 flex items-center'><FaStar/>HOT</p>
       </div>
       <div className='pl-2'>
       <div className='h-14 overflow-hidden'>
       <p className='font-bold my-2 overflow-hidden'>{singleProduct.name}</p>
       </div>
       <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{singleProduct.price}</p>
       </div>
       <div className='text-center'>
       <button className=" mt-4 bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
       </div>
    </div>
</div>
};

export default CardsOfProducts;