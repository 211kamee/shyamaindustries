import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section
			className="flex flex-col justify-center items-center relative gap-4 p-16 xl:flex-row-reverse min-h-[30rem]"
			id="hero"
		>
			<div className="bg-[url('/hero.jpg')] bg-center bg-cover bg-no-repeat w-full xl:w-[40rem] h-[30rem] not-xl:h-full absolute z-[-10] not-xl:opacity-50 xl:static" />

			<span className="flex flex-col justify-between gap-6 font-medium xl:w-[30rem] xl:h-[28rem] px-4 text-shadow-lg text-shadow-background">
				<h2 className="xl:text-7xl text-5xl font-medium">
					Saving thousands of{" "}
					<span className="underline decoration-destructive xl:decoration-[8px] decoration-[6px]">
						lives
					</span>{" "}
					daily
				</h2>
				<p className="">
					Shyama Industries is a leading Fall Protection solutions brand.
				</p>
				<Button className="max-w-max">
					<a href="#about">Learn more</a>
				</Button>
				<Button variant={"outline"} asChild>
					<a href="#products">
						Products <ArrowRight />
					</a>
				</Button>
			</span>
		</section>
	);
}
