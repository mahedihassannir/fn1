import {
    createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
            {
                // avengers 
				path: "products/:id",
				element: <SingleProduct></SingleProduct>,
			},
		],
	},
]);

export default router