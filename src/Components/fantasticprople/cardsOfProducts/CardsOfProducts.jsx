import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardsOfProducts = ({ singleProduct, handle }) => {

  // const name = singleProduct.name.length < 10

  return <div onClick={handle} key={singleProduct._id}>
    <Link to={`/products/${singleProduct._id}`}>
      <div className=' relative lg:w-64 lg:h-[430px] w-56 h-[430px]  bg-white hover:shadow-md hover:border-2 hover:duration-300 cursor-pointer'>
        <img className='w-full h-56' src={singleProduct.image} alt="bag" />
        <div className='p-4 bg-white'>
          {/* name */}
          <p className='font-bold pb-2'>{singleProduct.name.slice(0, 30)}</p>
          {/* name ends */}

          {/* price sec */}
          <p className='text-[#FC9E66] text-lg font-bold'><span className='font-extrabold'>৳</span>{singleProduct.price}</p>
          {/* price sec ends */}

          <p><del>Tk900</del> -73%</p>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center'>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
            </div>
            <p>(11)</p>
          </div>

          <div className=' absolute bottom-0 w-full left-0 '>
            <Link to={`/products/${singleProduct._id}`}>
              <button className="  bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
    {/* <div className=' hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg '>
      <div className='relative'>
        <img className='rounded-t-lg' src={singleProduct.image} alt="" />
        <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
        {singleProduct.sold && <p className='absolute top-0  left-2 bg-orange-100 opacity-100 rounded-full text-orange-500 font-semibold px-1'>0 Sold</p>}
        {
          singleProduct.hot && <p className='absolute bottom-0  left-0 bg-orange-500 text-white font-bold px-1 flex items-center'><FaStar />HOT</p>
        }
      </div>
      <div className='pl-2'>
        <div className='h-14 overflow-hidden'>
          <p className='font-bold my-2 overflow-hidden'>{singleProduct.name}</p>
        </div>
        <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{singleProduct.price}</p>
      </div>
      <div className='text-center'>
        <Link to={`/products/${singleProduct._id}`}>
          <button className=" mt-4 bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
        </Link>
      </div>
    </div> */}
  </div >
};

export default CardsOfProducts;