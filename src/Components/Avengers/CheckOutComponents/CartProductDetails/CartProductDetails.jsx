/**
 * Author: MG Rakib
 * description: CartProductDetails
 * date: 17aug,2023
 *
 * @format
 */
import SingleCartProductCard from "../SingleCartProductCard/SingleCartProductCard";

const CartProductDetails = () => {
	return (
		<div className='flex flex-col gap-5'>
			{/* user address  */}
			<div className='text-xs p-5 border rounded font-semibold'>
				<div>
					<h2>
						Deliver to: <span>MG</span>
					</h2>

					<div className='mt-3 flex items-center gap-3'>
						{/* address  */}
						<p>
							<span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
								HOME
							</span>
						</p>

						{/* number and address  */}
						<div className='flex items-center gap-3 divide-x'>
							<p>01811115794</p>
							<p className='pl-3'>
								Kashimpur Central jail, Kona Bari, Gazipur,
								Dhaka
							</p>
						</div>
						<div>
							{/* TODO: emplement change funtionality */}
							<button className='text-[#2ABBE8]'>Change</button>
						</div>
					</div>

					{/* email  */}
					<div className='mt-3 flex items-center gap-5'>
						<p>Email to:</p>
						<div className='flex items-center gap-2'>
							<p>mgrakibbd@gmail.com</p>
							{/* TODO: emplement change funtionality */}
							<button className='text-[#2ABBE8]'>Edit</button>
						</div>
					</div>
				</div>
			</div>

			{/* cart product  */}
			<div className='flex flex-col gap-5'>
				<SingleCartProductCard />
				<SingleCartProductCard />
			</div>
		</div>
	);
};

export default CartProductDetails;
