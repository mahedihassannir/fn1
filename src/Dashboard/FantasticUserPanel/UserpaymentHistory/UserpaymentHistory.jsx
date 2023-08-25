
const UserpaymentHistory = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-center uppercase font-semibold">Payment History</h1>
            <div className="grid gap-2 my-10">
                <div className="grid grid-cols-2 p-5 bg-white shadow text-gray-500 text-sm font-semibold">
                    <div>
                        <h1>Order <span>22-08-2023</span></h1>
                        <p className="text-gray-900">Shop Name</p>
                        <p className=" underline text-blue-700">View Order Details</p>
                    </div>
                    <div className="flex justify-end items-center">
                        <p><span className=" text-red-800 text-xl">-</span> 2000 Taka</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 p-5 bg-white shadow text-gray-500 text-sm font-semibold">
                    <div>
                        <h1>Refund <span>22-08-2023</span></h1>
                        <p className="text-gray-900">Shop Name</p>
                        <p className=" underline text-blue-700">View Order Details</p>
                    </div>
                    <div className="flex justify-end items-center">
                        <p><span className=" text-green-800 text-xl">+ </span>2000 Taka</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserpaymentHistory;