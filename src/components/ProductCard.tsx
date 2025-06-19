import { Button } from "./ui/button";

export function ProductCard({
	imagePath = "#",
	heading = "...",
	description = "...",
}) {
	return (
		<div
			className={`relative hover:shadow-2xl duration-500 transition-all md:aspect-video flex flex-col md:flex-row-reverse items-center bg-background md:w-[550px] w-full p-6`}
		>
			<img
				src={imagePath}
				className={`h-[85%] max-h-80 max-w-1/2 object-contain`}
			/>
			<div
				className={`p-[1rem] flex flex-col justify-evenly h-full md:w-[60%]`}
			>
				<span
					className={`px-[0.8rem] py-[0.4rem] max-w-max rounded-[100px] bg-destructive text-background text-[0.5rem] md:text-[0.8rem] my-1`}
				>
					EXCLUSIVE
				</span>

				<h1 className={`font-medium leading-[90%] text-2xl md:text-3xl my-1`}>{heading}</h1>

				<p
					className={`leading-[120%] text-accent-foreground font-light italic text-[1rem] box-decoration-clone line-clamp-3 my-4`}
				>
					{description}
				</p>

				<Button
					variant={"outline"}
					className={`w-fit h-fit rounded-[100px] text-[0.8rem] my-2`}
				>
					<a className={`font-bold rounded-[50px]`} href="#">
						GET IT NOW !
					</a>
				</Button>
			</div>
		</div>
	);
}
