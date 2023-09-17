import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from './CardsOfProducts/CardsOfProducts';

const Below = () => {
    {/*
             category thakbe below499 =>tk

             all products under 499 tk  that`
             s it
            
            then filter category === "below499"

            ok
            
            */}
    const { products } = useProducts()
    const below499 = products?.filter(x => x?.category === "below")

    return (
        <div className="m-10">
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
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/YbFwRqm/low-price.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/YbFwRqm/low-price.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/YbFwRqm/low-price.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/YbFwRqm/low-price.jpg" /></SwiperSlide>

            </Swiper>
            <div className="grid grid-cols-6 gap-5 my-10">
                {
                    below499?.map(x =>
                       <CardsOfProducts singleProduct={x}/>)
                }
            </div>
        </div>
    );
};

export default Below;