import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useProducts from '../../Hooks/Fantastic/useProducts';

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
                    kids?.map((x, index) =>
                        <div key={index} className=" grid gap-5 p-5 hover:shadow">
                            <img src={x.image} />
                            <h1 className=" font-semibold">{x.name}</h1>
                            <div>
                                <p className=" font-bold">{x.price}</p>
                                <p className=" text-sm line-through">100</p>
                            </div>
                            <button className=" text-green-700 font-bold uppercase rounded bg-gray-200 py-1 hover:bg-gray-100">Add To Cart</button>
                        </div>)
                }
            </div>
        </div>

    </section>
    );
};

export default Kids;