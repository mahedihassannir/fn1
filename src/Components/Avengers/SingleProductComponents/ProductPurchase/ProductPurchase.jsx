
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import takaIcon from '../../../../assets/taka.png'
import takaIconGray from '../../../../assets/taka_gray.png'
const ProductPurchase = () => {
    return (
		<div>
			<div className='flex flex-col md:flex-row gap-10'>
				{/* product Image  */}
				<div className='w-full md:w-1/3 '>
					<div>
						<img
							src='https://i.ibb.co/PgdpJzh/img2.jpg'
							alt=''
							className='w-full'
						/>
					</div>

					<div className='mt-5'>
						<div className='flex items-center'>
							<BsChevronLeft className='text-5xl' />

							<div className='flex items-center gap-3'>
								<div className='w-[70px] p-1 border border-[#F57224]'>
									<img
										src='https://i.ibb.co/PgdpJzh/img2.jpg'
										alt=''
									/>
								</div>

								<div className='w-[70px] p-1 '>
									<img
										src='https://i.ibb.co/PgdpJzh/img2.jpg'
										alt=''
									/>
								</div>

								<div className='w-[70px] p-1 '>
									<img
										src='https://i.ibb.co/PgdpJzh/img2.jpg'
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
						Cross body Bag for Men Official Messenger Bag Bike Rider
						Crossbody Bag Pu Leather Bag Sholder Bag Diagonal
						Package Handbag Bag For Men Corss Body Shoulder Bag For
						Men
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
								<FaRegHeart />
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
							<span>555</span>
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
								<div className='w-[30px] h-[30px] bg-[#EFF0F5] cursor-pointer font-bold flex items-center justify-center rounded-md'>
									-
								</div>
								<h1 className='w-[30px] h-[30px] border flex items-center justify-center rounded-md text-lg'>
									1
								</h1>
								<div className='w-[30px] h-[30px] bg-[#EFF0F5] cursor-pointer font-bold flex items-center justify-center rounded-md'>
									+
								</div>
							</div>
						</div>

						<div className='flex items-center gap-5 mt-4'>
							<button className='bg-[#2ABBE8] py-3 flex-1 text-white text-xl font-semibold'>
								Bye Now
							</button>
							<button className='bg-[#F57224] py-3 flex-1 text-white text-xl font-semibold'>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPurchase;