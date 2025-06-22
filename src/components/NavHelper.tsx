import { cn } from "@/lib/utils";

function NavList({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			className={cn(
				"group flex flex-wrap list-none items-center md:justify-end gap-2",
				className
			)}
			{...props}
		/>
	);
}

function NavItems({ className, ...props }: React.ComponentProps<"a">) {
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

export { NavList, NavItems };
