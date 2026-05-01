import { ImagedAccordion } from "@/components/ImagedAccordion";
import { INDUSTRIES } from "@/data/siteContent";

export function IndustriesSection() {
	return (
		<section
			className="flex flex-col justify-center items-center w-full gap-4 bg-accent"
			id="targeting"
		>
			<h2 className="text-4xl font-medium w-full border-t border-destructive text-center py-6 font-dsc">
				Industries Served
			</h2>
			<div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl m-4">
				{INDUSTRIES.map((item, index) => (
					<ImagedAccordion
						imagePath={item.imagePath}
						description={item.description}
						heading={item.heading}
						id={item.id}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
