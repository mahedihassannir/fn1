/**
 * Author: mahedi
 * description: CartProductDetails
 * date: 17aug,2023
 *
 * @format`
 */
import { useContext, useEffect, useState } from "react";
import useCustomers from "../../../../Hooks/Fantastic/useCustomers";
import SingleCartProductCard from "../SingleCartProductCard/SingleCartProductCard";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";
import UseCartHook from "../../../../Hooks/UseCartHook/UseCartHook";
import { Link } from "react-router-dom";
import Useaddress from "../../../../Hooks/Useaddress/Useaddress";


const CartProductDetails = ({ productsData }) => {
	const { user } = useContext(ContexM)
	// const { customers } = useCustomers()
	// const filterCustomer = user && user.email && customers.some(customer => customer.email === user.email)
	// 	? customers.filter(customer => customer.email === user.email)
	// 	: [];




	const [address] = Useaddress();


	const [cart, refetch] = UseCartHook();




	console.log("lijhg oijhg ipuuh 1212121212", address);
	const { result } = cart
	console.log(result);

	refetch();
	return (
		<div className='flex flex-col gap-1'>
			{/* user address  */}
			{
				address.map(addressd => <div className='text-xs p-5 border rounded font-semibold'>
					<div>
						<h2>
							Deliver to: {addressd.name}
						</h2>

						<div className='mt-3 flex items-center gap-3'>
							{/* address  */}
							<p>
								<span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
									HOME {addressd.selectcity} ,{addressd.area}
								</span>
							</p>

							{/* number and address  */}
							<div className='flex items-center gap-3 divide-x'>
								<p>{addressd.mobile}</p>
								<p className='pl-3'>

								</p>
							</div>
							<Link to="/dashboard/useraddressform">
								{/* TODO: emplement change funtionality */}
								<button className='text-[#2ABBE8]'>Change</button>
							</Link>
						</div>

						{/* email  */}
						<div className='mt-3 flex items-center gap-5'>

							<p>Email to:{addressd.email}</p>

							<p>
								<span className='bg-[#EBF4F6] inline-block py-[2px] px-2 text-[10px] rounded'>
									HOME {addressd.selectcity} ,{addressd.area} ,{addressd.landmark}
								</span>
							</p>

							<div className='flex items-center gap-2'>
								<p></p>
								{/* TODO: emplement change funtionality */}

								<Link to="/dashboard/useraddressform">

									<button className='text-[#2ABBE8]'>Edit</button>
								</Link>
							</div>
						</div>
					</div>

				</div>)
			}

			{/* data product */}
			<div className='flex flex-col gap-5'>

				{cart.result && cart.result.length > 0 ? (
					cart.result.map(product => (
						<SingleCartProductCard key={product._id} singleProductData={product} />
					))
				) : (
					<p>No products in the cart</p>
				)}
			</div>
		</div>
	);
};

export default CartProductDetails;
