/**
 * Author: MG Rakib / Mahedi
 * description: ProductPurchase
 * date: 17aug,2023
 *
 * @format
 */

import Rating from "react-rating";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import takaIcon from "../../../../assets/taka.png";
import takaIconGray from "../../../../assets/taka_gray.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";
import { SyncLoader } from "react-spinners";
import useProducts from "../../../../Hooks/Fantastic/useProducts";
import axios from "axios";

const ProductPurchase = ({ singleProductData }) => {

	const { user } = useContext(ContexM)

	console.log({ singleProductData });

	const images = singleProductData?.imageurls;
	console.log("111111", images);



	let imageData = {}

	for (let i = 0; i < images?.length; i++) {

		const url = images[i];


		imageData[`image${i}`] = url;


	}


	console.log("he he he hklh lkjhlkjhljkh lkjhl hjklh 12123", imageData)

	const navigate = useNavigate();


	const handlepayment = (id) => {
		console.log(id);


		// navigate(`/direct_buy`, { state: {singleProductData} })
	}

	//default quantity value
	const [quantity, setQuantity] = useState(1);

	//add to cart function import from auth
	const { addToCart, loaddingForCart } = useContext(ContexM);

	// here we use mongo db to save the data 


	// here we use mongo db to save the data  ends

	const { products, loading } = useProducts()

	console.log({ addToCart });

	const email = user?.email;
	
	const handleWishList = (data) => {
		
		const productData = data?._id
		console.log("wish list data", data);
		fetch("http://localhost:5000/wish_list", {
			method: "POST",
			headers: { "content-type": "application/json" }
			,
			body: JSON.stringify({ data, email, productData })
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
	}


	return (
		<div className='relative my-10 '>
			<div className='flex flex-col md:flex-row gap-10'>
				{/* product Image  */}
				<div className='w-full md:w-1/3 '>
					<div>
						<img
							src={singleProductData?.image}
							// src={imageData?.image0}
							alt=''
							className='w-full  hover:cursor-pointer '
						/>
					</div>
					{/* <div class="relative w-64 h-64">
						<img src={singleProductData?.image} alt="Product Image" class="w-full h-full object-cover" />
						<div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
							<img src={singleProductData?.image} alt="Zoomed Image" class="w-full h-96 object-cover" />
						</div>
					</div> */}

					<div className='mt-5'>
						<div className='flex items-center'>
							<BsChevronLeft className='text-5xl' />

							<div className='flex items-center gap-3'>
								<div className='w-[70px] p-1 border hover:border-[#F57224] cursor-pointer'>


									<img
										src={singleProductData?.image}

										// src={imageData?.image0}
										alt=''
										className="transition-transform transform hover:scale-105"
									/>
								</div>

								<div className='w-[70px] p-1 '>
									<img
										src={singleProductData?.image}

										// src={imageData?.image0}
										alt=''
									/>
								</div>

								<div className='w-[70px] p-1 '>
									<img
										src={singleProductData?.image}
										// src={imageData?.image0}

										alt=''
									/>
								</div>
							</div>

							<BsChevronRight className='text-5xl ml-auto' />
						</div>
					</div>
				</div>

				{/* product Details  */}
				<div className='w-full md:w-2/3  font-normal'>
					{/* name  */}
					<h4 className='text-xl md:text-2xl font-bold'>
						{singleProductData?.name}
					</h4>

					{/* rating and share  */}
					<div className='mt-4'>
						<div className='flex items-center justify-between'>
							{/* rating  */}
							<div className='flex gap-3'>
								<Rating
									readonly
									placeholderRating={4.5}
									emptySymbol={
										<FaRegStar className='text-[#FABB24]' />
									}
									placeholderSymbol={
										<FaStar className='text-[#FABB24]' />
									}
								/>

								{/* rating number  */}
								<div>
									<p className='text-[#1AACD9]'>92 Ratings</p>
								</div>
							</div>

							{/* share  */}
							<div className='flex items-center gap-6 text-2xl text-gray-400 '>
								<HiShare />



								<FaRegHeart onClick={() => handleWishList(singleProductData)} className="cursor-pointer hover:text-red-500 " />



							</div>
						</div>
					</div>

					{/* band  */}
					<div className='mt-2'>
						<div className='flex items-center gap-3'>
							<p>Brand</p>
							<ul className='flex items-center gap-3 divide-gray-600 text-[#1AACD9] divide-x leading-4'>
								<li>No Brand</li>
								<li className='pl-3'>
									More Men Bags from No Brand
								</li>
							</ul>
						</div>
					</div>

					{/* price  */}

					<div className='mt-8'>
						<div className='text-4xl flex gap-3 items-center text-[#F85606] font-semibold'>
							<div>
								<img
									src={takaIcon}
									alt=''
									className='w-[25px]'
								/>
							</div>
							<span>{singleProductData?.price}</span>
						</div>

						<div className='mt-2'>
							<div className='flex gap-2 items-center'>
								<div className='flex items-center gap-1 relative text-[#9e9e9e]'>
									<div className='w-[15px] '>
										<img
											src={takaIconGray}
											alt=''
											className='w-full'
										/>
									</div>

									<p className='font-normal'>500</p>
									<div className='h-[1px] w-full bg-[#9e9e9e] absolute'></div>
								</div>
								<div>
									<p className='font-semibold'>-60%</p>
								</div>
							</div>
						</div>
					</div>

					{/* color  */}
					<div className='mt-8'>
						<div className='text-xl flex items-start gap-2'>
							<p className='text-[#747474] font-semibold'>
								Color Family:
							</p>

							<div>
								<span className='font-semibold'>Black</span>

								<div className='mt-2 flex items-center gap-3'>
									<div className='w-[60px] p-1 border border-[#F57224]'>
										{/* <img
											src={imageData?.image0}
											alt=''
										/> */}
									</div>
									<div className='w-[60px] p-1 '>
										<img
											src='https://i.ibb.co/PgdpJzh/img2.jpg'
											alt=''
										/>
									</div>
									<div className='w-[60px] p-1 '>
										<img
											src='https://i.ibb.co/PgdpJzh/img2.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Quantity  */}
					<div className='mt-8'>
						<div className='text-xl flex items-start gap-10'>
							<p className='text-[#747474] font-semibold'>
								Quantity
							</p>

							<div className='flex gap-2'>
								<button
									onClick={() => setQuantity(quantity - 1)}
									className={`w-[30px] h-[30px] bg-[#EFF0F5] font-bold flex items-center justify-center rounded-md ${quantity <= 1
										? "bg-gray-300"
										: "cursor-pointer"
										}`}
									disabled={quantity <= 1}
								>
									-
								</button>
								<h1 className='w-[30px] h-[30px] border flex items-center justify-center rounded-md text-lg'>
									{quantity}
								</h1>
								<div
									onClick={() => setQuantity(quantity + 1)}
									className=' w-[30px] h-[30px] bg-[#EFF0F5] cursor-pointer font-bold flex items-center justify-center rounded-md'
								>
									+
								</div>
							</div>
						</div>

						<div className='flex items-center gap-5 mt-4'>
							<Link
								// to={`/proceed_to_checkout/${singleProductData?._id}`}
								to={`/direct_buy`}
								state={singleProductData}
								className='flex-1'
								onClick={() => handlepayment(singleProductData)}
							>
								<button className='bg-[#2ABBE8] py-3  text-white text-xl font-semibold w-full'>
									Buy Now
								</button>
							</Link>
							{/* this is my product add btn  */}
							<button
								//TODO add to cart

								onClick={() =>
									addToCart(singleProductData)
								}
								className='bg-[#F57224] py-3 flex-1 text-white text-xl font-semibold'
							>
								Add to Cart
							</button>
							{/* this is my product add btn ends */}
						</div>
					</div>
				</div>
			</div>

			{loaddingForCart && (
				<div className=' bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[80%] md:w-[50%] md:h-[40%] rounded-lg shadow-[0px_0px_40px_rgba(0,0,0,.2)] flex items-center justify-center'>
					<SyncLoader color='#2ABBE8' />
				</div>
			)}
		</div>
	);
};

export default ProductPurchase;
