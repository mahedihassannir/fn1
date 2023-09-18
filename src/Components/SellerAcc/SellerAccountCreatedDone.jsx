import { Link } from "react-router-dom";

const SellerAccountCreatedDone = () => {
    return (
        <div className="w-full h-screen">


            <h1 className="text-4xl">

                congratulation

            </h1>

            <Link to="/dashboard/dashboard/sellerhome">
                <button className="btn">

                    go to dash board

                </button>
            </Link>



        </div>
    );
};

export default SellerAccountCreatedDone;