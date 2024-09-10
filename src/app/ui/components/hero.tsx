import Image from "next/image";
import { Button } from "@/app/ui/components/button";
import handImage from "/src/public/images/hand-hello.png";
import heroPattern from "/src/public/images/hero-pattern.png";
import { ChevronDown } from "react-feather";

export const Hero = () => {
	return (
		<section id="hero" className="container max-w-[77rem] mx-auto py-4 mt-5 h-[75vh] flex items-center flex-col justify-center relative">
			<div className="container text-gray-light md:justify-between w-full block">
				<div className="flex justify-center md:justify-between">
					<div>
						<div className="flex gap-5 items-center">
							<Image src={handImage} className="w-14 sm:w-20 md:w-28" alt="Hand-Icon-Image" />
							<div>
								<span className="font-buenard-reguler md:text-2xl">{"</>"} Hi everyone, welcome to my page!</span>
								<h1 className="text-xl sm:text-3xl md:text-4xl mt-3 lg:text-5xl xl:text-6xl font-semibold text-white">
									<span className="text-gray-light text-xl sm:text-3xl md:text-4xl mt-3 lg:text-5xl xl:text-6xl font-semibold">I am</span> Dea Ananda Gunawan
								</h1>
							</div>
						</div>
						<div className="text-sm max-w-lg md:max-w-3xl mt-3 md:text-lg">
							<p className="text-gray-light">
								Graduated from State Polytechnic of Batam,majored in Informatics Engineering. <br /> Currently learning Fullstack Javascript with Next JS ecosystem in <span className="font-bold"> Devscale. </span>
							</p>
						</div>
						<div className="mt-3 flex flex-col md:flex-row gap-3">
							<Button color={true} name={"Download my resume"} />
							<Button color={false} name={"See what I have made"} />
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
