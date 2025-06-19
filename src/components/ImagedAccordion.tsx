export function ImagedAccordion({
	imagePath = "#",
	heading = "#",
	description = "...",
}) {
	return (
		<div
			className={`group relative flex flex-col-reverse h-[40svh] **:duration-500 overflow-hidden hover:scale-110 transition-all duration-500`}
		>
			<img src={imagePath} className="h-full grow selection:bg-transparent object-cover" />
			<div className="absolute w-full bg-background/90 min-h-0 group-hover:min-h-full delay-500 group-hover:delay-0">
				<h2 className="p-4 font-bold text-xl text-shadow-2xs text-shadow-foreground">
					{heading}
				</h2>
				<p className="absolute font-light opacity-0 delay-0 group-hover:delay-500 group-hover:opacity-100 text-center px-4 text-shadow-2xs text-shadow-background">
					{description}
				</p>
			</div>
		</div>
	);
}
