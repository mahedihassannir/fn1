import useOrders from "../../../Hooks/Fantastic/useOrders";

const UserOrder = () => {
    const orders=useOrders();
    console.log(orders);
    
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-center uppercase font-bold">My Orders</h1>
            <div className="my-10 ">
                <h1 className=" font-bold pb-5">Active Orders</h1>
                <div className="grid gap-5 overflow-y-auto max-h-80">
                    <div className=" text-gray-700 bg-white text-sm font-semibold p-5 shadow grid grid-cols-2" >
                        <div>
                            <p className="">Order Number #30030</p>
                            <h1>Total Price: 5000 Taka</h1>
                            <p>Payment method: Cash On Delivery</p>
                            <p>Payment Status: <span className="text-red-700">Due</span></p>
                            <p>Estimate Delivery Time: 22nd Aug 2023 - 30 Aug 2023</p>
                        </div>
                        <div className=" flex justify-end items-center">
                            <button className=" border border-black shadow px-3 py-1 text-green-800 hover:bg-gray-200 rounded">View details</button  >
                        </div>
                    </div>
                </div>
                
                <h1 className=" font-bold py-5">Previous Orders</h1>
                <div className="grid gap-5 overflow-y-auto max-h-80">
                    <div className=" text-gray-700  bg-white text-sm font-semibold p-5 shadow grid grid-cols-2" >
                        <div>
                            <p className="">Order Number #30029</p>
                            <h1>Total Price: 5000 Taka</h1>
                            <p>Payment method: Cash On Delivery</p>
                            <p>Payment Status: <span className="text-green-700">Paid</span></p>
                            <p>Delivery Time: 22nd Aug 2023</p>
                        </div>
                        <div className=" flex justify-end items-center">
                            <button className=" border border-black shadow px-3 py-1 text-green-800 hover:bg-gray-200 rounded">View details</button  >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrder;