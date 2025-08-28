import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProductCard({
	imagePath = "#",
	heading = "...",
	description = "...",
}) {
	return (
		<Card
			className={`relative hover:shadow-2xl duration-500 transition-all flex flex-col md:flex-row-reverse items-center bg-accent border border-destructive md:aspect-[3/2] md:w-[550px] w-full p-6 `}
		>
			<img
				src={imagePath}
				className={`h-[85%] max-h-80 max-w-1/2 object-contain drop-shadow-foreground/40 drop-shadow-xl`}
				loading="lazy"
			/>
			<CardContent
				className={`p-[1rem] flex flex-col justify-evenly h-full md:w-[60%]`}
			>
				<h1 className={`font-medium leading-[90%] text-2xl md:text-3xl my-1`}>
					{heading}
				</h1>

				<p
					className={`leading-[120%] text-accent-foreground font-light italic text-[1rem] my-4`}
				>
					{description}
				</p>

				<Button
					variant={"destructive"}
					className={`w-fit h-fit text-[0.8rem] not-md:w-full my-2 font-bold rounded-[50px]`}
					asChild
				>
					<a href="/#contact">GET IT NOW !</a>
				</Button>
			</CardContent>
		</Card>
	);
}
