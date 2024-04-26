// author:Nabila
// Date:18/8/2023
// Description:This par is for 'just for you'

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';
import useUserProfile from '../../Hooks/user/userProfile';


const FlashSale = () => {
    const [displaycount, SetdisplayCount] = useState(10)
    const authToken = localStorage.getItem("userToken")
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/user/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching user products data:', error);
            };
        };
        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    console.log(products);
    {/* <Link to={`/products/${singleProduct._id}`}> */ }
    return (
        <div className='lg-11/12 mx-auto   my-20 lg:mx-10'>

            <h2 className='text-3xl mb-4 font-bold ml-1'>Just For You</h2>


            <section className="">
                {/* main grid container */}
                <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
                    {products?.result?.map(data => <CardsOfProducts singleProduct={data} />)}
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
