import { useEffect, useState } from 'react';
import { FaStopwatch, FaTimes } from 'react-icons/fa';
import { GiCardKingClubs } from 'react-icons/gi';
// import img1 from '../../assets/imgs/img2.jpg'
// import img2 from '../../assets/imgs/img3.jpg'
// import img3 from '../../assets/imgs/img4.jpg'

import axios from 'axios';
import useProducts from '../../Hooks/Fantastic/useProducts';
import CardsOfProducts from '../fantasticprople/CardsOfProducts/CardsOfProducts';
/**
 * 
 * author:Mahedi Hassan
 * Date:15/8/2023
 * Description:This par is for flash sell 
 * 
 * 
 */

const Mahedi = () => {

    const [data, setData] = useState([])
    const { products,loading} = useProducts()
    // useEffect(() => {

    //     fetch(`http://localhost:5000/allcategory`)
    //         .then(res => res.json())
    //         .then(data => setData(data))

    // }, [])

    console.log({ data });


    return (
        <div>

            <div className=" w-full md:bg-white md:shadow-md py-10    ">
                {/* ------- */}
                {/* this part for for the title  */}
                <div className="-mt-5">
                    <h3 className="text-3xl font-semibold py-2 pl-2 flex items-center gap-5">Flash Sell <FaStopwatch />  </h3>
                </div>
                {/* ------- */}




                {/* this is the  flesh sell card section ends */}
                <section className="">
                    {/* main grid container */}
                    <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">

                        
                                {
                                    products.slice(5, 10).map(allcategory => <CardsOfProducts singleProduct={allcategory} />)
                                }
                    </div>

                </section>
                {/* this is the  flesh sell card section ends */}

            </div>

        </div>
    );
};

export default Mahedi;