import {
	createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
<<<<<<< HEAD
import ProceedToCheckout from "../Pages/ProceedToCheckout/ProceedToCheckout";
=======
import Register from "../Login/regester";
import Login from "../Login/login";
>>>>>>> 28c9cb8e5bfe474c6fd5a9cfc2b9b0d70a098f93


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
<<<<<<< HEAD
				// avengers
				path: "products/:id",
				element: <SingleProduct></SingleProduct>,
			},
			{
				// avengers
				path: "proceed_to_checkout",
				element: <ProceedToCheckout></ProceedToCheckout>,
			},
=======
				// avengers 
				path: "products/:id",
				element: <SingleProduct></SingleProduct>,
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


>>>>>>> 28c9cb8e5bfe474c6fd5a9cfc2b9b0d70a098f93
		],
	},
]);

export default router