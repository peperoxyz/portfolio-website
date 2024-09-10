import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SocialIcons } from "./social-icons";

interface ProjectCardProps {
	title: string;
	category: string;
	description: string;
	imageSrc: StaticImageData;
	techStack: {
		name: string;
		iconSrc: StaticImageData;
	}[];
	liveSiteUrl: string;
	githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, description, imageSrc, techStack, liveSiteUrl, githubUrl }) => {
	return (
		<div className="bg-primary-dark border hover:bg-primary-darkest border-violet-dark p-6 w-fit rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
			<div className="flex justify-between items-center">
				<div>
					<h3 className="text-white">{title}</h3>
					<p className="text-gray-400 text-sm">{category}</p>
				</div>
				<SocialIcons links={{ github: githubUrl, twitter: "", linkedin: "", liveSite: liveSiteUrl, tipe: "projects" }} />
			</div>
			<div className="my-4">
				<Image src={imageSrc} alt={title} className="rounded-lg object-cover object-top h-52" />
			</div>
			<div className="flex gap-2">
				{techStack.map((tech) => (
					<div key={tech.name} className="flex text-sm font-normal bg-violet-dark items-center gap-2 px-2 py-1.5 rounded-md border border-slate-700/30">
						<Image src={tech.iconSrc} alt={tech.name} width={17} height={17} />
						<span className="text-white">{tech.name}</span>
					</div>
				))}
			</div>
			<p className="text-gray-300 mt-4">{description}</p>
		</div>
	);
};

export default ProjectCard;
