import Image from "next/image";
import { Button } from "@/app/ui/components/button";
import handImage from "/src/public/icons/hand-hello.png";
import heroPattern from "/src/public/icons/hero-pattern.png";
import { ChevronDown } from "react-feather";
import Link from "next/link";

export const Hero = () => {
	return (
		<section id="hero" className="container px-3 sm:px-0 max-w-[77rem] mx-auto py-4 mt-5 h-[75vh] flex items-center flex-col justify-center relative">
			<div className="container text-gray-light md:justify-between w-full block">
				<div className="flex justify-center md:justify-between">
					<div>
						<div className="flex gap-5 items-center">
							<Image src={handImage} className="w-14 sm:w-20 md:w-28" alt="Hand-Icon-Image" />
							<div>
								<span className="font-buenard-reguler text-xs sm:text-lg md:text-2xl">{"</>"} Hi everyone, welcome to my page!</span>
								<h1 className="text-lg sm:text-3xl md:text-4xl mt-1 md:my-3 lg:text-5xl xl:text-6xl font-semibold text-white">
									<span className="text-gray-light text-xl sm:text-3xl md:text-4xl mt-3 lg:text-5xl xl:text-6xl font-semibold">I am</span> Dea Ananda Gunawan
								</h1>
							</div>
						</div>
						<div className="max-w-xl md:max-w-3xl mb-3 mt-2">
							<p className="text-gray-light text-xs sm:text-sm md:text-lg">
								Graduated from State Polytechnic of Batam, majored in Informatics Engineering. Currently learning Fullstack Javascript with Next JS ecosystem in <span className="font-bold"> Devscale. </span>
							</p>
						</div>
						<div className="mt-3 flex flex-col md:flex-row gap-3">
							<Link target={"_blank"} href={"https://drive.google.com/file/d/1fqFH4wD7pZYNcIof4kqlfYnL6MyK6LgQ/view"}>
								<Button color={true} name={"Download my resume"} />
							</Link>
							<Link href={"/projects"}>
								<Button color={false} name={"See what I have made"} />
							</Link>
						</div>
					</div>
					<div className="hidden xl:block xl:right-10 static">
						<Image src={heroPattern} className="w-52 py-3" alt="Hero-Pattern-Image" />
					</div>
				</div>
			</div>
			<div className="absolute -bottom-10 text-white">
				<ChevronDown size={34} />
			</div>
		</section>
	);
};
