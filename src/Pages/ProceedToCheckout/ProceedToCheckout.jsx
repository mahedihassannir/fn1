/**
 * Author: MG Rakib
 * description: proceed_to_checkout
 * date: 17aug,2023
 *
 * @format
 */

import Avengers from "../../Components/Avengers/CheckOutComponents/Avengers";

const ProceedToCheckout = () => {
	return (
		<div className='my-3 md:px-20'>
			{/* this page for Avengers */}
			<section>
				<Avengers />
			</section>
		</div>
	);
};

export default ProceedToCheckout;
