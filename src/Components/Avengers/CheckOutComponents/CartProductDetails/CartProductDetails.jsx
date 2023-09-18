/**
 * Author: mahedi
 * description: CartProductDetails
 * date: 17aug,2023
 *
 * @format`
 */
import { useContext } from "react";
import useCustomers from "../../../../Hooks/Fantastic/useCustomers";
import SingleCartProductCard from "../SingleCartProductCard/SingleCartProductCard";
import { ContexM } from "../../../../Authentication/AuthProvider/AuthProvider";

const CartProductDetails = ({ productsData }) => {
	const { user } = useContext(ContexM)
	const { customers } = useCustomers()
	const filterCustomer = user && user.email && customers.some(customer => customer.email === user.email)
		? customers.filter(customer => customer.email === user.email)
		: [];
	console.log(filterCustomer);

	return (
		<div className='flex flex-col gap-5'>
			{/* user address  */}
			<div className='text-xs p-5 border rounded font-semibold'>
				<div>
					<h2>
						Deliver to: {filterCustomer.length > 0 ? filterCustomer[0].name : "Name Unknown"}
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
							<p>{filterCustomer.length > 0 ? filterCustomer[0].mobile : "Number Unknown"}</p>
							<p className='pl-3'>
								{filterCustomer.length > 0 ? filterCustomer[0].selectdivision + ',' + filterCustomer[0].selectcity + ', ' + filterCustomer[0].area : "Number Unknown"}
							</p>
						</div>
						<div>
							{/* TODO: emplement change funtionality */}
							<button className='text-[#2ABBE8]'>Change</button>
						</div>
					</div>

					{/* email  */}
					<div className='mt-3 flex items-center gap-5'>
						<p>Email to: {filterCustomer.length > 0 ? filterCustomer[0].contactEmail : "Email Unknown"}</p>
						<div className='flex items-center gap-2'>
							<p></p>
							{/* TODO: emplement change funtionality */}
							<button className='text-[#2ABBE8]'>Edit</button>
						</div>
					</div>
				</div>
			</div>

			{/* cart product  */}
			<div className='flex flex-col gap-5'>
				{productsData.map(singleProductData => (
					<SingleCartProductCard singleProductData={singleProductData} />
				))}
			</div>
		</div>
	);
};

export default CartProductDetails;
