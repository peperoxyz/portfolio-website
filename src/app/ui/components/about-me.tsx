import Image from "next/image";
import { AboutMeCard } from "./about-me-card";
import deaPhoto from "/src/public/images/dea.png";

export const AboutMe = () => {
	return (
		<section className="container mx-auto max-w-xl md:max-w-2xl lg:max-w-[62rem] xl:max-w-[77rem] py-10 xl:py-20 relative text-white px-14 ">
			<div className="flex items-center justify-center gap-16 flex-col xl:flex-row relative">
				<article className="flex justify-center xl:w-[30rem]">
					<div className="rounded-[1.5rem] -rotate-6 bg-violet-dark h-64 w-64 md:w-80 md:h-[22rem] xl:w-[23rem] -ml-10 xl:h-[22rem] mt-1"></div>
					<Image src={deaPhoto} alt="dea-photo" className="absolute h-64 w-64 md:w-[22rem] md:h-[22rem] xl:w-[24rem] xl:h-[24rem] object-cover" />
				</article>
				<article className="xl:flex-1">
					<AboutMeCard />
				</article>
			</div>
		</section>
	);
};
