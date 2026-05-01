import { NAV_LINKS } from "@/data/navLinks";

export function Footer() {
	return (
		<footer className="w-full bg-accent text-center text-muted-foreground">
			<section className="flex w-full flex-col-reverse xl:flex-row-reverse justify-around border-t border-destructive xl:px-[22vw]">
				<div className="xl:w-4/10 w-full flex flex-col justify-around">
					<span className="p-2">
						Shyama Industries, saving lives by manufacturing and supplying
						high quality safety equipment and solutions.
					</span>
				</div>
				<hr />
				<div className="xl:w-1/4 flex flex-col items-center p-2">
					<h2 className="text-lg font-medium w-full underline underline-offset-4 decoration-destructive font-dsc">
						Quick Links
					</h2>
					{NAV_LINKS.map((link) => (
						<a key={link.href} href={link.href}>
							{link.href === "#hero" ? "Go to top" : link.label}
						</a>
					))}
				</div>
			</section>
			<hr />
			<span className="p-2">
				&copy; Shyama Industries, {new Date().getFullYear()} All rights
				reserved
			</span>
			<section className="p-2">
				Made with care by
				<a href="https://github.com/211kamee/" target="_blank">
					<strong> Arpit Kumar</strong>
				</a>
			</section>
		</footer>
	);
}
