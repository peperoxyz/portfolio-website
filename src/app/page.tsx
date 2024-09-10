import { Header } from "@/app/ui/components/header";
import { Hero } from "@/app/ui/components/hero";
import { Divider } from "@/app/ui/components/divider";
import { AboutMe } from "@/app/ui/components/about-me";
import { ProjectWrapper } from "./ui/components/projects-wrapper";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Divider id="about-me-section" sectionDetails={{ title: "More", name: "About Me", button: "Contact me" }} />
			<AboutMe />
			<Divider id="projects-section" sectionDetails={{ title: "Featured", name: "Projects", button: "See all projects" }} />
			<ProjectWrapper />
		</div>
	);
}
