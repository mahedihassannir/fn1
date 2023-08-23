import React from 'react';
import SegmentationByGender from './SegmentationByGender';

const Demographic = () => {
  return (
    <div className='p-5'>
      <div>
        <div className='flex justify-between text-base '>
          <h3 className="text-[#688D8C] font-bold  ">Age 18-25</h3>
          <h3 className="text-[#00193B] font-bold  ">6,680</h3>
        </div>
        <span className="flex items-center font-bold">
          <progress className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 " value="25" max="100"></progress>
        </span>
      </div>
      <div>
        <div className='flex justify-between mt-4 text-base '>
          <h3 className="text-[#688D8C] font-bold  ">Age 25-45</h3>
          <h3 className="text-[#00193B] font-bold ">15,234</h3>
        </div>
        <span className="flex items-center font-bold">
          <progress className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 " value="45" max="100"></progress>
        </span>
      </div>
      <div>
        <div className='flex justify-between text-base mt-4'>
          <h3 className="text-[#688D8C] font-bold ">Age 45-65</h3>
          <h3 className="text-[#00193B] font-bold ">2,030</h3>
        </div>
        <span className="flex items-center font-bold ">
          <progress className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 " value="10" max="100"></progress>
        </span>
      </div>
      <div>
        <div className='flex justify-between text-base mt-4'>

          <h3 className="text-[#688D8C] font-bold  ">Age over 65</h3>
          <h3 className="text-[#00193B] font-bold  ">792</h3>

        </div>
        <span className="flex items-center font-bold">
          <progress className="text-[#00193B] progress mt-1 h-4 w-[100%] mr-4 " value="5" max="100"></progress>
        </span>
      </div>
<SegmentationByGender></SegmentationByGender>
    </div>
  );
};

export default Demographic;