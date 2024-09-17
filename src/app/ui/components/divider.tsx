import Link from "next/link";
import { Button } from "./button";

interface DividerParams {
	sectionDetails: {
		title: string;
		name: string;
		href: string;
		button: string;
	};
}

export const Divider = (params: DividerParams) => {
	const { title, name, href, button } = params.sectionDetails;

	return (
		<div className="flex justify-center px-3 sm:px-0">
			<div className="container max-w-lg sm:max-w-[30rem] md:max-w-3xl lg:max-w-[62rem] xl:max-w-[77rem] flex justify-between border mt-16 text-white uppercase pb-6 border-slate-300/30 border-t-0 border-l-0 border-r-0">
				<div>
					<span className="text-gray-light text-xs md:text-sm">{title}</span>
					<h3 className="text-lg md:text-3xl">{name}</h3>
				</div>
				<div>
					<Link href={href}>
						<Button color={true} name={button} />
					</Link>
				</div>
			</div>
		</div>
	);
};
