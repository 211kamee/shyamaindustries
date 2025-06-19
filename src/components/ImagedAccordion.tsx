export default function ImagedAccordion({ img = "/rope_vert.jpg" }) {
	return (
		<div
			className={`group relative flex flex-col-reverse h-[40svh] **:duration-500 border overflow-hidden hover:scale-110 transition-all duration-500`}
		>
			<img src={img} className="h-full grow selection:bg-transparent" />
			<div className="absolute w-full bg-background/90 min-h-0 group-hover:min-h-full delay-500 group-hover:delay-0">
				<h2 className="p-4 font-bold text-xl text-shadow-2xs text-shadow-foreground">
					Mountain Climbling
				</h2>
				<p className="absolute font-light opacity-0 delay-0 group-hover:delay-500 group-hover:opacity-100 break-all px-4 text-shadow-2xs text-shadow-background">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum
					eligendi mollitia assumenda ratione, minus quia explicabo recusandae
					hic voluptas, laboriosam voluptatem harum sunt culpa tempore
					accusantium repellendus. Dicta, exercitationem?
				</p>
			</div>
		</div>
	);
}
