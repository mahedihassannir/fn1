import React from 'react';
import EarningByItemChart from '../EarningByItemChart/EarningByItemChart';
import EarningByItemText from '../EarningByItemText/EarningByItemText';

const EarningByItemMain = () => {
    return (
        <div className='w-[480px] p-5 bg-[#FFFFFF] h-[300px] shadow-md'>
            <h4 className='text-lg  font-semibold mb-4'> Earning By Item Type</h4>
            <div className='flex items-center justify-center gap-7'>
                <EarningByItemChart />
                <EarningByItemText />
            </div>
        </div>
    );
};

export default EarningByItemMain;