import { ArrowUp } from "lucide-react";

export function ImagedAccordion({
	imagePath = "#",
	heading = "#",
	description = "...",
}) {
	return (
		<span
			className={`group relative flex flex-col-reverse h-[40svh] **:duration-500 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-xl border border-destructive`}
		>
			<img
				src={imagePath}
				className="h-full grow selection:bg-transparent object-cover"
				loading="lazy"
			/>
			<div
				className="absolute w-full bg-background/90 min-h-0 group-hover:min-h-full delay-500 group-hover:delay-0"
				id="image_accordion"
			>
				<h2 className="p-4 font-bold text-xl text-shadow-2xs text-shadow-foreground flex justify-center">
					<span className="text-center grow">{heading}</span>
					<button
						className="group-hover:rotate-180 "
						id="arrow"
						onClick={() => {
							const image_accordion = document.querySelector(
								"#image_accordion"
							) as HTMLElement;
							const arrow = document.querySelector("#arrow") as HTMLElement;
							const description = document.querySelector(
								"#description"
							) as HTMLElement;

							if (arrow.style.rotate === "180deg") {
								image_accordion.style.minHeight = "";
								arrow.style.rotate = "0deg";
								description.style.opacity = "0";
							} else {
								image_accordion.style.minHeight = "100%";
								arrow.style.rotate = "180deg";
								description.style.opacity = "100";
							}
						}}
					>
						<ArrowUp />
					</button>
				</h2>
				<p
					className="absolute font-light opacity-0 delay-0 group-hover:delay-500 group-hover:opacity-100 text-center px-4 text-shadow-2xs text-shadow-background"
					id="description"
				>
					{description}
				</p>
			</div>
		</span>
	);
}
