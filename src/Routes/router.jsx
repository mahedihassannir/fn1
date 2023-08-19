import {
	createBrowserRouter,
} from "react-router-dom";

// make by leader 
import Main from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
// make by leader ends 


import SingleProduct from "../Pages/SingleProduct/SingleProduct";

// make by arrow
import Register from "../Login/regester";
import Login from "../Login/login";
<<<<<<< HEAD
// import UseItems from "../Hooks/FantasticCode/UseItems";
=======
// make by arrow ends

// this is make by fantastic people 
import Fashion from "../Components/fantasticprople/Fashion";
import Food from "../Components/fantasticprople/Food";
import Beauty from "../Components/fantasticprople/Beauty";
import HomeAcc from "../Components/fantasticprople/HomeAcc";
import Below from "../Components/fantasticprople/Below";
import Kids from "../Components/fantasticprople/Kids";
// this is make by fantastic people ends 


import ProceedToCheckout from "../Pages/ProceedToCheckout/ProceedToCheckout";
>>>>>>> 73405c8e682aaf9d69461fc695427cc2d99feefd

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
			// CodeWorms
			// {
			// 	path: "/category",
			// 	element: <UseItems></UseItems>
			// },
			
			
























			// starts
			// Fantastic people work starts

			{

				path: "food",
				element: <Food></Food>

			},
			{

				path: "fashion",
				element: <Fashion></Fashion>

			},
			{

				path: "beauty",
				element: <Beauty></Beauty>

			},
			{

				path: "homeacc",
				element: <HomeAcc></HomeAcc>

			},
			{

				path: "below499",
				element: <Below></Below>

			},
			{

				path: "kids",
				element: <Kids></Kids>

			},



			// Fantastic people work ends





















		],
		
			
	},
	

]);

export default router