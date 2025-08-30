"use client";
import { ArrowUp } from "lucide-react";

export function ImagedAccordion({
	imagePath = "#",
	heading = "#",
	description = "...",
	id = "image_accordian",
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
				className="absolute w-full bg-background min-h-0 group-hover:min-h-full delay-500 group-hover:delay-0"
				id={id}
			>
				<h2 className="px-4 py-2 font-bold flex justify-center">
					<span className="text-center grow">{heading}</span>
					<button
						className="group-hover:rotate-180 "
						id="arrow"
						onClick={() => {
							const image_accordion = document.querySelector(
								`#${id}`
							) as HTMLElement;

							const arrow = image_accordion.childNodes[0]
								.childNodes[1] as HTMLElement;

							const description = image_accordion.childNodes[1] as HTMLElement;

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
					className="absolute font-dsc font-normal text-[90%] opacity-0 delay-0 group-hover:delay-500 group-hover:opacity-100 text-center p-2 text-shadow-2xs text-shadow-background flex justify-center border-t border-destructive overflow-y-auto max-h-8/10"
					id="description"
				>
					{description}
				</p>
			</div>
		</span>
	);
}
