import { clsx } from "clsx";

interface ButtonParams {
	name: string;
	color: boolean;
}

export const Button = (params: ButtonParams) => {
	const { name, color } = params;

	return (
		<button
			className={clsx(
				color ? "bg-violet-dark border border-slate-700/20 shadow-inner hover:bg-primary-dark hover:border hover:border-violet-dark" : "bg-primary-dark border border-violet-dark hover:bg-violet-dark",
				"px-8 py-[0.8rem] text-sm md:text-base rounded-lg hover:text-white transition-all duration-300 ease-in-out text-gray-light"
			)}
		>
			{name}
		</button>
	);
};
