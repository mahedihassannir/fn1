// Date:08/19/23
// Author: MASUM
// Description: All Beauty display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";
import { Link } from 'react-router-dom';


const Beauty = () => {
    // all products
    const { products, loading } = useProducts()

    // filter only beauty related data
    const beautyProducts = products.filter(beauty => beauty.category === "beauty")

    return (
        <section>
            {/* beauty swiper banner */}
            <div className='lg:mx-20 my-10'>
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
            {/* display beauty category */}
            <div className='flex  justify-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-16 gap-y-10 lg:mx-20 my-10 justify-center items-center text-center'>
                <Link to="/lips"><img src="https://i.ibb.co/k4mKbt5/beauty-category-1.jpg" alt="" /></Link>
                <Link to="/eyes"><img src="https://i.ibb.co/NTgJrMd/cf489e8d-5af8-4cdc-bf1c-4592f3cd462e-BD-185-250.jpg" alt="" /></Link>
                <Link to="/face"><img src="https://i.ibb.co/41DMyK9/220ea7f1-d952-433d-afb9-85b13141b51e-BD-185-250.jpg" alt="" /></Link>
                <Link to="/nails"><img src="https://i.ibb.co/WDctFGy/d724fbf3-3351-497c-9a9a-ce6d0c07be79-BD-185-250.jpg" alt="" /></Link>
                <Link to="/mensCare"><img src="https://i.ibb.co/Cv1m0Fc/a0228d35-5a1e-4d81-81c2-a29fa91a88e2-BD-185-250.png" alt="" /></Link>
                <img src="https://i.ibb.co/thK2xcp/ca4c73f4-3876-4d2d-b54e-a5b2dff1e48b-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/wM2z01S/2763e5ba-60b2-4dd4-8729-9ba370992b2e-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/R0r8v31/d14f5b27-0e86-4b5f-8b47-8ebfcc8991ec-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/r5Jh7Jv/e1c90907-31c7-4fb4-a179-25b421c591ba-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/SwQdBnC/821207a5-e30d-4232-93be-bed5f16ad1a3-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/gSCSLXt/003b8052-f91f-4b4b-9210-aa16ac140956-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/DgjRjL7/09339b91-68ff-4655-9fc0-2aecd18b55d7-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/yF4jwFQ/402eaf24-ad9b-4ceb-b040-cea92bcb2114-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/f0GT2vG/e9766ebe-e4d0-486f-a2f9-6dff2ff61169-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/RyhcKZ1/0612ce28-5748-460d-acdb-92d234e335ee-BD-185-250.png" alt="" />
                <img src="https://i.ibb.co/0V8w6Hb/81dcb063-22cb-4e64-9bc2-90dfe2c7ab8f-BD-185-250.jpg" alt="" />
                <img src="https://i.ibb.co/9cBNXMm/b222c861-8f8f-4855-ab72-fabced045c54-BD-185-250.jpg" alt="" />
                <img src="https://i.ibb.co/HdG70xT/e4bfb387-a627-4397-8071-594f051c650b-BD-185-250.png" alt="" />
                
            </div>
            </div>

            {/* display Beauty products */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    beautyProducts.map(beauty => <div key={beauty._id}>
                        <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg'>
                           <div className='relative'>
                           <img className='rounded-t-lg' src={beauty.image} alt="" />
                            <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                           </div>
                           <div className='pl-2'>
                           <div className='h-14 overflow-hidden'>
                           <p className='font-bold my-2 overflow-hidden'>{beauty.name}</p>
                           </div>
                           <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{beauty.price}</p>
                           <p className='line-through text-sm text-zinc-400'><span className='font-extrabold'>৳</span>{beauty.price}</p>
                           </div>
                           <div className='text-center'>
                           <button class="mt-4 bg-gray-200 w-full py-1 rounded  text-green-700 font-extrabold">Add To Cart</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Beauty;