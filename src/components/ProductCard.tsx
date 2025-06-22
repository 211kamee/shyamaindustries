import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({
	imagePath = "#",
	heading = "...",
	description = "...",
}) {
	return (
		<Card
			className={`relative hover:shadow-2xl duration-500 transition-all flex flex-col md:flex-row-reverse items-center bg-accent md:aspect-[3/2] md:w-[550px] w-full p-6 not-md:mx-4 not-md:my-2`}
		>
			<img
				src={imagePath}
				className={`h-[85%] max-h-80 max-w-1/2 object-contain drop-shadow-foreground/40 drop-shadow-2xl`}
				loading="lazy"
			/>
			<CardContent
				className={`p-[1rem] flex flex-col justify-evenly h-full md:w-[60%]`}
			>
				<span
					className={`px-[0.8rem] py-[0.4rem] max-w-max rounded-[100px] bg-destructive text-white text-[0.5rem] md:text-[0.8rem] my-1 font-medium`}
				>
					EXCLUSIVE
				</span>

				<h1 className={`font-medium leading-[90%] text-2xl md:text-3xl my-1`}>
					{heading}
				</h1>

				<p
					className={`leading-[120%] text-accent-foreground font-light italic text-[1rem] my-4`}
				>
					{description}
				</p>

				<Button
					variant={"outline"}
					className={`w-fit h-fit text-[0.8rem] not-md:w-full my-2 font-bold rounded-[50px]`}
					asChild
				>
					<a href="/#contact">GET IT NOW !</a>
				</Button>
			</CardContent>
		</Card>
	);
}
