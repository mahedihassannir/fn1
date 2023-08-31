import { Link } from "react-router-dom";

const Markatingpage = () => {
    return (
        <div>
            <h1>this is seller page</h1>


            <Link to="/dashboard/markatingsolution" className=" mt-10 text-white py-4 px-6 bg-red-900">


                Go to markating page

            </Link>


        </div>
    );
};

export default Markatingpage;