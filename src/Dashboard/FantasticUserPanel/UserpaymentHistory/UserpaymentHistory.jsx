import useOrders from "../../../Hooks/Fantastic/useOrders";


const UserpaymentHistory = () => {
    const paymentHistory = useOrders()

    const myHistory = paymentHistory.filter(x => x.email === 'aanika.chowdhury04@gmail.com' && x.paidStatus === true)
    console.log(myHistory);

    return (
        <div className="mx-auto">
            <h1 className="text-center uppercase font-semibold">Payment History</h1>
            <div className="grid gap-2 my-10">
                {
                    myHistory.map(x =>
                        <div className="grid grid-cols-3 p-5 bg-white shadow text-gray-500 text-sm font-semibold">
                            <div>
                                <h1>Order <span>22-08-2023</span></h1>
                                <p className="text-gray-900">{x.product.productName}</p>
                                <p className=" underline text-blue-700">View Order Details</p>
                            </div>
                            <div className=" grid items-center">
                                <h1>Transaction Id</h1>
                                <p className=" text-red-600">{x.tranjectionid}</p>
                            </div>
                            <div className="flex justify-end items-center">
                                <p><span className=" text-red-800 text-xl">-</span>{x.product.Total_Payment} <span>{x.product.currency}</span></p>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default UserpaymentHistory;