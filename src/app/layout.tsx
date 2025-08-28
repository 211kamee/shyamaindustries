import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistDSC = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-dsc",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Shyama Industries | Premium PPE Solutions",
	description:
		"Shyama Industries provides top-quality PPE for demanding environments. Explore our range of safety products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistDSC.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
