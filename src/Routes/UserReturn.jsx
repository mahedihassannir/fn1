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
// thi is some categories 
import Lips from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Lips";
import Eyes from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Eyes";
import Nails from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Nails";
import MensCare from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/MensCare";
import Face from "../Components/fantasticprople/FashaionmaleFemail/insidebeauty/Face";
// thi is some categories 
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
import UserCustomerSupport from "../Dashboard/FantasticUserPanel/UserCustomerSupport/UserCustomerSupport";

import SellerHome from "../Dashboard/CodeWorms/SellerHome";
import AddItems from "../Dashboard/CodeWorms/AddItems";
import ManageProduct from "../Dashboard/CodeWorms/ManageProduct";

import Chat from "../Dashboard/DashboardCommonPage/Avengers/Chat/Chat";
import SellerProfile from "../Dashboard/Avengers/adminpanel/Pages/SellerProfile/SellerProfile";
import Customer from "../Dashboard/Avengers/adminpanel/Pages/Customer/Customer";
import SellerRequest from "../Dashboard/Avengers/adminpanel/Pages/SellerRequest/SellerRequest";
import SellerRegister from "../Pages/SellerRegister/SellerRegister";
import MyListing from "../Dashboard/FantasticUserPanel/UserHome/UserHomeComponents/MyListing/MyListing";
import Habibvaiwork from "../Components/Habibvaiwork/Habibvaiwork";
import UserOrderedProducts from "../Dashboard/FantasticUserPanel/UserHome/UserHomeComponents/UserOrderedProducts/UserOrderedProducts";
import { element } from "prop-types";
import Male from "../Components/fantasticprople/FashaionmaleFemail/Male/Male";
import Female from "../Components/fantasticprople/FashaionmaleFemail/Female/Female";
import SellerRegisterForm from "../Pages/SellerRegister/SellerRegisterForm/SellerRegisterForm";
import SellerPersonalInfoForm from "../Pages/SellerRegister/SellerPersonalInfoForm/SellerPersonalInfoForm";
import Wishlist from "../Dashboard/CodeWorms/Wishlist/Wishlist";
import PaymentHistory from "../Dashboard/CodeWorms/Payhistory/PaymentHistory";
import UserAddressForm from "../Dashboard/FantasticUserPanel/UserAddressForm/UserAddressForm";
import CustomerFeedback from "../Dashboard/CodeWorms/CustomerFeedback/CustomerFeedback";
import OrderResuns from "../Dashboard/CodeWorms/OrderResuns/OrderResuns";
import CustommerReview from "../Dashboard/CodeWorms/CustommerReview/CustommerReview";
import AddProduct from "../Dashboard/CodeWorms/AddProduct.jsx/AddProduct";
import MarkatingSolution from "../Dashboard/CodeWorms/MarkatingSolution/MarkatingSolution";
import Markatingpage from "../Dashboard/CodeWorms/Markatingpage/Markatingpage";
// import UserAddressForm from "../Dashboard/FantasticUserPanel/UserAddressForm/UserAddressForm";
import OrderManage from "../Dashboard/CodeWorms/OrderManage.jsx/OrderManage";
import Productad from "../Dashboard/CodeWorms/Markatingpage/Productad/Productad";
import Addperformence from "../Dashboard/CodeWorms/Markatingpage/addperformence/Addperformence";
import AccStatement from "../Dashboard/CodeWorms/Markatingpage/AccStatement/AccStatement";
import SellerAccountCreatedDone from "../Components/SellerAcc/SellerAccountCreatedDone";
import SellerSeeting from "../Dashboard/CodeWorms/SellerSeeting/SellerSeeting";
import SellerTool from "../Dashboard/CodeWorms/SellerTool/SellerTool";
import DirectPurches from "../Components/Avengers/SingleProductComponents/DirectPurches/DirectPurches";
import Privateroute from "../Private/Privateroute";
import SellerLogin from "../Dashboard/SellerLogin/SellerLogin";
import SearchReasult from "../Pages/Home/SearchReasult/SearchReasult";
import CodSuccessOrder from "../Components/CodSuccessOrder/CodSuccessOrder";



import SellerAccount from "../Dashboard/CodeWorms/SellerSeeting/SellerAccount/SellerAccount";
import SellerLogo from "../Dashboard/CodeWorms/SellerSeeting/SellerLogo/SellerLogo";
import BankAccount from "../Dashboard/CodeWorms/SellerSeeting/BankAccount/BankAccount";
import BusinessInformation from "../Dashboard/CodeWorms/SellerSeeting/BusinessInformation/BusinessInformation";
import Commissions from "../Dashboard/CodeWorms/SellerSeeting/Commissions/Commissions";
import AdditionalDetails from "../Dashboard/CodeWorms/SellerTool/AdditionalDetails/AdditionalDetails";
import VoucherDetails from "../Dashboard/CodeWorms/SellerTool/VoucherDetails/VoucherDetails";
import Deliveredorder from "../Dashboard/CodeWorms/Deliveredorder/Deliveredorder";
import UserReturn from "../Dashboard/FantasticUserPanel/userReturn/userReturn";
import UserReview from "../Dashboard/FantasticUserPanel/UserReview/UserReview";
import UserHelp from "../Dashboard/FantasticUserPanel/UserHelp/UserHelp";
import CategoryPage from "../Components/categoryPage/categoryPage";


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
				path: "/seller_login",
				element: <SellerLogin></SellerLogin>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
			{
				path: "userhelp",
				element: <UserHelp></UserHelp>
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
				// Mahedi
				path: "cod_success",
				element: <CodSuccessOrder></CodSuccessOrder>,
			},
			{
				// Mahedi
				path: "direct_buy",
				element: <DirectPurches></DirectPurches>
			},
			{
				// Mahedi
				path: "search_result",
				element: <SearchReasult></SearchReasult>
			},

			{
				// 	// avengers Toma PAYMENT SUCCESS ROUTE
				path: "payment/success/:tranId",
				element: <PaymentSuccess></PaymentSuccess>,
			},
			{
				// avengers Toma PAYMENT Fail ROUTE
				path: "payment/failed/:tranId",
				element: <PaymentFailed></PaymentFailed>,
			},
			{
				// avengers mahedi Seller Register
				path: "seller_register",
				element: <SellerRegister></SellerRegister>,
			},
			{
				// avengers MGR Seller RegisterForm
				path: "seller_register/form",
				element: <SellerRegisterForm></SellerRegisterForm>,
			},
			{
				// avengers MGR Seller RegisterForm
				path: "seller_register/personal_details",
				element: <SellerPersonalInfoForm></SellerPersonalInfoForm>,
			},
			// team arrow
			{

				path: "seller_account_created_dome",
				element: <SellerAccountCreatedDone></SellerAccountCreatedDone>
			},
			{
				// Team Arrow
				path: "login",
				element: <Login></Login>,
			},
			{
				// Team Arrow
				path: "habibvaiwork",
				element: <Habibvaiwork></Habibvaiwork>,
			},
			{
				// Team Arrow
				path: "register",
				element: <Register></Register>,
			},
			// CodeWorms
			{
				path: "dronee",
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
			// fashion route
			{
				path: "male",
				element: <Male />
			},
			{
				path: "female",
				element: <Female />
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
			{
				path: "/category/:categoryName",
				element: <CategoryPage></CategoryPage>
			}




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
				path: "/dashboardana",
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
				path: "userhome",
				element: <UserHome></UserHome>,
			},
			// Home Components Routes
			{
				path: "userhome/mylisting",
				element: <MyListing></MyListing>
			},
			{
				path: "useraddressform",
				element: <UserAddressForm></UserAddressForm>
			},












			// this is for user order
			{
				path: "userorder",
				element: <UserOrder></UserOrder>,
			},

			// this is for user order ends

			// user progress
			{
				path: "userprogress",
				element: <UserProgress></UserProgress>,
			},

			// user progress ends

			// user wishlist starts
			{
				path: "userwishlist",
				element: <UserWhichlist></UserWhichlist>,
			},
			// user wishlist ends

			// user userpayment starts

			{
				path: "userpaymenthistory",
				element: <UserpaymentHistory></UserpaymentHistory>,
			},
			// user userpayment ends

			// user Customer Support

			{

				path: "customersupport",
				element: <UserCustomerSupport></UserCustomerSupport>


			},

			{

				path: "wishlist",
				element: <Wishlist></Wishlist>


			},
			{

				path: "payhistory",
				element: <PaymentHistory></PaymentHistory>


			},
			{
				path: "return",
				element: <UserReturn></UserReturn>
			},
			{
				path: "review",
				element: <UserReview></UserReview>
			},






			// this area for the user panel work ends

			// TeamArrow
			// TeamArrow

			{
				path: "dashboard/customerfeedback",
				element: <CustomerFeedback></CustomerFeedback>,
			},
			{
				path: "dashboard/sellerhome",
				element: <SellerHome></SellerHome>,
			},
			{
				path: "dashboard/additems",
				element: <AddItems></AddItems>,
			},
			{
				path: "dashboard/manageproduct",
				element: <ManageProduct></ManageProduct>
			},

			// TeamArrow ends

			// this side is for seller


			// this block is for the seller 
			// this is for the teamarrow 
			{

				path: "/dashboard/orderresuns",
				element: <OrderResuns></OrderResuns>


			},
			// this is for the teamarrow ends
			// this is for the teamarrow 
			{

				path: "/dashboard/custommerreview",
				element: <CustommerReview></CustommerReview>


			},
			// this is for the teamarrow ends
			// this is for the teamarrow 
			{

				path: "/dashboard/ordermanage",
				element: <OrderManage></OrderManage>


			},
			// this is for the teamarrow ends
			// this is for the teamarrow 
			{

				path: "/dashboard/deliveredorders",
				element: <Deliveredorder></Deliveredorder>


			},
			// this is for the teamarrow ends

			// this is for the teamarrow 
			{

				path: "/dashboard/addproduct",
				element: <AddProduct></AddProduct>


			},
			// this is for the teamarrow ends

			// this is for the teamarrow seller markatingsolution 
			{

				path: "/dashboard/markatingpage",
				element: <Markatingpage></Markatingpage>


			},

			// this is markating page for product ad
			{

				path: "/dashboard/productad",
				element: <Productad></Productad>


			},

			// this is markating page for product ad ends
			// this is markating page for product performence
			{

				path: "/dashboard/addperformence",
				element: <Addperformence></Addperformence>


			},

			// this is markating page for performence ad ends
			// this is for acc state ment
			{
				path: "/dashboard/accStatementseller",
				element: <AccStatement></AccStatement>

			}
			// this is for acc state ment ends
			,
			{

				path: "/dashboard/markatingsolution",
				element: <MarkatingSolution></MarkatingSolution>


			},
			// this is for the teamarrow ends



			// this block is for the seller ends


			{

				path: "/dashboard/sellerSeeting",
				element: <SellerSeeting></SellerSeeting>


			},


			{

				path: "/dashboard/sellertools",
				element: <SellerTool></SellerTool>
			},
			// this side is for seller

			// Seller Setting Route

			// seller Account
			{
				path: '/dashboard/sellerSetting/sellerAccount',
				element: <SellerAccount></SellerAccount>
			},
			{
				path: '/dashboard/sellersetting/sellerLogo',
				element: <SellerLogo></SellerLogo>
			},

			{
				path: '/dashboard/sellersetting/bankaccount',
				element: <BankAccount></BankAccount>
			},
			{
				path: '/dashboard/sellersetting/businessInformation',
				element: <BusinessInformation></BusinessInformation>
			},
			{
				path: '/dashboard/sellersetting/commissions',
				element: <Commissions></Commissions>
			},
			{
				path: '/dashboard/sellertools/additional',
				element: <AdditionalDetails></AdditionalDetails>
			},
			{
				path: '/dashboard/sellertools/voucherDetails',
				element: <VoucherDetails></VoucherDetails>
			}
		],
	},



]);

export default router