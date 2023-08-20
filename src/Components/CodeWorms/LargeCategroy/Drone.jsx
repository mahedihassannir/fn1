import React from 'react';
import useCategory from '../Hooks/useCategory';
import DroneCard from './DroneCard';

const Drone = () => {
    const [category] = useCategory();
    console.log(category);

    const products = category.filter(item => item.category === 'Drone');
    return (
        <div>
            <div className='mb-16'>
                <img className='h-52 w-full' src="https://www.newcastleairport.com/media/2592/drone-banner.jpg" alt="" />
            </div>
           <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 '>
           {
                products.map(product => <DroneCard
                key={product._id}
                product={product}
                ></DroneCard>)
            }
           </div>
        </div>
    );
};

export default Drone;