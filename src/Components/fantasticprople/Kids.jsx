import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Kids = () => {
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
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg"/></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>

            </Swiper>
            <div className="grid grid-cols-6 gap-5 my-10">
                <div className=" grid gap-5 p-5 hover:shadow">
                    <img src={`https://gotoshop.com.bd/image/cache/catalog/multivendor/4/kidstoys/20201003_004613-500x500.jpg`} />
                    <h1 className=" font-semibold">Toy Name:</h1>
                    <div>
                        <p className=" font-bold">Price</p>
                        <p className=" text-sm line-through">100</p>
                    </div>
                    <button className=" text-green-700 font-bold uppercase rounded bg-gray-200 py-1 hover:bg-gray-100">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Kids;