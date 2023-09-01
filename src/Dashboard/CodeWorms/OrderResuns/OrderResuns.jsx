import { FaAngleRight, FaQuestion } from "react-icons/fa";

const OrderResuns = () => (
    <div className="w-[98%] lg:w-11/12 mx-auto">

        <section>
            {/* this is for teh alert */}
            <div className=" p-3 rounded-sm bg-[#e2efff] flex items-center gap-2">



                <span className="">
                    <FaAngleRight></FaAngleRight>
                </span>

                {/* gap */}

                <span className="">
                    Daraz Seller Center is unable to generate a report for returns that happened prior to 20 June 2022.
                </span>

            </div>
            {/* this is for the alert // ends */}
            {/* //------------------------------------------------------// */}
            {/* this is for the filter section */}
            <section className="w-full  bg-white mt-4 lg:mt-16 rounded-md py-2">
                {/* this is for teh sub hedding */}
                <div className="">
                    <span className="py-2 pl-2">Key Summary</span>

                </div>
                {/* this is for teh sub hedding ends */}

                {/* this is for the cards */}
                <section className="flex gap-4 pl-4 mt-2 mb-2">



                    <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">

                        <div className="  ">
                            <div className="flex items-center gap-1">


                                <p className="">
                                    Orders under  review
                                </p>
                            </div>
                            <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                        </div>

                    </div>
                    <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">

                        <div className="pl-2 ">
                            <p className="">
                                Orders under  review
                            </p>
                            <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                        </div>

                    </div>




                </section>
                {/* this is for the cards ends */}
            </section>

            {/* this is for the payment related starts */}

            <section className="w-full rounded-md bg-white h-20  mt-5 lg:mt-10">

                <div className="">




                </div>

            </section>

            {/* this is for the payment related ends */}

            {/* --------------------------------------------------------------------- */}

            {/* this is for order return  */}

            <section className="w-full py-20 flex justify-center items-center bg-white mt-10">


                <div className="">

                    <div className="">
                        <img className="" src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01937XJc1v1nr0pZgrg_!!6000000006113-55-tps-179-153.svg" alt="" />
                    </div>


                    <h3 className="text-center  test-2xl font-semibold mt-4">No return order under this status or filter</h3>

                </div>



            </section>



            {/* this is for order return ends */}

            {/* --------------------------------------------------------------------- */}



        </section>


    </div >
);

export default OrderResuns;