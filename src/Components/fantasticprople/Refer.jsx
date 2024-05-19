import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Refer = () => {
    const handleRafer = () => {

        toast.success("আপনার রাফের সম্পন্ন হয়েছে")

    }

    return (
        <div className="flex justify-center items-center">
            <ToastContainer></ToastContainer>
            <div className=''>
                <div className='flex justify-between my-7'>
                    <p className='font-bold'>Activity</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>

                </div>

                <div className='md:flex gap-5'>


                    <div className='w-[400px] h-[500px] bg-white rounded-md '>

                        <div className='mb-4'>
                            <iframe width="400" height="250" src="https://www.youtube.com/embed/EkdtmLnuN7A?si=JBSBOy-4wlrHiDMH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='p-2 font-semibold text-lg'>
                            <h1>(১) এখানে কি করে ্রাফের করবেন তা বলা আছে</h1>
                            <p className='pt-2 font-semibold text-lg'>
                                (২) প্রথমে রাফের কোড বসান তারপর রাফের বাটন এ ক্লিক করোন
                            </p>

                            <p className='pt-2 font-semibold text-lg'>
                                (৩)  এর পর সাথে সাথে রেফার বোনাস পেয়ে জাবেন
                            </p>
                            <Link to={"/dashboard/referr"} className="underline text-red-500">My Refer code</Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  w-[400px] h-[500px] bg-white rounded-md '>

                        <div className=" ">

                            <div className='text-center'>
                                <input className='w-11/12 h-14 rounded-md border-2  pl-2' placeholder='রাফের কোড বসান' type="text" />
                                <button onClick={handleRafer} className='bg-red-500 py-5 px-9 rounded-lg border-none text-white font-bold mt-5'>
                                    রাফের করোন
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
                {/* third section recent activity Ends */}
            </div>
        </div>
    );
};

export default Refer;