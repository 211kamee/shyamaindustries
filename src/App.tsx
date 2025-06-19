import { AlignJustify, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { NavList, NavItems } from "@/components/NavHelper";
import { Button } from "./components/ui/button";
import { ProductCard } from "./components/ProductCard";
import ImagedAccordion from "./components/ImagedAccordion";

export default function App() {
	const products = [
		{
			imagePath: `braided.png`,
			heading: `Braided Rope`,
			description: `Some lorem description Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis ipsum eligendi minus nam veniam dicta ea voluptate! Omnis, fuga error modi animi, veniam atque mollitia, reprehenderit praesentium explicabo perspiciatis cumque recusandae!.`,
		},
	];
	const navs = [
		{
			name: "Home",
			path: "#",
		},
		{
			name: "About us",
			path: "#",
		},
		{
			name: "Products",
			path: "#",
		},
		{
			name: "Industries Served",
			path: "#",
		},
		{
			name: "Contact us",
			path: "#",
		},
	];

	return (
		<div className="w-full min-h-[100svh] flex flex-col justify-between items-center selection:bg-foreground selection:text-background">
			<header className="w-full h-16 p-4 sticky flex justify-between items-center break-all font-bold top-0 md:px-[12vw] md:py-2 z-10 bg-background shadow-2xl shadow-background">
				<img src="/logo.png" alt="Logo" className="h-20" />
				<NavList className="hidden max-w-max md:flex">
					{navs.map((item, index) => (
						<NavItems key={index}>
							<a href={item.path}>{item.name}</a>
						</NavItems>
					))}
				</NavList>
				<span className="cursor-pointer md:hidden" onClick={hamburgerHandler}>
					<AlignJustify></AlignJustify>
					<NavList
						className="hidden flex-col absolute w-full h-[calc(100svh-4rem)] top-[100%] right-0 bg-background"
						id="hamburger"
					>
						<NavItems>
							<a href="#">Home</a>
						</NavItems>
						<NavItems>
							<a href="#">About us</a>
						</NavItems>
						<NavItems>
							<a href="#">Products</a>
						</NavItems>
						<NavItems>
							<a href="#">Industries Served</a>
						</NavItems>
						<NavItems>
							<a href="#">Contact us</a>
						</NavItems>
					</NavList>
				</span>
			</header>
			<main className="grow-1 w-full relative">
				{/* Hero */}
				<section className="flex flex-col justify-center items-center gap-4 p-16 md:flex-row-reverse">
					<div className="bg-[url('/hero.jpg')] bg-center bg-cover w-full md:w-[40rem] h-[30rem] absolute top-1 z-[-10] not-md:opacity-50 md:static" />

					<span className="flex flex-col justify-between gap-6 font-medium md:w-[30rem] md:h-[28rem] px-4 text-shadow-lg text-shadow-background">
						<h2 className="md:text-7xl text-5xl font-medium">
							Saving thousands of{" "}
							<span className="underline decoration-amber-600">lives</span>{" "}
							daily
						</h2>
						<p className="">
							Shyama Industries is a leading Fall Protection solutions brand.
						</p>
						<Button className="max-w-max">Learn more</Button>
						<Button variant={"outline"}>
							Products <ArrowRight />
						</Button>
					</span>
				</section>
				{/* Products */}
				<section
					className={`flex justify-center items-center w-full md:p-8 shadow flex-wrap gap-4`}
				>
					{products.map((item, index) => (
						<ProductCard
							imagePath={item.imagePath}
							description={item.description}
							heading={item.heading}
							key={index}
						/>
					))}
				</section>
				{/* Industries Served */}
				<section
					className={`flex justify-center items-center w-full md:p-8 shadow flex-wrap gap-4`}
				>
					<ImagedAccordion />
				</section>
				{/* Contact Us */}
				<section className="flex justify-center items-center w-full">
					<div className="w-full p-12 bg-border flex gap-6 justify-center">
						<img
							src="hello.svg"
							className="max-h-96 w-1/2 object-contain object-right"
						/>
						<div className="flex flex-col w-1/2 justify-center p-4 gap-8">
							<span>We look forward to hearing from you!</span>
							<h2 className="text-2xl font-bold">Contact us</h2>
							<p className="max-w-96">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
								reprehenderit nam architecto ipsa molestiae? Suscipit.
							</p>
							<a href="#">
								<MapPin className="inline mx-2" /> Address
							</a>
							<a href="mailto:">
								<Mail className="inline mx-2" /> mail@email.com
							</a>
							<a href="tel:+" className="relative w-max">
								<img
									src="callUs.svg"
									alt=""
									className="absolute left-1/2 top-full"
								/>
								<Phone className="inline mx-2" /> +91 XXXXXXXXXXX
							</a>
						</div>
					</div>
				</section>

				{/* Maybe Testimonials Section */}
			</main>
			<footer className="bg-border w-full md:px-[12vw] text-center border-t border-foreground">
				<section>
					{/* Logo */}
					Shyama Industries believes in saving lives by manufacturing and
					supplying high-quality safety equipment and solutions.
				</section>
				<section>{/* Quick Link */}</section>
				<section>{/* Our Products */}</section>
				<section>{/* Contacts */}</section>
			</footer>
		</div>
	);
}

const hamburgerHandler = () => {
	const hamburger = document.querySelector("#hamburger") as HTMLElement;
	if (hamburger.style.display === "") {
		hamburger.style.display = "flex";
	} else {
		hamburger.style.display = "";
	}
};
