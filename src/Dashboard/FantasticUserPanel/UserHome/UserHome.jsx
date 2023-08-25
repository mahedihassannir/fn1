import video1 from '../../../assets/videos/Leaves - 74233 (1080P)(2).mp4'
import './UserHome.css'
import { BsArrowRightShort, BsChatDots } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiSearchAlt } from 'react-icons/bi'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import UserDateAndTime from '../UserDateAndTime/UserDateAndTime'

const UserHome = () => {
    return (
        <section>
            {/* userHome top section */}
            <div className='flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4'>
                <div>
                    <p className='text-2xl font-bold'>Welcome To Small Shop</p>
                    <p className=''>hello user, Welcome back!</p>
                </div>
                <div>
                    <div className='bg-white  flex items-center justify-end rounded'>
                        <input type="text" placeholder="Search Here" className='py-2 px-4' /><BiSearchAlt className='mr-4' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='bg-white h-9 w-9 flex justify-center items-center relative rounded-lg'>
                        <BsChatDots className='text-2xl' />
                        <div className='flex items-center justify-center absolute rounded-full h-4 w-4 -top-0 left-0 bg-red-500 text-white'>
                            <p className=''>1</p>
                        </div>
                    </div>
                    <div className='bg-white h-9 w-9 flex justify-center items-center mx-2 relative rounded-lg'>
                        <IoMdNotificationsOutline className='w-8 text-2xl' />
                        <div className='flex items-center justify-center absolute rounded-full h-4 w-4 -top-0 left-0 bg-red-500 text-white'>
                            <p className=''>1</p>
                        </div>
                    </div>
                    <img className='w-7 h-9 rounded-lg' src="https://i.ibb.co/YDYc4hM/Black-Geometric-Depop-Profile-Picture.png" alt="" />
                </div>
            </div>
            {/* userHome top section Ends*/}

            {/* second  section Video and State */}
            <div className='w-full my-6 relative flex flex-col lg:flex-row gap-8'>
                <div className=''>
                <video style={{width: "40rem"}} className='h-40 object-cover' src={video1} autoPlay loop muted></video>

                    <div className='absolute top-2 md:top-10 left-10 '>
                        <p className='lg:text-2xl font-bold text-white overflow-hidden'>Bye and get your extraordinary products</p>
                        <p className='text-white'>World fastest growing market</p>
                        <div className='hidden md:block'>
                            <button className='bg-white py-2 px-3 rounded text-green-400 font-semibold'>Explore More</button>
                            <button className='py-2 px-3 mx-4 border text-white rounded font-semibold'>Top Products</button>
                        </div>

                    </div>
                </div>
                {/* ends video */}

                <div className='flex gap-20 lg:gap-6 flex-col md:flex-row'>
                    <div className='p-4 font-bold bg-gray-100' style={{ backgroundImage: "url(https://img.tukuppt.com/png_preview/00/04/81/Brh8sRTRlE.jpg!/fw/780)", backgroundSize: "contain", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat", height: "160px", width: "260px" }}>
                        <h1 className='text-2xl mb-3'>My Stat</h1>
                        <p className=''>Today &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This Month</p>
                        <p className='my-2 text-green-500'>4 Ordered&nbsp; &nbsp; 17 ordered</p>
                        <p className='flex items-center gap-1'>Go to my orders <BsArrowRightShort className='mt-1' /></p>
                    </div>
                    {/* date and time */}
                    <div className='clock-back h-40 flex justify-center items-center' >
                        <UserDateAndTime/>
                    </div>
                </div>

            </div>
            {/* second  section Video and State  ends*/}

            {/* third section Listing TopProducts,Featured Products, and recent activity */}
            <div className='grid grid-cols lg:grid-cols-2 gap-x-10'>
            <div className=''>
                <div className='flex justify-between px-2 my-7'>
                    <p className='font-bold'>My Listings</p>
                    <p className='flex items-center gap-x-2'>See All <BsArrowRightShort/></p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-2'>
                    <div className='relative'>
                    <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <FaHeart className='absolute top-3 right-3 text-green-400'/>
                    <p className='absolute bottom-1 left-6 font-bold text-slate-400'>Annual vince</p>
                    </div>
                    <div className='relative'>
                    <img className='h-40 rounded-xl w-fill' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <FaRegHeart className='absolute top-3 right-3 text-green-400'/>
                    <p className='absolute bottom-1 left-8 font-bold text-slate-400'>AirPods</p>
                    </div>
                    <div className='relative'>
                    <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <FaRegHeart className='absolute top-3 right-3 text-green-400'/>
                    <p className='absolute bottom-1  font-bold text-slate-400'>Gaming Consol</p>
                    </div>
                    <div className='relative'>
                    <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <FaHeart className='absolute top-3 right-3 text-green-400'/>
                    <p className='absolute bottom-1 left-2 font-bold text-slate-600'>Robotic Drone</p>
                    </div>
                </div>
                {/* third section Listing Ends here */}

                {/* third section TopProducts,Featured Products start*/}
                <div className='grid grid-cols gap-3 md:grid-cols-2 mt-6'>
                <div>
                <div className='flex justify-between mt-8 mb-6'>
                    <p className='font-bold'>Top Products</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort/></p>
                </div>
                <div>
                   <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <p className='text-4xl mb-2 mx-2'>|</p>
                    <div>
                        <p>2K Reviews</p>
                        <p className='flex items-center text-yellow-500'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                    </div>
                   </div>
                   
                </div>
                </div>
                <div>
                <div className='flex justify-between mt-8 mb-6'>
                    <p className='font-bold'>Featured Products</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort/></p>
                </div>
                <div>
                   <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <p className='text-4xl mb-2 mx-2'>|</p>
                    <div>
                        <p>2K Reviews</p>
                        <p className='flex items-center text-yellow-500'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                    </div>
                   </div>
                   
                </div>
                </div>
            </div>
            </div>
            {/* third section TopProducts,Featured Products start ends*/}

            {/* third section recent activity start */}
            <div className='h-full'>
            <div className='flex justify-between my-7'>
                <p className='font-bold'>Resent Activity</p>
                <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort/></p>
                
            </div>
            <div className='my-2'>
                <div className='flex justify-between'>
                   <div className='flex gap-x-4'>
                   <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <p>Annual Vince</p>
                        <p>in plant category</p>
                    </div>
                   </div>
                    <p>2 min ago</p>
                </div>
                <div className='flex justify-between my-2'>
                   <div className='flex gap-x-4'>
                   <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <p>AirPods</p>
                        <p>in Tech category</p>
                    </div>
                   </div>
                    <p>2 min ago</p>
                </div>
                <div className='flex justify-between'>
                   <div className='flex gap-x-4'>
                   <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <p>Gaming Consol</p>
                        <p>in Game category</p>
                    </div>
                   </div>
                    <p>2 min ago</p>
                </div>
                <div className='flex justify-between my-2'>
                   <div className='flex gap-x-4'>
                   <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <p>Robotic Drone</p>
                        <p>in Drone category</p>
                    </div>
                   </div>
                    <p>2 min ago</p>
                </div>
                <div className='flex justify-between'>
                   <div className='flex gap-x-4'>
                   <img className='w-16 h-16 rounded-full' src="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div>
                        <p>LipsTick</p>
                        <p>in Lips category</p>
                    </div>
                   </div>
                    <p>2 min ago</p>
                </div>
            </div>
            {/* third section recent activity Ends */}
            </div>
            </div>
        </section>
    );
};

export default UserHome;