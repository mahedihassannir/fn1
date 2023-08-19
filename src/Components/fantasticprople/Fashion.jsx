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
            <img src="https://i.ibb.co/fYkQS5K/Screenshot-2023-08-17-182335-1.png" alt="" />
        </section>
    );
};

export default Fashion;