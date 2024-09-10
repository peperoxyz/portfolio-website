import angularIcon from "/src/public/images/angular-icon.png";
import tailwindIcon from "/src/public/images/tailwind-icon.png";
import nextJsIcon from "/src/public/images/nextjs-icon.png";
import jsIcon from "/src/public/images/js-icon.png";
import htmlIcon from "/src/public/images/html-icon.png";
import cssIcon from "/src/public/images/css-icon.png";
import figmaIcon from "/src/public/images/figma-icon.png";
import ProjectCard from "@/app/ui/components/project-card";
import worksoImage from "/src/public/thumbnails/works-so-thumbnail.png";
import belajaranImage from "/src/public/thumbnails/belajaran-thumbnail.png";
import daileeImage from "/src/public/thumbnails/dailee-app-thumbnail.png";
import movieBuddyImage from "/src/public/thumbnails/movie-buddy-thumbnail.png";
import pizzaHuntImage from "/src/public/thumbnails/pizza-hunt-thumbnail.png";
import stroomImage from "/src/public/thumbnails/stroom-thumbnail.png";
import clippyQuoteImage from "/src/public/thumbnails/clippy-quote-thumbnail.png";
import glassyBiolinksImage from "/src/public/thumbnails/glassy-biolinks-thumbnail.png";

// Define the project data as an array of objects
const projects = [
	{
		title: "Clippy Quote",
		category: "Frontend Web App",
		description: "Clippy-Quote: Next.js app to keep track of good wise words you heard or read from anywhere. *Deisnged by me",
		imageSrc: clippyQuoteImage,
		techStack: [
			{ name: "Next.js", iconSrc: nextJsIcon },
			{ name: "Tailwind CSS", iconSrc: tailwindIcon },
		],
		liveSiteUrl: "https://clippy-quote.vercel.app/",
		githubUrl: "https://github.com/peperoxyz/clippy-quote",
	},
	{
		title: "Glassy BioLinks",
		category: "Frontend Web App",
		description: "A visually appealing, glassmorphism-inspired bio link page with customizable background. *Deisnged by me",
		imageSrc: glassyBiolinksImage,
		techStack: [
			{ name: "HTML", iconSrc: htmlIcon },
			{ name: "CSS", iconSrc: cssIcon },
			{ name: "JavaScript", iconSrc: jsIcon },
		],
		liveSiteUrl: "https://glassy-biolinks.netlify.app/",
		githubUrl: "https://github.com/peperoxyz/glassy-biolinks",
	},
	{
		title: "Work.so",
		category: "Website Remake",
		description: "Remaking existing website work.so to practice my skill on designing beautiful website with Tailwind CSS ",
		imageSrc: worksoImage,
		techStack: [
			{ name: "Angular", iconSrc: angularIcon },
			{ name: "Tailwind CSS", iconSrc: tailwindIcon },
		],
		liveSiteUrl: "https://works-so-lp.netlify.app/",
		githubUrl: "https://github.com/peperoxyz/T1-work-so-landing-page",
	},
	{
		title: "Movie Buddy - Landing Page",
		category: "UI/UX Design & Slicing",
		description: "Landing page for an app to find movie buddies in order to practice my HTML and CSS skill. *Deisnged by me.",
		imageSrc: movieBuddyImage,
		techStack: [{ name: "Tailwind CSS", iconSrc: tailwindIcon }],
		liveSiteUrl: "https://movie-buddy-omega.vercel.app/",
		githubUrl: "https://github.com/peperoxyz/dicoding-dasar-web-final",
	},
	{
		title: "Belajaran Landing Page",
		category: "Slicing UI",
		description: "Slicing landing page for learning design and coding platform. *Designed by Muhammad Zaini on Dribbble.",
		imageSrc: belajaranImage,
		techStack: [{ name: "Tailwind CSS", iconSrc: tailwindIcon }],
		liveSiteUrl: "https://belajaran.netlify.app/",
		githubUrl: "https://github.com/peperoxyz/slicing-belajaran",
	},
	{
		title: "Stroom Landing Page",
		category: "UI/UX Design",
		description: "UI Design of a landing page for a platform to book and renting a workplace to work in. *Designed by me",
		imageSrc: stroomImage,
		techStack: [{ name: "Figma", iconSrc: figmaIcon }],
		liveSiteUrl: "https://dribbble.com/shots/24832574-Stroom-Alternative-Study-Room-Landing-Page",
		githubUrl: "https://dribbble.com/shots/24832574-Stroom-Alternative-Study-Room-Landing-Page",
	},
	{
		title: "Dailee App - Social Media",
		category: "Frontend - Consume API",
		description: "Simple app like social media to input status or posts. Created as an implementation of learning the Angular framework for data manipulation (consuming APIs and CRUD operations). *Designed by me",
		imageSrc: daileeImage,
		techStack: [
			{ name: "Angular", iconSrc: angularIcon },
			{ name: "Tailwind CSS", iconSrc: tailwindIcon },
		],
		liveSiteUrl: "https://dailee.vercel.app/",
		githubUrl: "https://github.com/peperoxyz/dailee-social-media",
	},
	{
		title: "Pizza Hunt",
		category: "Frontend - Basic Fundamental",
		description: "Simple app to see pizza menus and order it. Created as an implementation of learning the Angular framework's fundamental concepts like routing, props binding, components. *Designed by me",
		imageSrc: pizzaHuntImage,
		techStack: [
			{ name: "Angular", iconSrc: angularIcon },
			{ name: "Tailwind CSS", iconSrc: tailwindIcon },
		],
		liveSiteUrl: "https://pizza-hunt.vercel.app/",
		githubUrl: "https://github.com/peperoxyz/pizza-hunt",
	},
];

export const ProjectWrapper = () => {
	return (
		<div id="projects" className="container py-8 xl:py-20 mx-auto max-w-lg sm:max-w-[30rem] md:max-w-3xl lg:max-w-[62rem] xl:max-w-[77rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						category={project.category}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						techStack={project.techStack}
						liveSiteUrl={project.liveSiteUrl}
						githubUrl={project.githubUrl}
					/>
				))}
			</div>
		</div>
	);
};
