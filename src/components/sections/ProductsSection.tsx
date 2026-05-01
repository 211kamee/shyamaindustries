import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/data/siteContent";

export function ProductsSection() {
	return (
		<section
			className="flex flex-col justify-center items-center w-full gap-4 bg-accent"
			id="products"
		>
			<h2 className="text-4xl font-medium w-full border-t border-destructive text-center py-6 font-dsc">
				Products
			</h2>
			<div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl m-4">
				{PRODUCTS.map((item, index) => (
					<ProductCard
						imagePath={item.imagePath}
						description={item.description}
						heading={item.heading}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
