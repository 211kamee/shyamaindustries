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
		<div className="w-full min-h-[100lvh] flex flex-col justify-between items-center">
			<header className="w-full h-16 p-4 relative flex justify-between items-center break-all md:px-[12vw] md:py-2 font-bold">
				<img src="/logo.png" alt="Logo" className="h-22" />
				<NavList className="max-w-max not-md:hidden">
					{navs.map((item, index) => (
						<NavItems key={index}>
							<a href={item.path}>{item.name}</a>
						</NavItems>
					))}
				</NavList>
				<span className="cursor-pointer md:hidden" onClick={hamburgerHandler}>
					<AlignJustify></AlignJustify>
					<NavList
						className="flex-col absolute w-[0vw] h-[calc(100lvh-3.7rem)] top-[105%] right-0 bg-background transition-all"
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
			<main className="grow-1 w-full">
				<section className="flex justify-center items-center gap-4 p-16">
					<span className="flex flex-col justify-between gap-6 font-medium w-[30rem] h-[30rem] px-4">
						<h2 className="text-7xl font-medium">
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

					<div className="bg-[url('/hero.jpg')] bg-cover w-[40rem] h-[30rem]"></div>
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
	if (hamburger.style.width === "") {
		hamburger.style.width = "100vw";
	} else {
		hamburger.style.width = "";
	}
};
