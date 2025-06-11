import React from "react";
import { AlignJustify } from "lucide-react";
import { NavList, NavItems } from "@/components/NavHelper";

export default function App() {
	return (
		<div className="w-[100vw] min-h-[100lvh] flex flex-col justify-between items-center">
			<header className="bg-shade w-full border-b-2 p-4 relative flex justify-between items-center break-all md:px-[12vw] md:py-2">
				<img src="#" alt="Logo" />
				<NavList className="max-w-max not-md:hidden">
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
				</NavList>
				<span className="cursor-pointer md:hidden" onClick={hamburgerHandler}>
					<AlignJustify></AlignJustify>
				</span>
				<NavList
					className="hidden bg-shade flex-col absolute w-[100vw] h-[92lvh] top-[105%] right-0 not-md:hidden"
					id="hamburger"
				>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Documentation</a>
					</NavItems>
				</NavList>
			</header>
			<main></main>
			<footer className="bg-shade w-full border-b-2 md:px-[12vw] text-center">
				Footer
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
