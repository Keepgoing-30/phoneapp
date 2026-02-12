import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
	href: string;
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
	className?: string;
}

const Button = ({
	href,
	children,
	variant = "primary",
	className = "",
}: ButtonProps) => {
	// Định nghĩa các kiểu nút khác nhau (UI/UX)
	const variants = {
		primary: "bg-indigo-600 text-white hover:bg-gray-700",
		secondary:
			"bg-gray-50 text-slate-700 hover:bg-blue-400 hover:text-white hover:border-blue-400",
		outline:
			"bg-transparent border border-#ffffff text-white hover:bg-blue-400",
	};

	const baseStyles =
		"inline-block px-4 py-1.5 text-sm md:text-xl md:px-8 md:py-3 font-normal rounded-full transition-all duration-300 shadow-md active:scale-95 text-center";

	return (
		<Link
			href={href}
			className={`${baseStyles} ${variants[variant]} ${className}`}
		>
			{children}
		</Link>
	);
};

export default Button;
