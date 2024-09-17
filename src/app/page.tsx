import { Header } from "@/app/ui/components/header";
import { Hero } from "@/app/ui/components/hero";
import { Divider } from "@/app/ui/components/divider";
import { AboutMe } from "@/app/ui/components/about-me";
import { ProjectWrapper } from "./ui/components/projects-wrapper";
import { Footer } from "./ui/components/footer";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Divider sectionDetails={{ title: "More", name: "About Me", href: "/about", button: "About Me" }} />
			<AboutMe />
			<Divider sectionDetails={{ title: "Featured", name: "Selected Projects", href: "/projects", button: "See all projects" }} />
			<ProjectWrapper />
			<Footer />
		</div>
	);
}
