import {
	createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Register from "../Login/regester";
import Login from "../Login/login";
import Fashion from "../Components/fantasticprople/Fashion";
import Food from "../Components/fantasticprople/Food";
import Beauty from "../Components/fantasticprople/Beauty";
import HomeAcc from "../Components/fantasticprople/HomeAcc";
import Below from "../Components/fantasticprople/Below";
import Kids from "../Components/fantasticprople/Kids";


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