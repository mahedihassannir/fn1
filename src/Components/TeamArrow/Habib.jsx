import React from 'react';
import image1 from'../../assets/imgs/img2.jpg'
import image2 from'../../assets/imgs/img3.jpg'
import image3 from'../../assets/imgs/img4.jpg'

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
           
            <section className='my-5'>
                 {/* catagory section there are make card responsiv*/}

                <div className='grid grid-cols-3 gap-3 md:grid-cols-6 bg-slate-300'>
                    {/* image div1 */}
                    <div className=''>
                        <img src={image1} alt="" />
                    </div>

                      {/* image div2 */}
                    <div>
                        <img src={image2} alt="" />
                    </div>

                      {/* image div3 */}
                    <div>
                        <img src={image3} alt="" />
                    </div>

                      {/* image div4 */}
                    <div>
                        <img src={image1} alt="" />
                    </div>

                      {/* image div5 */}
                    <div>
                        <img src={image2} alt="" />
                    </div>

                      {/* image div6 */}
                    <div>
                        <img src={image1} alt="" />
                    </div>
                   
                     
                </div>
            </section>
        </div>
    );
};

export default Habib;