import { AlignJustify, ArrowRight } from "lucide-react";
import { NavList, NavItems } from "@/components/NavHelper";
import { Button } from "./components/ui/button";

export default function App() {
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
		<div className="w-full min-h-[100svh] flex flex-col justify-between items-center">
			<header className="w-full h-16 p-4 sticky flex justify-between items-center break-all font-bold top-0 md:px-[12vw] md:py-2 z-10">
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
				<section className="flex flex-col justify-center items-center gap-4 p-16 md:flex-row-reverse">
					<div className="bg-[url('/hero.jpg')] bg-cover w-full md:w-[40rem] h-[30rem] absolute top-1 z-[-10] not-md:opacity-50 md:static" />

					<span className="flex flex-col justify-between gap-6 font-medium md:w-[30rem] md:h-[28rem] px-4 text-shadow-lg text-shadow-zinc-50">
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
			</main>
			<footer className="bg-shade w-full border-b-2 md:px-[12vw] text-center">
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
