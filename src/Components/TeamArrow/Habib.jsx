import React from 'react';


const Habib = () => {
    return (
        <div>


            {/* {second home page banner section} */}
            <section>

                <div className='my-5'>

                    {/* banner image */}
                   <img className='w-full  h-72' src="https://i.ibb.co/BsXFLb7/bannerimg1.jpg" alt="" />

                </div>
            </section>
           
            <section className='my-5 '>
                 {/* catagory section there are make card responsiv*/}

                <div className='grid grid-cols-3 gap-3 md:grid-cols-6 '>
                    {/* image div1 */} 
                    <div className='flex space-x-2 justify-center items-center  duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/9pkQGZ7/img17.png" alt="" />

                        <div>
                            <h1 className='text-lg font-semibold'> Drown</h1>
                            <p> Drown Catagory </p>
                        </div>
                    </div>

                      {/* image div2 */}
                    <div  className='flex space-x-2 justify-center items-cente duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/Cb8LV8T/img16.png" alt="" />

                        <div>
                            <h1 className='text-lg font-semibold'> Phone </h1>
                            <p> Phone Catagory </p>
                        </div>
                    </div>

                      {/* image div3 */}
                    <div  className='flex space-x-2 justify-center items-cente duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/XXfvpQZ/img15.png" alt="" />

                        <div>
                            <h1 className='text-lg font-semibold'> Kaybord </h1>
                            <p> Drown Catagory </p>
                        </div>
                    </div>

                      {/* image div4 */}
                    <div  className='flex space-x-2 justify-center items-cente duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/tLsJXZS/img14.png" alt="" />
                        <div>
                            <h1 className='text-lg font-semibold'> Charger </h1>
                            <p> Charger Catagory </p>
                        </div>
                    </div>

                      {/* image div5 */}
                    <div  className='flex space-x-2 justify-center items-cente duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />

                        <div>
                            <h1 className='text-lg font-semibold'> Electic </h1>
                            <p> Electic Catagory </p>
                        </div>
                    </div>

                      {/* image div6 */}
                    <div  className='flex space-x-2 justify-center items-cente duration-500 shadow-2xl hover:translate-x-5 hover:bg-slate-300 rounded-lg'>
                        <img className=' h-10 w-10' src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />

                        <div>
                            <h1 className='text-lg font-semibold'> Camara</h1>
                            <p>Camara Catagory </p>
                        </div>
                    </div>
                   
                     
                </div>
            </section>
        </div>
    );
};

export default Habib;