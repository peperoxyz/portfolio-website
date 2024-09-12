import { Footer } from "@/app/ui/components/footer";
import { Header } from "@/app/ui/components/header";
import { ProjectWrapper } from "@/app/ui/components/projects-wrapper";

export default function Home() {
	return (
		<div>
			<Header></Header>
			<ProjectWrapper />
			<Footer />
		</div>
	);
}
