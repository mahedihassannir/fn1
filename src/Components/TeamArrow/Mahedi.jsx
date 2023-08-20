import { useEffect, useState } from 'react';
// import img1 from '../../assets/imgs/img2.jpg'
// import img2 from '../../assets/imgs/img3.jpg'
// import img3 from '../../assets/imgs/img4.jpg'


/**
 * 
 * author:Mahedi Hassan
 * Date:15/8/2023
 * Description:This par is for flash sell 
 * 
 * 
 */

const Mahedi = () => {

    const [data, SetData] = useState([])

    useEffect(() => {


        fetch("http://localhost:5000/allcategory")

            .then(res => res.json())

            .then(data => {

                SetData(data)

            })
    }, [])


    return (
        <div>

            <div className=" w-full md:bg-white md:shadow-md py-10    ">
                {/* ------- */}
                {/* this part for for the title  */}
                <div className="-mt-5">
                    <h3 className="text-3xl font-semibold py-2 pl-2">Flash Sell</h3>
                </div>
                {/* ------- */}




                {/* this is the  flesh sell card section ends */}
                <section className="">
                    {/* main grid container */}
                    <div className=" grid md:mx-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">

                        {
                            data.splice(6, 5).map(res => <div>
                                {/* this is main card  div starts */}
                                <div className="lg:w-64 lg:h-96 w-56 h-96  bg-white hover:shadow-md hover:border-2 hover:duration-300 cursor-pointer  ">

                                    {/* this section is for image */}
                                    <div className="">

                                        <img className="w-full h-56" src={res.image} alt="" />

                                    </div>
                                    {/* this section is for image */}

                                    {/* ----------------------------------------------------------- */}

                                    {/* this section is for description starts*/}
                                    <div className="pt-3 pl-2">


                                        {/* this div is for title and pricing starts */}
                                        <div className="">
                                            <h1 className="text-lg ">my name is mahedi hassan i am a mern. . .</h1>
                                            <h3 className="text-2xl text-[#F96921]">$242</h3>
                                        </div>
                                        {/* this div is for title and pricing starts */}


                                        {/* price */}
                                        <p><s className="text-[#B6B6BF]">$900</s><span> -73%</span></p>

                                        {/* start */}
                                        <span>
                                            <span>stars</span>
                                            <span className="text-[#B1B0BF]">(11)</span>
                                        </span>



                                    </div>
                                    {/* this section is for description ends */}





                                </div>
                                {/* this is main card  div ends */}

                            </div>)
                        }

                    </div>

                </section>
                {/* this is the  flesh sell card section ends */}

            </div>

        </div>
    );
};

export default Mahedi;