import { Header } from "@/app/ui/components/header";
import { AboutMe } from "@/app/ui/components/about-me";
import { Footer } from "@/app/ui/components/footer";

export default function Home() {
	return (
		<div>
			<Header></Header>
			<AboutMe />
			<Footer />
		</div>
	);
}
