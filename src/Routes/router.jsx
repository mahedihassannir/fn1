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
import PaymentSuccess from "../Components/Avengers/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Components/PaymentFailed/PaymentFailed";

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
				// avengers Toma PAYMENT SUCCESS ROUTE
				path: "payment/success/:tranId",
				element: <PaymentSuccess></PaymentSuccess>,
			},
			{
				// avengers Toma PAYMENT Fail ROUTE
				path: "payment/fail/:tranId",
				element: <PaymentFailed></PaymentFailed>
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