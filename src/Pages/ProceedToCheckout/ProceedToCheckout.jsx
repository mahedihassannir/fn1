/**
 * Author: MG Rakib
 * description: proceed_to_checkout
 * date: 17aug,2023
 *
 * @format
 */

import { useLocation, useParams } from "react-router-dom";
import Avengers from "../../Components/Avengers/CheckOutComponents/Avengers";
import useProducts from "../../Hooks/Fantastic/useProducts";
import UseCartHook from "../../Hooks/UseCartHook/UseCartHook";

const ProceedToCheckout = () => {
	const { id } = useParams();


	const location = useLocation();

	const thesingleProduct = location.state && location.state.singleProductData;

	console.log(thesingleProduct);

	console.log({ id });

	const [cart] = UseCartHook();


	const { products, loading } = useProducts();
	const singleProductData = products.filter(product => product?._id === id);


	console.log(singleProductData);

	return (
		<div className='my-3 md:px-20'>
			{/* this page for Avengers */}
			<section>
				<Avengers productsData={singleProductData} />
			</section>
		</div>
	);
};

export default ProceedToCheckout;
