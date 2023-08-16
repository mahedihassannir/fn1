import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";

import { useEffect, useState } from "react";

const Main = () => {
   const [isNavOpen, setIsNavOpen] = useState(false)
   
    useEffect(() => {
		const handleScroll = () => {
			if (isNavOpen) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		};

		handleScroll();
	}, [isNavOpen]);
    return (
		<div onClick={() => setIsNavOpen(false)} className="overflow-x-hidden">
			<Nav
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
			></Nav>

			<Outlet></Outlet>

			<Footer></Footer>
		</div>
	);
};

export default Main;