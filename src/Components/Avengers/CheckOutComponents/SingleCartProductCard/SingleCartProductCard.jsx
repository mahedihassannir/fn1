/** @format */

import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";

const SingleCartProductCard = () => {
	return (
		<div className='text-xs p-5 border rounded font-semibold'>
			{/* product image quantity */}
			<div className='flex items-center gap-3'>
				{/* product image  */}
				<div className='w-[60px]'>
					<img
						src='https://i.ibb.co/PgdpJzh/img2.jpg'
                        alt=''
                        className="w-full"
					/>
				</div>

				<div className='flex items-center justify-between flex-1 gap-2'>
					{/* product name  */}
					<div>
						<h3>A9 Mini WiFi Camera 1080P Full HD Night Vision</h3>
						<p>
							<small className='text-gray-500'>
								No Brand,Color Family:Black
							</small>
						</p>
					</div>

					{/* quantity  */}
					<div className="flex items-center gap-5 md:gap-10">
						<p>
							Qty: <span>1</span>
                        </p>
                        
                        <FaRegTrashAlt className="text-gray-500 cursor-pointer hover:text-red-500"/>
					</div>

					{/* price  */}
					<div className='flex items-center'>
						{/* previouse taka and discount  */}
						<div className='bg-[#F5F5F5] text-[10px] flex items-center gap-2 py-1 px-2'>
							{/* previouse price  */}
							<div className='flex items-center gap-1  line-through text-gray-500'>
								<TbCurrencyTaka />
								<p>700</p>
							</div>

							{/* discount  */}
							<div>
								<p>
									<span>40</span>%
								</p>
							</div>
						</div>

						<div className='flex items-center '>
							<TbCurrencyTaka />
							<p>539</p>
						</div>
					</div>
				</div>
			</div>

            
            {/* subtotal  */}
			<div className='mt-5 pt-5 border-t'>
				<div className=''>
					<p className='flex items-center  justify-end'>
						<span>1</span> item(s). Subtotal:{" "}
						<span className='flex items-center text-red-500'>
							<TbCurrencyTaka /> <p>539</p>
						</span>
					</p>
					<p className='flex items-center text-gray-400 mt-1 justify-end'>
						Saved
						<span className='flex items-center '>
							<TbCurrencyTaka /> <p>539</p>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleCartProductCard;
