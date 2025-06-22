import { AlignJustify, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { NavList, NavItems } from "@/components/NavHelper";
import { Button } from "./components/ui/button";
import { ProductCard } from "./components/ProductCard";
import { ImagedAccordion } from "./components/ImagedAccordion";

export default function App() {
	const targeting = [
		{
			imagePath: "Mountain_Climbing_LQ.jpg",
			heading: "Mountain Climbing",
			description:
				"Some lorem description Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis ipsum eligendi minus nam veniam dicta ea voluptate! Omnis, fuga error modi animi, veniam atque mollitia, reprehenderit praesentium explicabo perspiciatis cumque recusandae!.",
		},
		// { imagePath: "", heading: "", description: "" },
	];

	const products = [
		{
			imagePath: `Braided_Rope_LQ.png`,
			heading: `Braided Rope`,
			description: `Our Braided Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.`,
		},
		{
			imagePath: "Twisted_Rope_LQ.png",
			heading: "Twisted Rope",
			description:
				"Our Twisted Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.",
		},
		{
			imagePath: "Full_Body_Harness_LQ.png",
			heading: "Full Body Harness",
			description:
				"Our Full Body Harness is designed for Comfort, and it is perfect to be used for all safety purposes, maintaining comfort on long sessions.",
		},
		{
			imagePath: "Fall_Arrestor_LQ.png",
			heading: "Fall Arrestor",
			description:
				"Our safety Fall Arrestor automatically engage to halt falls smoothly and reliably, giving you unwavering protection whenever you need it.",
		},
		{
			imagePath: "Grip_Descender_LQ.png",
			heading: "Grip Descender",
			description:
				"Our intuitive Grip Descender delivers smooth, controlled lowering with consistent, fail-safe braking, so you can descend confidently, every time.",
		},
		{
			imagePath: "Rock_Chair_Seat_LQ.png",
			heading: "Rock Chair Seat",
			description:
				"Our safety Rock Chair Seat deliver ergonomic support and steadfast stability, keeping you secure and comfortable during every height operation.",
		},
		{
			imagePath: "Rope_Protector_LQ.png",
			heading: "Rope Protector",
			description:
				"Our Rope Protector shield your line from abrasion and wear, extending rope life and ensuring dependable performance every time.",
		},
		{
			imagePath: "Carabiner_LQ.png",
			heading: "Carabiner",
			description:
				"Our Carabiners features a dependable and strong auto-locking gate for consistent, everyday safety.",
		},
		{
			imagePath: "Bag_LQ.png",
			heading: "Bag",
			description:
				"Our Bag is Strong, Durable and Dependable, can easily hold all the essential safety tools.",
		},
		// { imagePath: "", heading: "", description: "" },
	];

	const contact = {
		email: "email@email.com",
		phone: "+91 0000000000",
		address: "Delhi NCR, India",
		map: "",
	};

	// {
	// 	const navs = [
	// 		{
	// 			name: "Home",
	// 			path: "#",
	// 		},
	// 		{
	// 			name: "About us",
	// 			path: "#",
	// 		},
	// 		{
	// 			name: "Products",
	// 			path: "#",
	// 		},
	// 		{
	// 			name: "Industries Served",
	// 			path: "#",
	// 		},
	// 		{
	// 			name: "Contact us",
	// 			path: "#",
	// 		},
	// 	];
	// 	navs.map((item, index) => (
	// 		<NavItems key={index}>
	// 			<a href={item.path}>{item.name}</a>
	// 		</NavItems>
	// 	));
	// }

	return (
		<div className="w-full min-h-[100svh] flex flex-col justify-between items-center selection:bg-foreground selection:text-background">
			<header className="w-full px-4 h-14 md:h-18 sticky flex justify-between items-center break-all font-bold top-0 md:px-[12vw] z-10 bg-background shadow-2xl shadow-background">
				<a href="/" className="h-full">
					<img src="/logo_LQ.png" alt="Logo" className="h-full scale-120 p-2" />
				</a>
				<NavList className="hidden max-w-max md:flex">
					<NavItems href="#hero">Home</NavItems>
					<NavItems href="#about">About us</NavItems>
					<NavItems href="#products">Products</NavItems>
					<NavItems href="#targeting">Industries Served</NavItems>
					<NavItems href="#contact">Contact us</NavItems>
				</NavList>
				<span className="cursor-pointer md:hidden" onClick={hamburgerHandler}>
					<AlignJustify className="h-full"></AlignJustify>
					<NavList
						className="hidden flex-col absolute w-full h-[calc(100svh-3.4rem)] top-[100%] right-0 bg-background"
						id="hamburger"
					>
						<NavItems href="#hero">Home</NavItems>
						<NavItems href="#about">About us</NavItems>
						<NavItems href="#products">Products</NavItems>
						<NavItems href="#targeting">Industries Served</NavItems>
						<NavItems href="#contact">Contact us</NavItems>
					</NavList>
				</span>
			</header>
			<main className="grow-1 w-full relative">
				{/* Hero */}
				<section
					className="flex flex-col justify-center items-center relative gap-4 not-md:my-8 p-16 md:flex-row-reverse min-h-[30rem]"
					id="hero"
				>
					<div className="bg-[url('/hero_LQ.jpg')] bg-center bg-cover bg-no-repeat w-full md:w-[40rem] h-[30rem] absolute z-[-10] not-md:opacity-50 md:static" />

					<span className="flex flex-col justify-between gap-6 font-medium md:w-[30rem] md:h-[28rem] px-4 text-shadow-lg text-shadow-background">
						<h2 className="md:text-7xl text-5xl font-medium">
							Saving thousands of{" "}
							<span className="underline decoration-destructive decoration-[8px]">lives</span>{" "}
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
				{/* Products */}
				<section
					className={`flex flex-col justify-center items-center w-full md:p-8 gap-4`}
					id="products"
				>
					<h2 className="text-4xl font-medium underline w-full decoration-destructive md:text-center p-8">
						PRODUCTS
					</h2>
					<div className="flex justify-center items-center flex-wrap md:gap-4 max-w-6xl">
						{products.map((item, index) => (
							<ProductCard
								imagePath={item.imagePath}
								description={item.description}
								heading={item.heading}
								key={index}
							/>
						))}
					</div>
				</section>
				{/* Industries Served */}
				<section
					className={`flex flex-col justify-center items-center w-full md:p-8 gap-4`}
					id="targeting"
				>
					<h2 className="text-4xl font-medium underline w-full decoration-destructive md:text-center p-8">
						INDUSTRIES SERVED
					</h2>
					<div className="flex justify-center items-center flex-wrap md:gap-4 max-w-6xl">
						<ImagedAccordion
							imagePath={targeting[0].imagePath}
							description={targeting[0].description}
							heading={targeting[0].heading}
							key={0}
						/>
					</div>
				</section>
				{/* Contact Us */}
				<section
					className="flex justify-center items-center w-full bg-border"
					id="contact"
				>
					<div className="w-full p-12 flex gap-6 justify-center not-md:flex-col">
						<img
							src="hello.svg"
							className="max-h-96 md:w-1/2 object-contain object-right "
						/>
						<div className="flex flex-col md:w-1/2 justify-center md:p-4 gap-8">
							<span>We look forward to hearing from you!</span>
							<h2 className="text-2xl font-bold">Contact us</h2>
							<p className="max-w-96">
								Feel free to reach us out for any general and sales inquiry.
							</p>
							<a href={`${contact.map}`}>
								<MapPin className="inline mx-2" /> {contact.address}
							</a>
							<a href={`mailto:${contact.email}`}>
								<Mail className="inline mx-2" /> {contact.email}
							</a>
							<a href={`tel:${contact.phone}`} className="relative">
								<img
									src="callUs.svg"
									alt=""
									className="absolute left-1/6 top-full"
								/>
								<Phone className="inline mx-2" /> {contact.phone}
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
					supplying high-quality safety equipment and solutions. <br /> This
					webpage is under active development.
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
