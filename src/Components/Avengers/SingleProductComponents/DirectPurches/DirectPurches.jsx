import { useLocation } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
const DirectPurches = () => {


    const location = useLocation();

    // const data = location.state && location.state.singleProductData

    const productdata = location.state;
    console.log({ productdata });

    return (
        <div className="w-full  bg-[#F4F4F4]">


            <div className="w-11/12  py-10 mx-auto   ">


                <div className="md:flex gap-2">

                    <div className="md:w-[60%]">
                        {/* this div is for the address  */}
                        <div className="w-full md:h-40 shadow-sm bg-white rounded-md p-5">

                            <p>Deliver to: Mahedi</p>

                            <p className="flex pt-2">
                                <span>HOME</span>
                                1947315745
                                Brahmanbaria,bancharampure,Rupasdi, Banchharampur, Brahmanbaria, Chattogram
                                <button className="ml-5 text-blue-400">Change</button></p>

                            <div className="flex py-2">

                                <p>Bill to the same address
                                </p>
                                <button className="pl-2 text-blue-400">Edit</button>
                            </div>
                            <div className="flex">
                                <p>Email to
                                    mh9009060@gmail.com
                                </p>
                                <button className="pl-2 text-blue-400">Edit</button>
                            </div>

                        </div>
                        {/* this div is for the address  ends */}


                        {/* this is the added cart in the buy secton */}
                        <div className="pt-5">

                            <div className="w-full h-60 rounded-md shadow-lg bg-white p-3">

                                <p className="pl-12 pb-1">Store name</p>
                                <div className="flex items-center pl-10 ">

                                    <div className="">

                                        <img className="w-[60px] h-[60px]" src={productdata.image} alt="" />

                                    </div>

                                    <div className="pl-5">
                                        <p>{productdata.name}</p>
                                    </div>
                                    <div className="pl-10">
                                        qty
                                    </div>
                                    <div className="pl-5 flex items-center">
                                        <TbCurrencyTaka />
                                        <span className="pl-1">
                                            {productdata.price}

                                        </span>
                                    </div>
                                </div>

                                <hr className="mt-2" />

                                {/* this section is for the  */}
                                <div className="flex justify-between items-center">



                                    <div className="p-2  w-60 h-16 mt-5 rounded-md border-2 border-bg-blue-500">

                                        <p className="flex">
                                            Standard Delivery
                                            <span className="pl-2">|</span>
                                            <span className="pl-2">৳ 69
                                            </span>
                                        </p>
                                        <p>Receive by 17 Oct - 21 Oct</p>


                                    </div>


                                    <div className="">
                                        <p>1 Item(s). Subtotal: ৳  326
                                            <br />
                                            Saved ৳ 31</p>
                                    </div>

                                </div>


                            </div>



                        </div>
                        {/* this is the added cart in the buy secton ends */}



                    </div>

                    <div className=" mx-auto w-[80%] md:w-[40%]  h-20 bg-green-500">

                    </div>

                </div>

            </div>
        </div>
    );
};

export default DirectPurches;