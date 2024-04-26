/**
 * Author: MG Rakib / Mahedi
 * description: fpr payment
 * date: 17aug,2023
 *
 * @format
 */

import useProducts from "../../../Hooks/Fantastic/useProducts";
import CardsOfProducts from "../../fantasticprople/CardsOfProducts/CardsOfProducts";
import ProductDelivery from "./ProductDelivery/ProductDelivery";
import ProductPurchase from "./ProductPurchase/ProductPurchase";



const Avengers = ({ singleProductData }) => {


	const { products } = useProducts();


	console.log("091", singleProductData)

	const handletop = () => {

		window.scrollTo({
			top: 0,
			behavior: "instant"
		});

	};

	return (
		<div>
			{/* Product Purchase and cart btn section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductPurchase singleProductData={singleProductData} ></ProductPurchase>
			</section>
			{/*  Product Purchase and cart btn section End */}

			{/* ------------------------------------------------- */}

			{/* product delivery details section starts  team AVENGERS */}
			{/* this section for MGR */}
			<section>
				<ProductDelivery ></ProductDelivery>
			</section>
			{/* product delivery details section End  */}

			{/* this 2 section is for the product recomendation and show the chat and reviews */}

			<section className="w-full my-5">


				{/* this is the parent div */}
				<div className="">
					<div className="w-full py-3 bg-[#fafafa]" >
						<span className="text-black font-semibold text-lg ">Product details of {singleProductData?.result?.product_name}</span>
					</div>
					{/* ends fo teh leble */}
					{/* description1  */}
					<div className="flex justify-center px-10 py-5 gap-5">
						<div className="w-1/2">
							{/* <p>{singleProductData.description}</p> */}
							<p>{singleProductData?.result?.product_description}
							</p>
						</div>
						{/* description1  ends */}



						{/* description1  starts */}
						<div className="w-1/2">
							<p>{singleProductData?.description2}</p>
						</div>

					</div>
					{/* description1  ends  */}

					{/* this div is for the dyscription section */}
					<div className="w-full h-screen ">



					</div>
					{/* ends */}


					{/* this is the rating and review section */}
					<div className="w-full h-screen mt-5 ">

						{/* this is the lable */}
						<div className="w-full py-3 bg-[#fafafa]" >
							<span className="text-black font-semibold text-lg ">Ratings & Reviews of {singleProductData?.result?.product_name}</span>
						</div>



						{/* starts */}
						<div className="">
							{/* here is the content */}
						</div>
						{/* ends */}
						<br />
						<hr />

						{/* here is the review section  */}
						<div className="">
							{/* content here */}
						</div>
						{/* ends */}


					</div>
					{/* ends */}



					{/* this is the chat with or ask auestion in the seller */}
					<div className="w-full h-screen mt-5">



					</div>
					{/* this is the chat with or ask auestion in the seller ends */}



					{/* this is the recomended products */}
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">

						{
							products?.result?.slice(0, 10).map(allcategory => <CardsOfProducts handle={handletop} singleProduct={allcategory} />)
						}


					</div>
					{/* this is the recomended products ends */}


					{/* this is the parent ends */}
				</div>
				{/* this is the parent ends */}






			</section>

		</div>
	);
};

export default Avengers;
