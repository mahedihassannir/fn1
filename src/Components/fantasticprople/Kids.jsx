import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardsOfProducts from './CardsOfProducts/CardsOfProducts';
import useProducts from '../../Hooks/Fantastic/useProducts';

const Kids = () => {
    const { products } = useProducts();
    console.log(products);

    // filter only food related data
    const kidsProducts = products?.result?.filter(product => product.secondCategory === "kids");
    console.log(kidsProducts);
    if (kidsProducts) {
        console.log("There are products in the kidsProducts category.");
    } else {
        console.log("There are no products in the kidsProducts category.");
    }
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
                    <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LdDVZKz/Untitled-2.jpg" /></SwiperSlide>

                </Swiper>
                <div className="grid grid-cols-6 gap-5 my-10">
                    {
                        kidsProducts?.map((x) =>
                            <CardsOfProducts singleProduct={x} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Kids;