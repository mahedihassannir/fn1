import { Link } from "react-router-dom";

const Markatingpage = () => {
    return (
        <div>
            <h1>this is seller page</h1>


            <Link to="/dashboard/markatingsolution" className=" mt-10 text-white py-4 px-6 bg-red-900">


                Go to markating page

            </Link>

            <Link to="/dashboard/productad " className=" btn ml-20 mt-10 text-white py-4 px-6 bg-red-900">


                Go to markating page 2nd step

            </Link>
            {/* this is for add performence */}
            <Link to="/dashboard/addperformence " className=" btn ml-20 mt-10 text-white py-4 px-6 bg-red-900">


                Go to product add performance

            </Link>

            <Link to="/dashboard/accStatementseller " className=" btn ml-20 mt-10 text-white py-4 px-6 bg-red-900">


                Account statement

            </Link>


        </div>
    );
};

export default Markatingpage;