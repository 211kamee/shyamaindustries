"use client";
import { AlignJustify } from "lucide-react";
import { NavList } from "@/components/NavList";
import { NavItem } from "@/components/NavItem";
import { NAV_LINKS } from "@/data/navLinks";

export default function Navbar() {
	return (
		<header className="w-full py-2 px-4 not-xl:h-14 sticky flex justify-between items-center break-all font-medium text-lg top-0 xl:p-4 xl:px-8 z-10 shadow  bg-accent">
			<a href="/" className="h-full">
				<img
					src="/logo.png"
					alt="Logo"
					className="xl:h-10 not-xl:h-10 xl:scale-150"
				/>
			</a>
			<NavList className="hidden max-w-max xl:flex">
				{NAV_LINKS.map((link) => (
					<NavItem key={link.href} href={link.href}>
						{link.label}
					</NavItem>
				))}
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
					{NAV_LINKS.map((link) => (
						<NavItem key={link.href} href={link.href}>
							{link.label}
						</NavItem>
					))}
				</NavList>
			</span>
		</header>
	);
}
