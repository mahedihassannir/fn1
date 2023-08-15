/** 
 * Author Name: MG Rakib
 * Descripation: Navbar
 * Date: 16-08-2023
*/

import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const Nav = () => {
	return (
		<div>
			<ul className='flex items-start justify-center gap-10 py-2'>
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
			</ul>

			<div className='bg-[#000000]  md:px-20 flex justify-between items-center p-3 gap-12'>
				{/* logo */}
				<div className='text-white'>
					<img
						src='https://i.ibb.co/P9tbKgZ/logo.jpg'
						alt=''
						className='h-20'
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

				<div className='flex items-center gap-10'>
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

					{/* latest offers  */}
					<div className='flex items-center gap-1 text-white'>
						<AiOutlineGift className='text-[#FC9E66] text-3xl' />
						<p className='leading-4 font-bold'>
							Cart <br />
							<span className='text-xs font-normal'>
								Add items
							</span>{" "}
						</p>
					</div>
					{/* latest offers  */}
					<div className='flex items-center gap-1 text-white'>
						<AiOutlineGift className='text-[#FC9E66] text-3xl' />
						<p className='leading-4 font-bold'>
							Per-Order <br />
							<span className='text-xs font-normal'>
								Order Today
							</span>{" "}
						</p>
					</div>
					{/* latest offers  */}
					<div className='flex items-center gap-1 text-white'>
						<AiOutlineGift className='text-[#FC9E66] text-3xl' />
						<p className='leading-4 font-bold'>
							Account <br />
							<span className='text-xs font-normal'>
								Register or Login
							</span>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
