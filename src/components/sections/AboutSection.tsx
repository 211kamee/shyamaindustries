export function AboutSection() {
	return (
		<section
			id="about"
			className="flex flex-col justify-center items-center w-full gap-4 bg-background"
		>
			<h2 className="text-4xl font-medium w-full border-t border-destructive text-center py-6 font-dsc">
				About us
			</h2>
			<div className="max-w-6xl grid lg:grid-cols-2  items-center gap-16 p-4 border-t">
				<div className="order-1 bg-accent">
					<img
						src="About.png"
						alt="About Us"
						className="rounded-2xl border-2 border-destructive w-full h-96 object-contain"
					/>
				</div>

				<div className="space-y-8 order-2">
					<div className="space-y-4">
						<div className="font-semibold text-lg">Shyama Industries</div>
						<h2 className="text-4xl font-bold text-destructive">
							15+ Years of Safety Excellence
						</h2>
						<p className="text-lg leading-relaxed text-muted-foreground">
							We are committed to providing world-class safety tools and
							equipment for construction sites. With years of experience and
							expert knowledge, we ensure that your site remains safe,
							efficient, and compliant with modern safety standards.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="space-y-2">
							<h3 className="text-xl font-semibold">Quality Assured</h3>
							<p className="text-muted-foreground">
								All products meet international safety standards
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold">Expert Support</h3>
							<p className="text-muted-foreground">
								Guaranteed assistance and consultation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
