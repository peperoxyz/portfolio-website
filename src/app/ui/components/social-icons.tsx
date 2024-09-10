import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import githubIcon from "/src/public/images/github.png";
import twitterIcon from "/src/public/images/twitter.png";
import linkedinIcon from "/src/public/images/linkedin.png";
import liveSiteIcon from "/src/public/images/live-site.png";

interface SocialIconLinkProps {
	href: string;
	iconSrc: StaticImageData;
	altText: string;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, iconSrc, altText }) => (
	<Link target={"_blank"} className="hover:scale-105 transition-all duration-100" href={href}>
		<div className="h-10 w-10 flex justify-center items-center bg-violet-dark rounded-full border border-slate-800/50">
			<Image alt={altText} className="w-5" src={iconSrc} />
		</div>
	</Link>
);

export const SocialIcons = ({ links }: { links: { github: string; twitter: string; linkedin: string; liveSite: string; tipe: string } }) => {
	if (links.tipe === "socials") {
		return (
			<div className="bg-primary-darkest border border-violet-dark rounded-full px-2 py-2 text-sm flex gap-2">
				<SocialIconLink href={links.github} iconSrc={githubIcon} altText="Github-icon" />
				<SocialIconLink href={links.twitter} iconSrc={twitterIcon} altText="Twitter-icon" />
				<SocialIconLink href={links.linkedin} iconSrc={linkedinIcon} altText="Linkedin-icon" />
			</div>
		);
	} else {
		return (
			<div className="bg-primary-darkest border border-violet-dark rounded-full px-2 py-2 text-sm flex gap-2">
				<SocialIconLink href={links.github} iconSrc={githubIcon} altText="Github-icon" />
				<SocialIconLink href={links.liveSite} iconSrc={liveSiteIcon} altText="LiveSite-icon" />
			</div>
		);
	}
};
