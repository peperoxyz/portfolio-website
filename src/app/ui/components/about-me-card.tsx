import Image from "next/image";
import { Button } from "./button";
import { SocialIcons } from "./social-icons";
import starIcon from "/src/public/images/star.png";

interface CardDetail {
	title: string;
	paragraph1: string;
	paragraph2: string;
	email: string;
	github: string;
	twitter: string;
	linkedin: string;
	resume: string;
}

export const AboutMeCard = () => {
	const cardDetail: CardDetail = {
		title: "A little bit more about me...",
		paragraph1:
			"I graduated from State Polytechnic of Batam,majored in Informatics Engineering. Recently learning how to build beautiful UI components with React Ecosystem (Next.js) and Tailwind CSS. As for the backend side, I’ve explored to create a simple web app using Native PHP, Go, and NodeJS.",
		paragraph2:
			"During my internship as a Front End Developer in Folxcode, I’ve created some UI designs and its implementation with Angular and Tailwind CSS. Within that, I’m also familiar with creating a responsive-layout websites, implementing dynamic interaction in website, and up to data management and manipulation in API consumption for CRUD. I’m also open to exploring newer technologies or tech stack that required in my working environment.",
		email: "deaanandagunawan@gmail.com",
		github: "https://github.com/peperoxyz",
		twitter: "https://x.com/dededededea_",
		linkedin: "https://www.linkedin.com/in/dea-ananda-gunawan/",
		resume: "https://drive.google.com/file/d/1Obp3aSl3vNr2PPjqL8POqDe31pnqQs6a/view",
	};

	const { title, paragraph1, paragraph2, email, github, linkedin, resume, twitter } = cardDetail;

	return (
		<div>
			<div className="bg-primary-dark w-full md:w-[80%] mx-auto xl:w-full border-violet-dark rounded-b-none p-7 rounded-xl">
				<div className="flex gap-5 xl:justify-start mb-4">
					<Image src={starIcon} objectFit="cover" alt="icon-star object-cover" height={40} />
					<div className="font-buenard-reguler text-[1.7rem]">{title}</div>
				</div>
				<div className="text-sm text-gray-light leading-relaxed font-extralight">
					<p className="mb-4">{paragraph1}</p>
					<p>{paragraph2}</p>
				</div>
			</div>
			<div className="bg-primary-dark w-full md:w-[80%] mx-auto xl:w-full border-violet-dark border-t-0 rounded-t-none p-7 rounded-xl">
				<div className="flex flex-col gap-2">
					<span className="text-white">Email</span>
					<span className="text-gray-light hover:cursor-pointer hover:text-white">{email}</span>
				</div>
				<div className="flex justify-between items-center mt-4">
					<div>
						<Button color={true} name="Download cv" />
					</div>
					<div>
						<SocialIcons links={{ github: github, twitter: twitter, linkedin: linkedin }} />
					</div>
				</div>
			</div>
		</div>
	);
};
