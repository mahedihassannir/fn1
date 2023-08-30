import './UserProgress.css';
import { CiMenuKebab } from 'react-icons/ci'
const UserProgress = () => {
    const progressValue = 'delivered'; // it can be processed, shipped, or delivered

    return (
        <section className="bg-white p-6">
            <div className="flex justify-between gap-0 items-center">
                <div>
                    <p>Order ID <span className='font-bold'>12123123</span></p>
                    <p>Place On <span className='font-bold'>12,March 2016</span></p>
                </div>
                <button className='font-bold text-red-500 mr-2 '>View Details</button>
            </div>

            <hr />

            <div className="flex flex-col  md:flex-row justify-between ">
                <div className='font-bold'>
                    <p className=' text-3xl mt-2'>Blade High Heels Sandals</p>
                    <div className='text-gray-500'>
                    <p className=''>Qt: 1 Pair</p>
                    <p className='my-2 text-2xl text-black'>$1,500</p>
                    <p>Tracking Status On: 11:30pm, Today</p>
                    </div>
                    <p className='text-red-500 p-2 rounded my-2 border border-red-500 w-[50%]'>Reached, Cumilla</p>
                </div>
                <div className='flex justify-center '>
                    <img className="w-[100%] h-40 object-cover mt-3" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>

            <div className="step-wizard my-5 font-bold">
                <ul className="step-wizard-list">
                    <li className={`step-wizard-item ${progressValue === 'processing' && 'current-item'}`}>
                        <span className="progress-count">1</span>
                        <span className="progress-label">Processing</span>
                    </li>
                    <li className={`step-wizard-item ${progressValue === 'placed' && 'current-item'}`}>
                        <span className="progress-count">2</span>
                        <span className="progress-label">Placed</span>
                    </li>
                    <li className={`step-wizard-item ${progressValue === 'shipped' && 'current-item'}`}>
                        <span className="progress-count">3</span>
                        <span className="progress-label">Shipped</span>
                    </li>
                    <li className={`step-wizard-item ${progressValue === 'delivered' && 'current-item'}`}>
                        <span className="progress-count">4</span>
                        <span className="progress-label">Delivered</span>
                    </li>
                    <div className="invisible">
                    <li className={`step-wizard-item hhhh ${progressValue === 'pp' && 'current-item'}`}>
                        <span className="progress-count">4</span>
                        <span className="progress-label">pp</span>
                    </li>
                    </div>
                </ul>
            </div>
            <hr />
            <div className='flex justify-evenly items-center font-bold text-red-500 mt-2'>
                <button>Track</button>
                
                <button>Cancel</button>
                <button>Pre-Pay</button>
                <CiMenuKebab className='text-2xl text-gray-500'/>
            </div>
        </section>
    );
};

export default UserProgress;





