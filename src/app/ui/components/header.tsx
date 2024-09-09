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
		<div className={`${isSticky ? "sticky top-0 z-50" : ""} bg-primary-dark text-white transition-all duration-300 ease-in-out`}>
			<div className="bg-gradient-to-r from-violet-200 to-violet-700 h-0.5 md:h-1"></div>
			<div className="container py-5 mx-auto max-w-lg sm:max-w-[30rem] md:max-w-3xl lg:max-w-[62rem] xl:max-w-[77rem] flex justify-center md:justify-between items-center">
				<div className="text-2xl hidden md:block">{"</>"}</div>
				<div className="md:-ml-10 border-violet-dark bg-violet-dark text-xs md:text-base rounded-full w-fit border-slate-700/20 shadow-inner shadow-black/50 py-[0.1rem] ">
					<nav className="flex gap-[0.3rem] px-[0.3rem] md:px-2 py-0.5 md:pt-1 md:pb-[0.125rem] items-center">
						{["Home", "Projects", "Articles", "About"].map((item) => (
							<Link
								key={item}
								href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
								className={`hover:bg-primary-dark hover:rounded-full hover:px-5 hover:py-2 transition-all px-4 duration-300  ${
									pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? "px-5 py-2 rounded-full bg-primary-dark" : "text-gray-light"
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
	);
};

export default Header;
