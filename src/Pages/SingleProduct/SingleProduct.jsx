/**
 * Author: MG Rakib
 * description: Make Single Product route and create a single product page
 * date: 17aug,2023
 */

import { useParams } from "react-router-dom";
import Avengers from "../../Components/Avengers/SingleProductComponents/Avengers";
import useProducts from "../../Hooks/Fantastic/useProducts";

const SingleProduct = () => {

	// All Products From Hooks
	const { id } = useParams()
	const { products, loading } = useProducts()
	const singleProductData = products.find((product) => product?._id === id)


	//Filter Only Fashion Category
	// const allFashionProducts = products.filter(FashionProducts=>FashionProducts.category2==="fashion")
	//console.log(id)

	return (
		<div className=' w-full  my-10  md:px-20'>

			<section>
				<Avengers singleProductData={singleProductData} />
			</section>
		</div>
	);
};

export default SingleProduct;