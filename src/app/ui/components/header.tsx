"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div className={`${isSticky ? "sticky top-0" : ""} bg-primary-darkest text-white transition-all duration-300 ease-in-out`}>
				<div className="bg-gradient-to-r from-violet-200 to-violet-700 h-0.5 md:h-1"></div>
				<div className="container mx-auto px-6 py-4 mt-5 flex justify-center md:justify-between items-center">
					<div className="text-2xl hidden md:block">{"</>"}</div>
					<div className="-ml-10 border-violet-dark font-manrope-reguler bg-violet-dark text-xs md:text-base rounded-full w-fit  py-[0.1rem] ">
						<nav className="flex gap-[0.3rem] px-[0.3rem] md:px-2 py-0.5 md:py-1 items-center">
							{["Home", "Projects", "Articles", "About"].map((item) => (
								<Link
									key={item}
									href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
									className={`hover:bg-primary-darkest hover:rounded-full hover:px-5 hover:py-2 transition-all px-4 duration-300  ${
										pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-violet-400 px-5 py-2 rounded-full bg-primary-darkest" : "text-white"
									}`}
								>
									{item}
								</Link>
							))}
						</nav>
					</div>
					<div className="text-2xl font-bold"></div>
				</div>
			</div>
			<div className="h-[30rem] bg-primary-darkest"></div>
		</div>
	);
};

export default Header;
