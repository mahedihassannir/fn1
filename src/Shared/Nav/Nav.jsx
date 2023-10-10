/** 
 * Author Name: MG Rakib
 * Description: Navbar
 * Date: 16-08-2023
*/

import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineSearch, HiMenu, HiOutlineMinusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { FaArrowRight, FaChevronCircleRight, FaClone, FaCut, FaUser } from "react-icons/fa";
import { ContexM } from "../../Authentication/AuthProvider/AuthProvider";
import UseCartHook from "../../Hooks/UseCartHook/UseCartHook";



const Nav = ({ isNavOpen, setIsNavOpen }) => {
	//get added quantity from auth provider

	const [cart, refetch] = UseCartHook();
	const { user, Logout, totalCart } = useContext(ContexM)


	const handleLogout = () => {

		Logout();



	}

	function handleReload() {

		window.location.reload();

	};
	refetch()
	const navItem = (
		<>
			{/* latest offers  */}
			<div className='flex items-center gap-1 text-white'>
				<AiOutlineGift className='text-[#FC9E66] text-3xl' />
				<p className='leading-4 font-bold'>
					Offers <br />
					<span className='text-xs font-normal'>
						Latest Offers
					</span>{" "}
				</p>
			</div>

			{/* CART  */}
			<div className='flex items-center gap-1 text-white'>

				<div className="relative">
					<div >
						<div className="relative">
							<div className="flex justify-center items-center h-[20px] w-[20px] bg-white p-1 rounded-full absolute -left-3 -top-2">
								<span className="text-black rounded-full text-[10px] font-semibold "> <small>+</small>{cart.length}</span>
							</div>
							<AiOutlineGift className="text-[#FC9E66] text-3xl" />
						</div>
					</div>
				</div>



				<Link to="/proceed_to_checkout" className='leading-4 font-bold '>
					Cart <br />
					<span className='text-xs font-normal'>Add items</span>{" "}
				</Link>
			</div>
			{/* PER ORDER  */}
			<div className='flex items-center gap-1 text-white'>
				<AiOutlineGift className='text-[#FC9E66] text-3xl' />
				<p className='leading-4 font-bold'>
					Per-Order <br />
					<span className='text-xs font-normal'>
						Order Today
					</span>{" "}
				</p>
			</div>
			{/* ACCOUNT  */}
			<div className="flex gap-2">


				{
					user
						?
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={user ? user.photoURL : "data:image/png;base64,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"} />
								</div>
							</label>
							<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
								<li>
									<p className="justify-between">
										{
											user.email
										}

									</p>

								</li>

								<li>
									<Link to="/dashboard" className="justify-between">
										dashboard
									</Link>
								</li>

								<li><a>Settings</a></li>
								<li><a onClick={handleLogout}>Logout</a></li>
							</ul>
						</div>

						:

						<Link to="/login" className='flex items-center gap-1 text-white'>




							{/* <abbr title={user.displayName} className="cursor-pointer"> */}

							{/* <img className="h-10 rounded-full" src={} alt="" /> */}
							{/* </abbr> */}


							<FaUser className='text-[#FC9E66] text-3xl' />



							<div className='leading-4 font-bold'>



								<span>
									Account
								</span>




								<br />


								<span className='text-xs font-normal'>
									Register or Login
								</span>

							</div>
						</Link>


				}
			</div>
		</>
	);

	const topNavItems = (
		<>
			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>Home</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li>TRACK MY ORDER</li>
			</Link>

			<Link className='hover:underline text-orange-800 duration-300'>
				<li>SELL ON E-COM</li>
			</Link>

			<Link
				to='seller_register'
				className='hover:underline hover:text-orange-600 duration-300'
			>
				<li className='uppercase'>Register as a Seller</li>
			</Link>

			<Link className='hover:underline hover:text-orange-600 duration-300'>
				<li className='uppercase'>affiliate Program </li>
			</Link>
		</>
	);

	const handelIsOpenNav = event => {
		event.stopPropagation()
		setIsNavOpen(true)
	}


	const [isSecondNavOpen, setIsSecondNavOpen] = useState(false);
	const handelSecondNav = event => {
		event.stopPropagation();
		setIsSecondNavOpen(!isSecondNavOpen);
	};

	return (
		<div>
			<ul className='hidden md:flex items-start justify-center gap-10 py-2'>
				{topNavItems}
			</ul>

			<div className='bg-[#000000]  md:px-20 flex justify-between items-center p-3 gap-4 md:gap-12 relative'>
				{/* logo */}
				<Link to="/" className='text-white '>
					<img
						src='https://i.ibb.co/P9tbKgZ/logo.jpg'
						alt=''
						className='h-14'
					/>
				</Link>

				{/* search div  */}
				<div className='flex-1 '>
					<div className='w-full relative rounded overflow-hidden'>
						<input
							type='text'
							name=''
							id=''
							placeholder='Search'
							className='w-full pl-3 pr-10 py-2 outline-none'
						/>

						<div className='absolute top-1/2 -translate-y-1/2 right-2'>
							<HiOutlineSearch className='text-[#FC9E66] text-2xl' />
						</div>
					</div>
				</div>

				{/* nav items for desktop  */}
				<div className='hidden md:flex items-center gap-10'>
					{navItem}
				</div>

				{/* menu bar for mobile  */}
				<div className='md:hidden'>
					<HiMenu
						onClick={handelIsOpenNav}
						className='text-white text-2xl'
					/>
				</div>

				{/* navbar for mobile  */}
				<div
					className={`md:hidden absolute bg-black top-0 ${isNavOpen ? "right-0" : "-right-96"
						} flex flex-col gap-5 h-screen p-5 duration-300 z-[999] overflow-y-auto`}
				>
					<div
						className={`pb-3 mt-5 ‍ relative ${isNavOpen
							? "right-[0px] opacity-100"
							: "right-[244px] opacity-25"
							}  z-40 duration-500`}
					>
						<IoClose className='text-white text-2xl' />
					</div>
					{navItem}

					<hr className='text-gray-400 border-gray-400' />

					<div>
						<div className='flex items-center gap-2 text-white'>
							<div
								onClick={handelSecondNav}
								className='flex flex-col gap-[4px] relative w-[20px]'
							>
								<div
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${isSecondNavOpen && "-rotate-45 absolute"
										}`}
								></div>
								<div
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${isSecondNavOpen && "rotate-45"
										}`}
								></div>
							</div>
							<p>nav items</p>
						</div>
						<div
							className={`${isSecondNavOpen ? "max-h-[400px]" : "max-h-0"
								}  overflow-hidden text-gray-400 duration-300 list-none`}
						>
							{topNavItems}
						</div>
					</div>
				</div>

				{/* overlay div when menu bar oepn for mobile */}
				<div
					className={`md:hidden absolute ${isNavOpen ? "top-0 left-0" : "top-0 left-[844px]"
						}  bg-[#0000008a]  w-[100vw] h-screen duration-500`}
				></div>
			</div>
		</div>
	);
};

export default Nav;
