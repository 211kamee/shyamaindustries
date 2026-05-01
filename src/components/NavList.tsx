import { cn } from "@/lib/utils";

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
