/**
 * Author: MG Rakib
 * description: Make Single Product route and create a single product page
 * date: 17aug,2023
 */

import Avengers from "../../Components/Avengers/SingleProductComponents/Avengers";



const SingleProduct = () => {
    return (
		<div className='my-3 md:px-20'>
			{/* top section for MGR */}
			<section>
				<Avengers />
			</section>
		</div>
	);
};

export default SingleProduct;