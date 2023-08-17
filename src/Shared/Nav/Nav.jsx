/** 
 * Author Name: MG Rakib
 * Description: Navbar
 * Date: 16-08-2023
*/

import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineSearch, HiMenu, HiOutlineMinusSm } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Nav = ({ isNavOpen, setIsNavOpen }) => {
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
				<AiOutlineGift className='text-[#FC9E66] text-3xl' />
				<p className='leading-4 font-bold'>
					Cart <br />
					<span className='text-xs font-normal'>Add items</span>{" "}
				</p>
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
			<div className='flex items-center gap-1 text-white'>
				<AiOutlineGift className='text-[#FC9E66] text-3xl' />
				<p className='leading-4 font-bold'>
					Account <br />
					<span className='text-xs font-normal'>
						Register or Login
					</span>{" "}
				</p>
			</div>
			
			
		</>
	);

	const topNavItems = (
		<>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
			</Link>
			<Link>
				<li>Home</li>
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
				<div className='text-white'>
					<img
						src='https://i.ibb.co/P9tbKgZ/logo.jpg'
						alt=''
						className='h-14'
					/>
				</div>

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
					className={`md:hidden absolute bg-black top-0 ${
						isNavOpen ? "right-0" : "-right-96"
					} flex flex-col gap-5 h-screen p-5 duration-300 z-[999] overflow-y-auto`}
				>
					<div
						className={`pb-3 mt-5 ‍ relative ${
							isNavOpen
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
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${
										isSecondNavOpen && "-rotate-45 absolute"
									}`}
								></div>
								<div
									className={`w-4 h-[2px] bg-white origin-center duration-300 ${
										isSecondNavOpen && "rotate-45"
									}`}
								></div>
							</div>
							<p>nav items</p>
						</div>
						<div
							className={`${
								isSecondNavOpen ? "max-h-[400px]" : "max-h-0"
							}  overflow-hidden text-gray-400 duration-300 list-none`}
						>
							{topNavItems}
						</div>
					</div>
				</div>

				{/* overlay div when menu bar oepn for mobile */}
				<div
					className={`md:hidden absolute ${
						isNavOpen ? "top-0 left-0" : "top-0 left-[444px]"
					}  bg-[#0000008a]  w-[100vw] h-screen duration-500`}
				></div>
			</div>
		</div>
	);
};

export default Nav;
