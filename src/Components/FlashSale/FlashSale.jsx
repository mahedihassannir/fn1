// author:Nabila
// Date:18/8/2023
// Description:This par is for 'just for you'

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';


const FlashSale = () => {

    const [data, SetData] = useState([])

    useEffect(() => {


        fetch("http://localhost:5000/allcategory")

            .then(res => res.json())

            .then(data => {

                SetData(data)

            })
    }, [])


    return (
        <div className='lg-11/12 mx-auto   my-20'>
            <section className="">
                {/* main grid container */}
                <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">

                    {
                        data.splice(6, 10).map(res => <div>
                            {/* this is main card  div starts */}
                            <div className='lg:w-64 lg:h-96 w-56 h-96  bg-white hover:shadow-md hover:border-2 hover:duration-300 cursor-pointer'>
                                <img className='w-full h-56' src={res.image} alt="bag" />
                                <div className='p-4 bg-white'>
                                    {/* name */}
                                    <p className='font-bold pb-2'>{res.name}</p>
                                    {/* name ends */}

                                    {/* price sec */}
                                    <p className='text-[#FC9E66] text-lg font-bold'> {res.price}</p>
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
                                </div>
                            </div>
                        </div>)
                    }




                </div>

            </section>
            {/* this is the  flesh sell card section ends */}
            <div className='mx-auto text-center mb-12 mt-6'>
                <button className='py-3 px-32 rounded-lg bg-[#FC9E66] text-white font-bold text-lg text-center'>Load More</button>
            </div>

        </div>
    );
};

export default FlashSale;
