// Date:08/19/23
// Author: MASUM
// Description: All homeAcc display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";


const HomeAcc = () => {
    // all products
    const { products, loading } = useProducts()

    // filter only homeAcc related data
    const homeAccProducts = products.filter(homeAcc => homeAcc.category === "homeacc")
   

    return (
        <section>
            {/* HomeAcc swiper banner */}
            
            {/* display homeAcc Link images */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:px-20 my-20'>
            <img src="https://gcp-img.slatic.net/lazada/86a4ac37-7bf4-457c-ae9b-6897c2c16082_BD-288-300.jpg" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/3e396865-2a3c-4217-8d1d-96996958d05c_BD-288-300.jpg" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/db711df1-2c95-485c-ad13-50be454a981f_BD-288-300.jpg" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/e6937c31-2afb-49ae-99e1-a91e47e3c4fe_BD-288-300.jpg" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/51412aef-9f11-403c-addb-6c50b33b4e61_BD-288-300.jpg" alt="" />
            <img src="https://gcp-img.slatic.net/lazada/e83ed0a5-fdec-44a0-9eb3-916814498da8_BD-288-300.jpg" alt="" />
            </div>

            {/* display homeAcc cool images */}
            <div className='my-10'>
            <img className='' src="https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN01nyj7lJ1iMn9qaai8i_!!6000000004399-0-tps-1920-990.jpg" alt="" />
            <div className='flex justify-center my-10'>
            <img src="https://gcp-img.slatic.net/lazada/c1533efd-08f9-43c1-80f1-24ca13d8d46b_BD-1188-90.jpg" alt="" />
            </div>
            <img src="https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN018pB5341eYSmtIa6gk_!!6000000003883-0-tps-1920-984.jpg" alt="" />
            </div>

            {/* display homeAcc products */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    homeAccProducts.map(homeAcc => <div key={homeAcc._id}>
                        <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg'>
                           <div className='relative'>
                           <img className='rounded-t-lg' src={homeAcc.image} alt="" />
                            <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                           </div>
                           <div className='pl-2'>
                           <div className='h-14 overflow-hidden'>
                           <p className='font-bold my-2 overflow-hidden'>{homeAcc.name}</p>
                           </div>
                           <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{homeAcc.price}</p>
                           <p className='line-through text-sm text-zinc-400'><span className='font-extrabold'>৳</span>{homeAcc.price}</p>
                           </div>
                           <div className='text-center'>
                           <button className="mt-4 bg-gray-200 w-full py-1 rounded  text-green-700 font-extrabold">Add To Cart</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default HomeAcc;