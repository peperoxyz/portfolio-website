import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="container border border-violet-dark px-3 md:px-0 border-b-0 border-l-0 border-r-0 mt-20 my-10 py-5 mx-auto max-w-lg sm:max-w-[30rem] md:max-w-3xl lg:max-w-[62rem] xl:max-w-[77rem] flex justify-between text-gray-light text-sm">
			<div>Created with love, by Dea</div>
			<nav className="flex gap-5">
				{["Home", "Projects", "About"].map((item) => (
					<Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
						{item}
					</Link>
				))}
			</nav>
		</footer>
	);
};
