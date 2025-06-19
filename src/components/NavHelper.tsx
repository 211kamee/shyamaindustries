import { cn } from "@/lib/utils";

function NavList({ className, ...props }: React.ComponentProps<"ul">) {
	return (
		<ul
			className={cn(
				"group flex flex-1 flex-wrap list-none items-center gap-2",
				className
			)}
			{...props}
		/>
	);
}

function NavItems({ className, ...props }: React.ComponentProps<"li">) {
	return (
		<li
			className={cn(
				"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

export { NavList, NavItems };
