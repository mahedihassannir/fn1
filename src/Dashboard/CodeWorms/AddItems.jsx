import React from 'react';
import { Link } from 'react-router-dom';

const AddItems = () => {




  return (

    <div className='flex'>

      {/*this is banner section*/}
      <div className="">



      </div>


      {/* this is linking to other  */}
      <div className="">

        <Link to="/dashboard/orderresuns">

          <div className="w-60 border-2 py-10 bg-red-400">

           mahedis astana

          </div>

        </Link>
        {/* this is linking to other  ends */}


      </div>

      {/* this is linking to other  */}
      <div className="">

        <Link to="/dashboard/custommerreview">

          <div className="w-60 border-2 py-10 bg-red-400">

          custommerreview

          </div>

        </Link>
        {/* this is linking to other  ends */}


      </div>

      {/* this is linking to other  */}
      <div className="">

        <Link to="/dashboard/ordermanage">

          <div className="w-60 border-2 py-10 bg-red-400">

          ordermanage

          </div>

        </Link>
        {/* this is linking to other  ends */}


      </div>
    </div>
  );
};

export default AddItems;