// author:Nabila
// Date:18/8/2023
// Description:This par is for 'just for you'

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';


const FlashSale = () => {
    const [data, SetData] = useState([])

    const [displaycount, SetdisplayCount] = useState(10)

    const { products, loading } = useProducts()
    // const singleProductData = products.find((product)=>product?._id === id)

    useEffect(() => {


        fetch("http://localhost:5000/allcategory")

            .then(res => res.json())

            .then(data => {

                SetData(data)

            })
    }, [])

    {/* <Link to={`/products/${singleProduct._id}`}> */ }
    return (
        <div className='lg-11/12 mx-auto   my-20 lg:mx-10'>

            <h2 className='text-3xl mb-4 font-bold ml-1'>Just For You</h2>


            <section className="">
                {/* main grid container */}
                <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">



                    {
                        products.slice(0, displaycount).map(allcategory => <CardsOfProducts singleProduct={allcategory} />)
                    }



                </div>

            </section>
            {/* this is the  flesh sell card section ends */}
            <div className='mx-auto text-center mb-12 mt-6'>
                <button className='py-3 px-32 rounded-lg bg-[#FC9E66] text-white font-bold text-lg text-center' onClick={() => SetdisplayCount(displaycount + 10)}>Load More</button>
            </div>

        </div>
    );
};

export default FlashSale;
