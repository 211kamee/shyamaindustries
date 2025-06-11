import { AlignJustify } from "lucide-react";
import { NavList, NavItems } from "@/components/NavHelper";

export default function App() {
	return (
		<div className="w-[100vw] min-h-[100lvh] flex flex-col justify-between items-center">
			<header className="bg-shade w-full border-b-2 p-4 relative flex justify-between items-center break-all md:px-[12vw] md:py-2">
				<img src="#" alt="Logo" />
				<NavList className="max-w-max not-md:hidden">
					<NavItems>
						<a href="#docs">Home</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Home</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Home</a>
					</NavItems>
					<NavItems>
						<a href="#docs">Home</a>
					</NavItems>
				</NavList>
				<span className="cursor-pointer md:hidden" onClick={hamburgerHandler}>
					<AlignJustify></AlignJustify>
					<NavList
						className="hidden bg-shade flex-col absolute w-[100vw] h-[calc(100lvh-3.7rem)] top-[105%] right-0"
						id="hamburger"
					>
						<NavItems>
							<a href="#docs">Home</a>
						</NavItems>
						<NavItems>
							<a href="#docs">Home</a>
						</NavItems>
						<NavItems>
							<a href="#docs">Home</a>
						</NavItems>
						<NavItems>
							<a href="#docs">Home</a>
						</NavItems>
					</NavList>
				</span>
			</header>
			<main>
				<section className="">
					<div>
						<img src="" alt="" />
					</div>
				</section>
			</main>
			<footer className="bg-shade w-full border-b-2 md:px-[12vw] text-center">
				Footer
				<section></section>
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
