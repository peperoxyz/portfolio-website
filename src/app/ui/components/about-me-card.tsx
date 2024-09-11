import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { SocialIcons } from "./social-icons";
import starIcon from "/src/public/icons/star.png";

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
			"I was graduated from State Polytechnic of Batam, in Informatics and Engineering major. Recently learning how to build beautiful UI components with React Ecosystem (Next.js) and Tailwind CSS. As for the backend side, I’ve been exploring about how to create a simple web app using PHP (native & Laravel), GO, and also Next.js + Prisma. Just so I'd know what actualy happened behind my beautifully designed websites :3",
		paragraph2:
			"During my internship as a Front End Developer in Folxcode, I’ve created some UI designs and its implementation with Angular and Tailwind CSS. Within that, I’m also familiar with creating a responsive-layout websites, implementing dynamic interaction in website, and up to data management and manipulation in API consumption for CRUD. I’m also open to exploring newer technologies or tech stack that required in my working environment.",
		email: "deaanandagunawan@gmail.com",
		github: "https://github.com/peperoxyz",
		twitter: "https://x.com/dededededea_",
		linkedin: "https://www.linkedin.com/in/dea-ananda-gunawan/",
		resume: "https://drive.google.com/file/d/1cXyWf9k0nqO5RnLbxB6AvORsNRcXVOXY/view",
	};

	const { title, paragraph1, paragraph2, email, github, linkedin, resume, twitter } = cardDetail;

	return (
		<div>
			<div className="bg-primary-dark w-full lg:w-[70%] mx-auto xl:w-full border-violet-dark rounded-b-none p-7 rounded-xl">
				<div className="flex gap-5 items-center xl:justify-start mb-4">
					<Image src={starIcon} alt="icon-star object-cover" height={40} />
					<div className="font-buenard-reguler text-lg md:text-xl lg:text-[1.7rem]">{title}</div>
				</div>
				<div className="text-sm lg:text-[0.9rem] text-gray-light leading-relaxed font-extralight">
					<p className="mb-4">{paragraph1}</p>
					<p>{paragraph2}</p>
				</div>
			</div>
			<div className="bg-primary-dark w-full lg:w-[70%] mx-auto xl:w-full border-violet-dark rounded-t-none p-7 rounded-xl">
				<div className="flex flex-col gap-2">
					<span className="text-white">Email</span>
					<span className="text-gray-light hover:cursor-pointer hover:text-white text-sm">{email}</span>
				</div>
				<div className="flex justify-between items-center mt-4">
					<Link target={"_blank"} href={resume}>
						<Button color={true} name="Download CV" />
					</Link>
					<div>
						<SocialIcons links={{ github: github, twitter: twitter, linkedin: linkedin, liveSite: "", tipe: "socials" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
