import React from 'react';
import { FaArrowUp } from 'react-icons/fa';


const SellerHome = () => {
    return (
        <div className='flex gap-4'>
            <div className='text-center py-4 w-48 bg-[#485197] text-white'><small>Sales in May 2021</small> <br/>
            <span className='font-bold text-2xl'>$0.73k</span><br/><small>April 2021 $14.29k</small></div>
            <div className='text-center py-4 w-48 bg-[#485197] text-white'><small>Orders In May 2021</small> <br/>
            <span className='font-bold text-2xl'>3k</span><br/><small>April 2021 $14.29k</small></div>
            <div className='text-center py-4 w-48 bg-[#485197] text-white'><small>Average order value in May 2021</small> <br/>
            <span className='font-bold text-2xl'>$145.69k</span><br/><small>April 2021 $14.29k</small></div>
            <div className='text-center py-4 w-48 bg-[#485197] text-white'><small>Average shipping hours 2021</small> <br/>
            <span className='font-bold text-2xl'>102.69</span><br/><small>April 2021 $14.29k</small></div>
            <div className='text-center py-4 w-48 bg-[#485197] text-white'><small>Discount Value in May 2021</small> <br/>
            <span className='font-bold text-2xl'>$-45k</span><br/><small>April 2021 $-23.00k</small></div>
        </div>
    );
};

export default SellerHome;
