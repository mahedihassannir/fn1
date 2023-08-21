

import PageTitleAndRefresh from "../../PageTitleAndRefresh/PageTitleAndRefresh";
import OrdersDetails from "./OrdersDetails/OrdersDetails";
const Avengers = () => {
    return (
        <div className='text-[#0A1727]'>
            
            <PageTitleAndRefresh title={'Orders'} />
            
            <div className="my-4">
                <OrdersDetails />
            </div>
		</div>
	);
};

export default Avengers;