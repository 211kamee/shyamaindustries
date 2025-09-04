"use client";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
	return (
		<header className="w-full py-2 px-4 not-xl:h-14 sticky flex justify-between items-center break-all font-medium text-lg top-0 xl:p-4 xl:px-8 z-10 shadow  bg-accent">
			<a href="/" className="h-full">
				<img src="/logo.png" alt="Logo" className="xl:h-14 not-xl:h-10 xl:scale-150" />
			</a>
			<NavList className="hidden max-w-max xl:flex">
				<NavItems href="#hero">Home</NavItems>
				<NavItems href="#about">About us</NavItems>
				<NavItems href="#products">Products</NavItems>
				<NavItems href="#targeting">Industries Served</NavItems>
				<NavItems href="#contact">Contact us</NavItems>
			</NavList>
			<span
				className="cursor-pointer xl:hidden"
				onClick={function () {
					const hamburger = document.querySelector("#hamburger") as HTMLElement;
					if (hamburger.style.display === "") {
						hamburger.style.display = "flex";
					} else {
						hamburger.style.display = "";
					}
				}}
			>
				<AlignJustify className="h-full"></AlignJustify>
				<NavList
					className="hidden flex-col absolute w-full h-[calc(100svh-3.4rem)] top-[100%] right-0 bg-background p-4 gap-4"
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
	);
}

export function NavList({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			className={cn(
				"group flex flex-wrap list-none items-center xl:justify-end gap-2",
				className
			)}
			{...props}
		/>
	);
}

export function NavItems({ className, ...props }: React.ComponentProps<"a">) {
	return (
		<li>
			<a
				className={cn(
					"relative p-1 m-1 before:content-[''] before:h-1/16 before:w-0 before:bg-foreground before:absolute before:top-0 before:left-0 after:content-[''] after:h-1/16 after:w-0 after:bg-foreground after:absolute after:bottom-0 after:right-0 hover:before:w-full hover:after:w-full before:transition-all after:transition-all",
					className
				)}
				{...props}
			></a>
		</li>
	);
}
