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
import DashBoardManage from "../Dashboard/DashBoardManage/DashBoardManage";
import PaymentSuccess from "../Components/Avengers/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Components/PaymentFailed/PaymentFailed";

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
import Analytics from "../Dashboard/Avengers/adminpanel/Pages/Analytics";
import Orders from "../Dashboard/Avengers/adminpanel/Pages/Orders/Orders";
import UserHome from "../Dashboard/FantasticUserPanel/UserHome/UserHome";
import UserOrder from "../Dashboard/FantasticUserPanel/UserOrder/UserOrder";
import UserProgress from "../Dashboard/FantasticUserPanel/UserProgress/UserProgress";
import UserWhichlist from "../Dashboard/FantasticUserPanel/UserWhichlist/UserWhichlist";
import UserpaymentHistory from "../Dashboard/FantasticUserPanel/UserpaymentHistory/UserpaymentHistory";

import SellerHome from "../Dashboard/CodeWorms/SellerHome";
import AddItems from "../Dashboard/CodeWorms/AddItems";

import Chat from "../Dashboard/DashboardCommonPage/Avengers/Chat/Chat";
import SellerProfile from "../Dashboard/Avengers/adminpanel/Pages/SellerProfile/SellerProfile";
import Customer from "../Dashboard/Avengers/adminpanel/Pages/Customer/Customer";
import SellerRequest from "../Dashboard/Avengers/adminpanel/Pages/SellerRequest/SellerRequest";
import SellerRegister from "../Pages/SellerRegister/SellerRegister";


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
				// avengers
				path: "proceed_to_checkout/:id",
				element: <ProceedToCheckout></ProceedToCheckout>,
			},
			{
				// 	// avengers Toma PAYMENT SUCCESS ROUTE
				path: "payment/success/:tranId",
				element: <PaymentSuccess></PaymentSuccess>,
			},
			{
				// avengers Toma PAYMENT Fail ROUTE
				path: "payment/fail/:tranId",
				element: <PaymentFailed></PaymentFailed>,
			},
			{
				// avengers Toma PAYMENT Fail ROUTE
				path: "seller_register",
				element: <SellerRegister></SellerRegister>,
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
			{
				path: "drone",
				element: <Drone></Drone>,
			},
			{
				path: "mobile",
				element: <Mobile></Mobile>,
			},
			{
				path: "iphone",
				element: <Iphone></Iphone>,
			},
			{
				path: "computer",
				element: <Computer></Computer>,
			},
			{
				path: "wireless",
				element: <Wireless></Wireless>,
			},
			{
				path: "charger",
				element: <Charger></Charger>,
			},
			{
				path: "cable",
				element: <Cable></Cable>,
			},
			{
				path: "electronics",
				element: <Electronics></Electronics>,
			},
			{
				path: "wifi",
				element: <Wifi></Wifi>,
			},
			{
				path: "headphones",
				element: <HeadPhones></HeadPhones>,
			},
			{
				path: "toys",
				element: <ElectricalToy></ElectricalToy>,
			},
			{
				path: "tablet",
				element: <Tablet></Tablet>,
			},
			{
				path: "keyboard",
				element: <Keyboard></Keyboard>,
			},
			{
				path: "mouse",
				element: <Mouse></Mouse>,
			},
			{
				path: "laptop",
				element: <Laptop></Laptop>,
			},
			{
				path: "socket",
				element: <Socket></Socket>,
			},

			// starts
			// Fantastic people work starts

			{
				path: "food",
				element: <Food></Food>,
			},
			{
				path: "fashion",
				element: <Fashion></Fashion>,
			},
			{
				path: "beauty",
				element: <Beauty></Beauty>,
			},
			{
				path: "homeacc",
				element: <HomeAcc></HomeAcc>,
			},
			{
				path: "below499",
				element: <Below></Below>,
			},
			{
				path: "kids",
				element: <Kids></Kids>,
			},

			{
				path: "lips",
				element: <Lips></Lips>,
			},
			{
				path: "face",
				element: <Face></Face>,
			},
			{
				path: "eyes",
				element: <Eyes></Eyes>,
			},
			{
				path: "nails",
				element: <Nails></Nails>,
			},
			{
				path: "mensCare",
				element: <MensCare></MensCare>,
			},

			// Fantastic people work ends
		],
	},
	// this area for dashboard work
	{
		path: "dashboard",
		element: <DashBoardManage></DashBoardManage>,
		children: [
			{
				// AVENGERS TOMU
				path: "analytics",
				element: <Analytics></Analytics>,
			},
			{
				// AVENGERS TOMU
				path: "customer",
				element: <Customer></Customer>,
			},

			// ends

			{
				// AVENGERS MGR
				path: "orders",
				element: <Orders></Orders>,
			},
			{
				// AVENGERS MGR
				path: "seller_profile",
				element: <SellerProfile></SellerProfile>,
			},
			{
				// AVENGERS MGR
				path: "seller_request",
				element: <SellerRequest></SellerRequest>,
			},
			{
				// AVENGERS MGR
				path: "message",
				element: <Chat></Chat>,
			},

			// ends

			// this area for the user panel work

			// fantastic people routes

			{
				path: "dashboard/userhome",
				element: <UserHome></UserHome>,
			},
			// this is for user order
			{
				path: "dashboard/userorder",
				element: <UserOrder></UserOrder>,
			},

			// this is for user order ends

			// user progress
			{
				path: "dashboard/userprogress",
				element: <UserProgress></UserProgress>,
			},

			// user progress ends

			// user wishlist starts
			{
				path: "dashboard/userwishlist",
				element: <UserWhichlist></UserWhichlist>,
			},
			// user wishlist ends

			// user userpayment starts

			{
				path: "dashboard/userpaymenthistory",
				element: <UserpaymentHistory></UserpaymentHistory>,
			},
			// user userpayment ends

			// this area for the user panel work ends
			// CodeWorms

			{
				path: "dashboard/sellerhome",
				element: <SellerHome></SellerHome>,
			},
			{
				path: "dashboard/additems",
				element: <AddItems></AddItems>,
			},

			//TODO

			// this side is for user

			// TODO

			// this side is for seller
		],
	},
]);

export default router