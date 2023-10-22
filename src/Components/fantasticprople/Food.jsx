// Date:08/19/23
// Author: MASUM
// Description: All Food display
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from "../../Hooks/Fantastic/useProducts";
import CardsOfProducts from './CardsOfProducts/CardsOfProducts';


const Food = () => {
    // all products
    const { products, loading } = useProducts()
    // filter only food related data
    const foodProducts = products.filter(foods => foods.category === "food")

    return (
        <section>
            {/* food swiper banner */}
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

            {/* display Foods */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-30 gap-y-5 lg:mx-20 my-10'>
                {
                    foodProducts.map(foods => <CardsOfProducts singleProduct={foods} />)
                }
            </div>

        </section>
    );
};

export default Food;