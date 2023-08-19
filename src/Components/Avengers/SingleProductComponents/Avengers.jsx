/**
 * Author: MG Rakib
 * description: fpr payment
 * date: 17aug,2023
 *
 * @format
 */

import ProductDelivery from "./ProductDelivery/ProductDelivery";
import ProductPurchase from "./ProductPurchase/ProductPurchase";

const Avengers = () => {
	return (
		<div>
			{/* Product Purchase and cart btn section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductPurchase></ProductPurchase>
			</section>
			{/*  Product Purchase and cart btn section End */}

			{/* ------------------------------------------------- */}

			{/* product delivery details section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductDelivery></ProductDelivery>
			</section>
			{/* product delivery details section End  */}
		</div>
	);
};

export default Avengers;
