import {
	createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Register from "../Login/regester";
import Login from "../Login/login";
import ProceedToCheckout from "../Pages/ProceedToCheckout/ProceedToCheckout";


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
			{
				// avengers 
				path: "proceed_to_checkout",
				element: <ProceedToCheckout></ProceedToCheckout>,
			},

			{
				// Team Arrow
				path: "login",
				element: <Login></Login>,
			},

			{
				// Team Arrow 
				path: "register",
				element: <Register></Register>,
			},


		],
	},
]);

export default router