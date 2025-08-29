import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { ImagedAccordion } from "@/components/ImagedAccordion";

export default function Home() {
	const products = [
		{
			imagePath: `Braided_Rope.png`,
			heading: `Braided Rope`,
			description: `Our Braided Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.`,
		},
		{
			imagePath: "Twisted_Rope.png",
			heading: "Twisted Rope",
			description:
				"Our Twisted Rope is   Strong and Durable, perfect to be used for safety purposes. It is made with high-quality materials, ensuring reliability and safety of the user.",
		},
		{
			imagePath: "Full_Body_Harness.png",
			heading: "Full Body Harness",
			description:
				"Our Full Body Harness is designed for Comfort, and it is perfect to be used for all safety purposes, maintaining comfort on long sessions.",
		},
		{
			imagePath: "Fall_Arrestor.png",
			heading: "Fall Arrestor",
			description:
				"Our safety Fall Arrestor automatically engage to halt falls smoothly and reliably, giving you unwavering protection whenever you need it.",
		},
		{
			imagePath: "Grip_Descender.png",
			heading: "Grip Descender",
			description:
				"Our intuitive Grip Descender delivers smooth, controlled lowering with consistent, fail-safe braking, so you can descend confidently, every time.",
		},
		{
			imagePath: "Rock_Chair_Seat.png",
			heading: "Rock Chair Seat",
			description:
				"Our safety Rock Chair Seat deliver ergonomic support and steadfast stability, keeping you secure and comfortable during every height operation.",
		},
		{
			imagePath: "Rope_Protector.png",
			heading: "Rope Protector",
			description:
				"Our Rope Protector shield your line from abrasion and wear, extending rope life and ensuring dependable performance every time.",
		},
		{
			imagePath: "Carabiner.png",
			heading: "Carabiner",
			description:
				"Our Carabiners features a dependable and strong auto-locking gate for consistent, everyday safety.",
		},
		{
			imagePath: "Bag.png",
			heading: "Bag",
			description:
				"Our Bag is Strong, Durable and Dependable, can easily hold all the essential safety tools.",
		},
		// { imagePath: "", heading: "", description: "" },
	];

	const targeting = [
		{
			id: "construction",
			imagePath: "Construction.png",
			heading: "Construction",
			description:
				"Shyama Industries manufactures durable braided and twisted ropes along with reliable safety equipment for the construction sector. Designed to handle heavy loads and tough conditions, our products ensure strength, safety, and efficiency at worksites. We are committed to supporting builders with trusted solutions that enhance performance and reliability",
		},
		{
			id: "military",
			imagePath: "Military.png",
			heading: "Military",
			description:
				"Shyama Industries is a trusted manufacturer of braided and twisted ropes engineered for military applications. With a focus on strength, safety, and reliability, our ropes withstand extreme conditions in training and combat. We provide defense forces with dependable solutions for climbing, securing equipment, and mission-critical operations.",
		},
		{
			id: "mountain_climbing",
			imagePath: "Mountain_Climbing.png",
			heading: "Mountain Climbing",
			description:
				"Shyama Industries specializes in braided and twisted ropes and advanced safety equipment designed also for the Mountain Climbing. Our products combine strength, durability, and precision to ensure maximum safety in challenging environments. Trusted by climbers and adventure professionals, we deliver reliable gear that supports every ascent with confidence.",
		},
	];
	const contact = {
		email: "connect@shyamaindustries.org",
		phone: "+91 9910316881",
		address:
			"12/10 Sunrise Industrial Area, Loni Rd, near Mohan Nagar, Sahibabad, Ghaziabad, UP 201007, INDIA",
		map: "https://maps.app.goo.gl/P6V4LBVn9o4L1Cgi7",
	};

	return (
		<div className="w-full min-h-[100svh] flex flex-col justify-between items-center selection:bg-foreground selection:text-background">
			<main className="grow-1 w-full relative">
				{/* Hero */}
				<section
					className="flex flex-col justify-center items-center relative gap-4 not-md:my-8 p-16 md:flex-row-reverse min-h-[30rem]"
					id="hero"
				>
					<div className="bg-[url('/hero.jpg')] bg-center bg-cover bg-no-repeat w-full md:w-[40rem] h-[30rem] absolute z-[-10] not-md:opacity-50 md:static" />

					<span className="flex flex-col justify-between gap-6 font-medium md:w-[30rem] md:h-[28rem] px-4 text-shadow-lg text-shadow-background">
						<h2 className="md:text-7xl text-5xl font-medium">
							Saving thousands of{" "}
							<span className="underline decoration-destructive md:decoration-[8px] decoration-[6px]">
								lives
							</span>{" "}
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
				<hr />
				{/* About us */}
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
				<hr />
				{/* Products */}
				<section
					className="flex flex-col justify-center items-center w-full gap-4 bg-accent"
					id="products"
				>
					<h2 className="text-4xl font-medium w-full border-t border-destructive text-center py-6 font-dsc">
						Products
					</h2>
					<div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl m-4">
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
				<hr />
				{/* Industries Served */}
				<section
					className="flex flex-col justify-center items-center w-full gap-4 bg-accent"
					id="targeting"
				>
					<h2 className="text-4xl font-medium w-full border-t border-destructive text-center py-6 font-dsc">
						Industries Served
					</h2>
					<div className="flex justify-center items-center flex-wrap gap-4 max-w-6xl m-4">
						{targeting.map((item, index) => (
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
				<hr />
				{/* Contact Us */}
				<section
					className="flex justify-center items-center border-t border-destructive bg-accent"
					id="contact"
				>
					<div className="w-full p-12 flex gap-6 justify-center not-md:flex-col">
						<img
							src="hello.svg"
							className="max-h-96 md:w-1/2 object-contain object-right "
						/>
						<div className="md:w-1/2 flex flex-col justify-center md:p-4 gap-8">
							<h2 className="text-3xl font-bold font-dsc">Contact us</h2>
							<p className="">
								Interest in our products? <br /> Feel free to reach us for
								ordering our products, and any sales related inquiry.
							</p>
							<span>We look forward to hearing from you!</span>
							<a
								href={`${contact.map}`}
								className="flex flex-col items-center md:block not-md:text-center"
							>
								<MapPin className="inline mx-2" />
								<span className="">{contact.address}</span>
							</a>
							<a
								href={`mailto:${contact.email}`}
								className="flex flex-col items-center md:block not-md:text-center"
							>
								<Mail className="inline mx-2" />
								<span>{contact.email}</span>
							</a>
							<a
								href={`tel:${contact.phone}`}
								className="flex flex-col items-center md:block not-md:text-center relative"
							>
								<img
									src="callUs.svg"
									alt=""
									className="absolute left-3/6 md:left-1/6 top-full"
								/>
								<Phone className="inline mx-2" />
								<span>{contact.phone}</span>
							</a>
						</div>
					</div>
				</section>

				{/* Maybe Testimonials Section */}
			</main>
			<hr />
			<footer className="w-full bg-accent text-center text-muted-foreground">
				<section className="flex w-full flex-col-reverse md:flex-row-reverse justify-center border-t border-destructive md:px-[22vw]">
					<div className="md:w-4/10 w-full flex flex-col justify-around">
						<span className="p-2">
							Shyama Industries, saving lives by manufacturing and supplying
							high quality safety equipment and solutions.
						</span>
						<hr />
						<span className="p-2">
							&copy; Shyama Industries, {new Date().getFullYear()} All rights
							reserved
						</span>
					</div>
					<hr />
					<div className="md:w-1/4 flex flex-col items-center p-2">
						<h2 className="text-lg font-medium w-full underline underline-offset-4 decoration-destructive font-dsc">
							Quick Links
						</h2>
						<a href="#hero">Go to top</a>
						<a href="#about">About us</a>
						<a href="#products">Products</a>
						<a href="#targeting">Industries Served</a>
						<a href="#contact">Contact us</a>
					</div>
				</section>
				<hr />
				<section className="p-2">
					Made with care by
					<strong> Arpit Kumar</strong>
					{/* <a href="https://vishalmaurya07.netlify.app/" target="_blank">
						<strong> Vishal Maurya</strong>
					</a> */}
				</section>
			</footer>
		</div>
	);
}
