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
const {id} = useParams()
const { products,loading} = useProducts()
const singleProductData = products.find((product)=>product?._id === id)


	return (
		<div className='my-3 md:px-20'>
			{/* this page for Avengers */}
			<section>
				<Avengers singleProductData={singleProductData} />
			</section>
		</div>
	);
};

export default ProceedToCheckout;
