import { useLocation } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
const DirectPurches = () => {


    const location = useLocation();

    // const data = location.state && location.state.singleProductData

    const productdata = location.state;

    console.log({ productdata });
    
    const [inputValue, SetinputValue] = useState(null)

    const [open, Setopen] = useState(false)

    const handleTrueFalse = () => {


        Setopen(!open)


    }



    const deleveryFee = parseFloat(productdata?.deleveryFee)

    const [offerPrice, SetofferPrice] = useState(productdata?.price)



    const offerCode = "mmm"
    const offerTaka = 20

    useEffect(() => {



        if (inputValue?.target?.value === offerCode) {

            const totaloffer = productdata?.price - offerTaka

            console.log({ totaloffer });

            SetofferPrice(totaloffer)


        }
    })



    console.log(offerPrice);






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

                                        <img className="w-[60px] h-[60px]" src={productdata?.image} alt="" />

                                    </div>

                                    <div className="pl-5">
                                        <p>{productdata?.name}</p>
                                    </div>
                                    <div className="pl-10">
                                        qty
                                    </div>
                                    <div className="pl-5 flex items-center">
                                        <TbCurrencyTaka />
                                        <span className="pl-1">
                                            {productdata?.price}

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
                                        <p>1 Item(s). Subtotal: ৳  {productdata?.price + deleveryFee}
                                            <br />
                                            Saved ৳ 31</p>
                                    </div>

                                </div>


                            </div>



                        </div>
                        {/* this is the added cart in the buy secton ends */}



                    </div>



                    {/* this is the product price and main buy btn  */}
                    <div className=" mt-5 mx-auto w-[99%] md:w-[37%]  p-3 bg-white rounded-md shadow-sm">


                        {/* this is the voucher and other work */}
                        <div className="">

                            <span>Discount and Payment</span>
                            <div className="pt-2">

                                <span className="flex items-center gap-2"> <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i4/O1CN01tGyTSv1JA5gQ2yaGF_!!6000000000987-2-tps-96-96.png" alt="" /> Daraz Voucher</span>

                            </div>

                            <div className="flex justify-between py-3">

                                <span className="flex items-center gap-2"> <img className="w-5 h-5" src="https://img.alicdn.com/imgextra/i3/O1CN01O0d2d41dHgZ87WWYB_!!6000000003711-2-tps-96-96.png" alt="" /> Promo Code</span>

                                <button onClick={handleTrueFalse} className="text-gray-400 flex items-center gap-2 pr-2">
                                    enter a voucher code
                                    <FaArrowCircleRight />
                                </button>

                            </div>

                            {/* this is the input field for the voucher code */}
                            <div className="relative">
                                <div className="">
                                    {

                                        open ?
                                            <input onChange={SetinputValue} className="w-11/12 outline-none py-3 border-2 rounded:sm pl-2 focus:placeholder-green-500" placeholder="enter your Voucher" type="text" />
                                            : ""
                                    }

                                </div>

                                <div className="absolute top-0 right-0 mr-16  mt-5 hover:text-red-500 hover:cursor-pointer">
                                    {

                                        open ?
                                            <FaArrowRight className="text-lg" />
                                            : ""
                                    }

                                </div>


                            </div>


                            {/* this is the input field for the voucher code ends */}
                        </div>


                        {/* this is the voucher and other work ends */}
                        <hr className="my-5" />
                        {/*this is the payment detales ans order summary work work   */}
                        <div className="p-2">

                            <div className="">
                                <span className="text-bold text-lg">Order Summary</span>
                            </div>

                            <div className="">
                                <div className="flex justify-between pr-5">

                                    <span>Items Total </span>
                                    <span className="flex items-center gap-2">
                                        {productdata?.price}
                                        <TbCurrencyTaka />

                                    </span>
                                </div>

                                <div className="flex justify-between pr-5 py-2">
                                    <span>Delivery Fee</span>
                                    <span className="flex items-center gap-2">
                                        {deleveryFee} <TbCurrencyTaka />
                                    </span>
                                </div>

                                <div className="flex justify-between pr-5 ">
                                    <span>Total Payment</span>
                                    <span className="flex items-center gap-2">
                                        {offerPrice + deleveryFee} <TbCurrencyTaka />
                                    </span>
                                </div>


                                <button className="w-[99%] py-3 bg-[#F85606] my-3 rounded-sm text-white text-lg hover:bg-gray-400 hover:text-gray-500 hover:transition hover:duration-600 hover:ease-in-out">

                                    Place order

                                </button>

                            </div>


                        </div>
                        {/*this is the payment detales work ends  */}



                    </div>

                </div>

            </div>
        </div>
    );
};

export default DirectPurches;