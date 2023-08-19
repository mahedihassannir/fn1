// Date:  8/19/23
// Author:MASUM
// Description:Display All Fashion Products

import useProducts from "../../Hooks/Fantastic/useProducts";


const Fashion = () => {
    // All Products From Hooks
    const { products,loading} = useProducts()

    // Filter Only Fashion Category
    const allFashionProducts = products.filter(FashionProducts=>FashionProducts.category2==="fashion")
    console.log(allFashionProducts)
    return (
        <section>
            <img className="mb-20" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />

            {/*  */}
            <div>

            </div>


            {/* display all fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10 mx-20'>
                {
                    allFashionProducts.map(fashionProducts => <div key={fashionProducts._id}>
                        <div className='hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg'>
                           <div className='relative'>
                           <img className='rounded-t-lg' src={fashionProducts.image} alt="" />
                            <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
                           </div>
                           <p className='font-bold my-2'>{fashionProducts.name}</p>
                           <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{fashionProducts.price}</p>
                           <div className='text-center'>
                           <button class="hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer mt-4 bg-gray-200 w-full py-1 rounded  text-green-700 font-extrabold">Add To Cart</button>
                           </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Fashion;