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
			<div className="bg-gradient-to-r from-violet-200 to-violet-700 h-0.5 md:h-1"></div>
			<div className={`${isSticky ? "sticky top-0" : ""} bg-primary-darkest text-white transition-all duration-300 ease-in-out`}>
				<div className="container mx-auto px-6 py-4 mt-5 flex justify-center md:justify-between items-center">
					<div className="text-xl hidden md:block">{"</>"}</div>
					<header className="border-violet-dark font-manrope-reguler bg-violet-dark text-xs rounded-full w-fit  py-[0.1rem] ">
						<nav className="flex gap-[0.3rem] px-[0.3rem] py-0.5 items-center">
							{["Home", "Projects", "Articles", "About"].map((item) => (
								<Link
									key={item}
									href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
									className={`hover:text-white hover:bg-primary-darkest hover:rounded-full hover:px-5 hover:py-2 transition-all px-4 duration-300 ${
										pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "text-white px-5 py-2 rounded-full bg-primary-darkest" : "text-gray-400"
									}`}
								>
									{item}
								</Link>
							))}
						</nav>
					</header>
					<div className="text-2xl font-bold"></div>
				</div>
			</div>
			<div className="h-[30rem] bg-primary-darkest"></div>
		</div>
	);
};

export default Header;
