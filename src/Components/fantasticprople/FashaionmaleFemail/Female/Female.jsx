// Date:08/20/2023
// Author:MASUM
// Description:Show female products

import { FaStar } from "react-icons/fa";
import useProducts from "../../../../Hooks/Fantastic/useProducts";
import CardsOfProducts from "../../CardsOfProducts/CardsOfProducts";

const Female = () => {
    // All Products From Hooks
    const { products, loading } = useProducts()

    // Filter Only Fashion Category
    const femaleFashion = products.filter(female => female.category === "female")
    return (
        <section>
            {/* banner */}
            <img className="my-10" src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />


            {/* display female fashion product */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 lg:mx-20 my-10'>
                {
                    femaleFashion.map(female => <CardsOfProducts singleProduct={female} />)
                }
            </div>
        </section>
    );
};

export default Female;