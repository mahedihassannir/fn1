// Date:08/19/23
// Author:MASUM
// Description:Display All Fashion Products

import { Link } from "react-router-dom";
import useProducts from "../../Hooks/Fantastic/useProducts";
import { FaStar } from 'react-icons/fa';


const Fashion = () => {
    // All Products From Hooks
    const { products,loading} = useProducts()
   // console.log(products)
    // Filter Only Fashion Category
    const allFashionProducts = products.filter(FashionProducts=>FashionProducts.category2==="fashion")
    //console.log(allFashionProducts)
    return (
        <section>
            {/* fashion banner */}
            <img className="my-10" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />

           {/* category */}
            <div className='bg-slate-100 mx-5'>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <img src="https://gcp-img.slatic.net/lazada/bc40bb83-b2d0-4f30-a757-bdd7a1ba1a32_BD-388-180.png" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/676da7c0-9e8d-479f-aeab-74656f97c068_BD-388-180.png" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/8804da9d-40b7-470d-b95f-88864c980f58_BD-388-180.png" alt="" />
        </div>
         {/* Display Male And Female Category link with image */}
        <div className='pb-5 flex flex-col items-center lg:flex-row gap-5 justify-center'>
            <Link to="/male"><img src="https://gcp-img.slatic.net/lazada/3dfb8aa9-f5a0-4d47-bab8-2f7c578a79b2_BD-588-681.jpg" alt="" /></Link>
            <Link to="/female"><img src="https://gcp-img.slatic.net/lazada/aeee6c4d-1539-4d83-b4a8-82e08f631eb8_BD-588-681.jpg" alt="" /></Link>
        </div>
            </div>


            {/* display all fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    allFashionProducts.map(fashionProducts => <div key={fashionProducts._id}>
                        <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg '>
                           <div className='relative'>
                          <Link to={`/products/${fashionProducts._id}`}> <img className='rounded-t-lg' src={fashionProducts.image} alt="" /></Link>
                            <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                            <p className='absolute top-0  left-2 bg-orange-100 opacity-100 rounded-full text-orange-500 font-semibold px-1'>0 Sold</p>
                            <p className='absolute bottom-0  left-0 bg-orange-500 text-white font-bold px-1 flex items-center'><FaStar/>HOT</p>
                           </div>
                           <div className='pl-2'>
                           <div className='h-14 overflow-hidden'>
                           <p className='font-bold my-2 overflow-hidden'>{fashionProducts.name}</p>
                           </div>
                           <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{fashionProducts.price}</p>
                           </div>
                           <div className='text-center'>
                           <button class=" mt-4 bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Fashion;