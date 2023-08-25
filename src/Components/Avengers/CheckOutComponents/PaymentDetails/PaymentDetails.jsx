/**
 * Author: MG Rakib
 * description: PaymentDetails
 * date: 17aug,2023
 *
 * @format
 */
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";

//import { result } from "lodash";

const PaymentDetails = ({ singleProductData }) => {
	// for delivery info
	const [deliveryInfo, setDeliveryInfo] = useState({
		deliveryFee: 60,
		deliveryDiscount: 30,
	});

	// calculate total taka
	const totalTaka = singleProductData.reduce(
		(vlaue, product) =>
			product.quantity
				? product?.price * product.quantity
				: product?.price + vlaue,
		0
	);

	// calculate final amount widn delivery charge
	const [totalAmount, setTotalAmount] = useState(
		totalTaka + (deliveryInfo?.deliveryFee - deliveryInfo?.deliveryDiscount)
	);

	// for sslcommerze payment
	const onSubmit = () => {
		const data = {
			currency: "BDT",
			Total_Payment: totalAmount,
			productId: singleProductData?._id,
			productName: singleProductData?.name,
			category: singleProductData?.category,
			cus_name: "Toma",
			cus_id: 8,
			cus_email: "toma@com",
			cus_add1: "Mirpur",
		};
		fetch("http://localhost:5000/order", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
				
				window.location.replace(result.url);
			});
	};

	return (
		<div>
			<div className='text-xs font-semibold '>
				<div className='pb-5 border-b'>
					<p>Discount and Payment</p>

					{/* apply promo code  */}
					<div>
						<div className='mt-3 flex justify-between items-center'>
							<div className='flex items-center gap-1 '>
								<MdOutlineLocalOffer className='text-[#F57224]' />
								<p>Promo Code</p>
							</div>

							<div className='flex items-center gap-1'>
								<p className='text-gray-400'>
									Enter Store/Daraz Code
								</p>
								<BsChevronRight />
							</div>
						</div>

						<div className='mt-2 w-f  overflow-hidden relative '>
							<input
								type='text'
								className='py-[10px] outline-none border rounded placeholder:text-gray-400 w-full px-2 focus:border-[#2ABBE8] duration-300'
								placeholder='Enter Store/Daraz Code'
							/>
							<button className='absolute  right-0 top-1/2 -translate-y-1/2 border-l h-[50%] text-[#2ABBE8] px-3'>
								Confirm
							</button>
						</div>
					</div>
				</div>

				<div className='pt-5 font-bold'>
					<h1>Order Summary</h1>

					<div className='flex flex-col gap-2 mt-2'>
						{/*items total Taka  */}
						<div className='flex items-center justify-between'>
							<p className=''>Items Total</p>
							<div className='flex items-center gap-1'>
								<TbCurrencyTaka />
								<span>{totalTaka}</span>
							</div>
						</div>
						{/* Delivery Fee */}
						<div className='flex items-center justify-between'>
							<p>Delivery Fee</p>
							<div className='flex items-center gap-1'>
								<TbCurrencyTaka />
								<span>{deliveryInfo?.deliveryFee}</span>
							</div>
						</div>
						{/* Delivery Discount */}
						<div className='flex items-center justify-between'>
							<p>Delivery Discount</p>
							<div className='flex items-center gap-1'>
								<TbCurrencyTaka />
								<span>{deliveryInfo?.deliveryDiscount}</span>
							</div>
						</div>
						{/*Total Payment */}
						<div className='flex items-center justify-between'>
							<p>Total Payment</p>
							<div className='flex items-center gap-1'>
								<TbCurrencyTaka />
								<span>{totalAmount}</span>
							</div>
						</div>

						<div>
							<p className='text-gray-500 mt-1 text-right'>
								VAT included, where applicable
							</p>
						</div>
					</div>
				</div>

				<div className='pt-5'>
					{/* payment btn  */}
					<button
						onClick={onSubmit}
						className='py-3 w-full bg-[#F57224] hover:bg-[#DADADA] duration-300 hover:text-gray-500 text-white rounded'
					>
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentDetails;
