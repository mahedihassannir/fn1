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
import Login from '../Login/login'

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
import Lips from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Lips";
import Eyes from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Eyes";
import Nails from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Nails";
import MensCare from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/MensCare";
import Face from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Face";

// CodeWorms
import Drone from "../Components/CodeWorms/LargeCategroy/Drone";
import Mobile from "../Components/CodeWorms/LargeCategroy/Mobile";
import Iphone from '../Components/CodeWorms/LargeCategroy/Iphone';
import Computer from "../Components/CodeWorms/LargeCategroy/Computer";
import Wireless from "../Components/CodeWorms/LargeCategroy/Wireless";
import Charger from "../Components/CodeWorms/LargeCategroy/Charger";
import Cable from "../Components/CodeWorms/LargeCategroy/Cable";
import Electronics from "../Components/CodeWorms/LargeCategroy/Electronics";
import Wifi from "../Components/CodeWorms/LargeCategroy/Wifi";
import HeadPhones from "../Components/CodeWorms/LargeCategroy/HeadPhones";
import ElectricalToy from "../Components/CodeWorms/LargeCategroy/ElectricalToy";
import Tablet from "../Components/CodeWorms/LargeCategroy/Tablet";
import Keyboard from "../Components/CodeWorms/LargeCategroy/Keyboard";
import Mouse from "../Components/CodeWorms/LargeCategroy/Mouse";
import Laptop from "../Components/CodeWorms/LargeCategroy/Laptop";
import Socket from "../Components/CodeWorms/LargeCategroy/Socket";

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
				path: "proceed_to_checkout/:id",
				element: <ProceedToCheckout></ProceedToCheckout>,
			},
			{
			// 	// avengers Toma PAYMENT SUCCESS ROUTE
				path: "payment/success/:tranId",
				element: <PaymentSuccess></PaymentSuccess>
			},
			{
				// avengers Toma PAYMENT Fail ROUTE
				path: "payment/fail/:tranId",
				element: <PaymentFailed></PaymentFailed>
			},

			
			{
				// Team Arrow
				path: "login",
				element: <Login></Login>
			},

			{
				// Team Arrow 
				path: "register",
				element: <Register></Register>,
			},
			// CodeWorms
			{
				path: 'drone',
				element: <Drone></Drone>
			},
			{
				path: 'mobile',
				element: <Mobile></Mobile>
			},
			{
				path: 'iphone',
				element: <Iphone></Iphone>
			},
			{
				path: 'computer',
				element: <Computer></Computer>
			},
			{
				path: 'wireless',
				element: <Wireless></Wireless>
			},
			{
				path: 'charger',
				element: <Charger></Charger>
			},
			{
				path: 'cable',
				element: <Cable></Cable>
			},
			{
				path: 'electronics',
				element: <Electronics></Electronics>
			},
			{
				path: 'wifi',
				element: <Wifi></Wifi>
			},
			{
				path: 'headphones',
				element: <HeadPhones></HeadPhones>
			},
			{
				path: 'toys',
				element: <ElectricalToy></ElectricalToy>
			},
			{
				path: 'tablet',
				element: <Tablet></Tablet>
			},
			{
				path: 'keyboard',
				element: <Keyboard></Keyboard>
			},
			{
				path: 'mouse',
				element: <Mouse></Mouse>
			},
			{
				path: 'laptop',
				element: <Laptop></Laptop>
			},
			{
				path: 'socket',
				element: <Socket></Socket>
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

			{

				path: "lips",
				element: <Lips></Lips>

			},
			{

				path: "face",
				element: <Face></Face>

			},
			{

				path: "eyes",
				element: <Eyes></Eyes>

			},
			{

				path: "nails",
				element: <Nails></Nails>

			},
			{

				path: "mensCare",
				element: <MensCare></MensCare>

			},




			// Fantastic people work ends





















		],
		
			
	},
	

]);

export default router