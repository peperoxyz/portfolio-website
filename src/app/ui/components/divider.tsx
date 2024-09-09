import { Button } from "./button";

export const Divider = (params: any) => {
	const { title, name } = params.sectionDetails;
	console.log(params);

	return (
		<div className="flex justify-center">
			<div className="container max-w-lg sm:max-w-[30rem] md:max-w-3xl lg:max-w-[62rem] xl:max-w-[77rem] flex justify-between border mt-16 text-white uppercase pb-6 border-slate-300/30 border-t-0 border-l-0 border-r-0">
				<div>
					<span className="text-gray-light text-xs md:text-sm">{title}</span>
					<h3 className="text-lg md:text-2xl">{name}</h3>
				</div>
				<div>
					<Button color={true} name={"Contact me"} arrowRightIcon={true} />
				</div>
			</div>
		</div>
		// <div className="flex justify-center">
		// 	<div className="container py-4 mt-20 relative text-white border">
		// 		<div className="flex justify-between">
		// 			<div>1</div>
		// 			<div>2</div>
		// 		</div>
		// 	</div>
		// 	{/* <div className="container mx-auto w-[92%] border">haha</div> */}
		// </div>
	);
};
