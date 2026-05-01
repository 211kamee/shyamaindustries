import { cn } from "@/lib/utils";

export function NavItem({ className, ...props }: React.ComponentProps<"a">) {
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
