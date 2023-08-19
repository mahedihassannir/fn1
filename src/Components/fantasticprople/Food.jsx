// Date:8/9/23
// Author: MASUM
// Description: All Food display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";


const Food = () => {
    // all products
    const { products, loading } = useProducts()
    console.log(products)

    // filter only food related data
    const foodProducts = products.filter(foods => foods.category === "food")
   

    return (
        <section>
            {/* food swiper banner */}
            <div className='mb-20 mx-20'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/8f730e50-b4a8-49f1-8f32-65c7ba064da5_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full' src="https://gcp-img.slatic.net/lazada/514f9952-7f9f-4cf3-9ef1-b717ffdf93de_BD-1188-344.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </div>

            {/* display Foods */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 mx-20'>
                {
                    foodProducts.map(foods => <div key={foods._id}>
                        <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg'>
                           <div className='relative'>
                           <img className='rounded-t-lg' src={foods.image} alt="" />
                            <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                           </div>
                           <p className='font-bold my-2'>{foods.name}</p>
                           <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{foods.price}</p>
                           <p className='line-through text-sm text-zinc-400'><span className='font-extrabold'>৳</span>{foods.price}</p>
                           <div className='text-center'>
                           <button class="hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer mt-4 bg-gray-200 w-full py-1 rounded  text-green-700 font-extrabold">Add To Cart</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Food;