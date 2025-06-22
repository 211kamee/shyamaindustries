import { Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function DialogBox() {
	const phone = "+91 9910316881";
	return (
		<div className="fixed bg-foreground/50 w-full h-svh z-20 hidden justify-center items-center">
			<Card>
				<CardContent className="flex flex-col justify-center items-center">
					<a
						href={`tel:${phone}`}
						className="relative m-3 flex flex-col justify-center items-center"
					>
						<img
							src="callUs.svg"
							alt=""
							className="absolute left-1/6 top-full"
						/>
						<Phone className="block mx-2" />
						{phone}
					</a>
				</CardContent>
			</Card>
		</div>
	);
}
