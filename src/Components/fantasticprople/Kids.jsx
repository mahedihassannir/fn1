import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from './CardsOfProducts/CardsOfProducts';

const Kids = () => {
    const { products } = useProducts()
    const kids = products?.filter(x => x?.category ==="kids")
    return (
        <section>
        {/* kids swiper banner */}
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
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg"/></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>

            </Swiper>
            <div className="grid grid-cols-6 gap-5 my-10">
            {
                    kids?.map((x) =>
                        <CardsOfProducts singleProduct={x}/>)
                }
            </div>
        </div>

    </section>
    );
};

export default Kids;