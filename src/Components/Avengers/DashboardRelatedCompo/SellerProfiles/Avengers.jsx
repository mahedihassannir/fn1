import React, { useContext } from 'react';
import PageTitleAndRefresh from '../../PageTitleAndRefresh/PageTitleAndRefresh';
import OrdersDetails from '../Orders/OrdersDetails/OrdersDetails';
import SingleSellerProfile from './SingleSellerProfile/SingleSellerProfile';
import { ContexM } from '../../../../Authentication/AuthProvider/AuthProvider';
import SelectComponent from '../../SelectComponent/SelectComponent';

const Avengers = () => {
    const { sellerCategory, setSellerCategory, showCategory, setShowCategory } =
		useContext(ContexM);
    const sellerCategoryData = [
		"Best Selling",
		"Rating: High to Low",
		"Rating: Low to High",
		"By name: A-Z",
		"By name: Z-A",
	];
    return (
		<div>
			<PageTitleAndRefresh title={"Seller Profiles"} />

			<div className='mt-4'>
				<div>
					<p>Sales period:</p>

					{/* sorting  */}
					<div className='mt-1 flex flex-col md:flex-row justify-between items-center'>
						<div className='py-1 px-3 border bg-white rounded'>
							Date
						</div>

						{/* sort by category and name or price  */}
						<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
							{/* sort by category */}
							<SelectComponent
								items={sellerCategoryData}
								stateValue={showCategory}
								setStateValue={setShowCategory}
								setValue={setSellerCategory}
								valueDisplay={sellerCategory}
							/>
						</div>
					</div>
				</div>

				<div className='mt-4 flex flex-col gap-4'>
					<SingleSellerProfile />
					<SingleSellerProfile />
				</div>
			</div>
		</div>
	);
};

export default Avengers;