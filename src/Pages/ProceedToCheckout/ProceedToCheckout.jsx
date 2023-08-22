/**
 * Author: MG Rakib
 * description: proceed_to_checkout
 * date: 17aug,2023
 *
 * @format
 */

import { useParams } from "react-router-dom";
import Avengers from "../../Components/Avengers/CheckOutComponents/Avengers";
import useProducts from "../../Hooks/Fantastic/useProducts";

const ProceedToCheckout = () => {
	const { id } = useParams();
	const { products, loading } = useProducts();
	const singleProductData = products.filter(product => product?._id === id);

	const storedCartProducts = JSON.parse(localStorage.getItem('cartProduct'))

	const cartProducts = []
	


	console.log(cartProducts)
	

	const demo = products.forEach(product => {
		for (let key in storedCartProducts) {
			if (key === product._id) {
				const newObj = {
					...product, quantity: storedCartProducts[key]
				}
				cartProducts.push(newObj)
			}
		}

		
	});
	return (
		<div className='my-3 md:px-20'>
			{/* this page for Avengers */}
			<section>
				<Avengers productsData={!id ? cartProducts : singleProductData} />
			</section>
		</div>
	);
};

export default ProceedToCheckout;
