"use client"; // Đảm bảo có dòng này ở đầu file nếu dùng Next.js App Router
import {
	Briefcase,
	Github,
	Home,
	Linkedin,
	Mail,
	Menu,
	User,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

//Define data for sidebar
interface NavItem {
	label: string;
	path: string;
	icon: React.ReactNode;
}

export const menuItem: NavItem[] = [
	{ label: "HOME", path: "/", icon: <Home className="icon-style" size={24} /> },
	{
		label: "ABOUT",
		path: "/about",
		icon: <User className="icon-style" size={24} />,
	},
	{
		label: "PROJECTS",
		path: "/projects",
		icon: <Briefcase className="icon-style" size={24} />,
	},
	{
		label: "CONTACT",
		path: "/contact",
		icon: <Mail className="icon-style" size={24} />,
	},
	{
		label: "LINKEDIN",
		path: "https://www.linkedin.com/feed/",
		icon: <Linkedin className="icon-style" size={24} />,
	},
	{
		label: "GITHUB",
		path: "https://github.com/Keepgoing-30",
		icon: <Github className="icon-style" size={24} />,
	},
];

const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		// 'aside' is a box for the sidebar. fixed: Giúp Sidebar "đứng yên" khi bạn cuộn trang nội dung.
		//h-screen: Cho Sidebar cao bằng 100% màn hình (height: 100vh).
		//shadow-xl: Tạo bóng đổ phía bên phải để Sidebar trông "nổi" lên khỏi mặt trang web.
		//border-b: Tạo một đường kẻ ở dưới (border-bottom) để ngăn cách phần Logo và Menu.
		<nav
			// Chạm để đảo ngược trạng thái (dành cho mobile)
			onClick={() => setIsOpen(!isOpen)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					setIsOpen(!isOpen);
				}
			}}
			// Vẫn giữ hover để dùng mượt trên máy tính
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			className={`fixed left-0 top-0 h-90 z-50 rounded-br-4xl transition-all duration-500 ease-in-out shadow-2xl
		${isOpen ? "w-80 bg-gray-800/20 backdrop-blur-md shadow-2xl" : "w-30 bg-transparent shadow-none"}
		group`}
			aria-label="Sidebar navigation"
		>
			{/* Logo Section */}
			<div className="h-28 flex items-center px-10 gap-1 overflow-hidden">
				{/* 1. Thẻ bọc ngoài tạo viền Gradient */}
				<div className="shrink-0 p-[1.5px] rounded-lg shadow-lg transition-transform duration-300 active:scale-95">
					{/* 2. Thẻ bên trong chứa nội dung (M hoặc Menu) */}
					<div className="w-10 h-10 bg-white/10 rounded-[calc(0.5rem-1.5px)] flex items-center justify-center text-white font-bold text-2xl">
						{isOpen ? "M" : <Menu className="text-white" size={24} />}
					</div>
				</div>

				<span
					className={`ml-1 transition-all duration-500 whitespace-nowrap text-white
						 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
				>
					<span className="ml-1 font-sans font-light text-3xl tracking-[0.3em] text-white">
						MICHAEL
					</span>
				</span>
			</div>
			{/* Menu Section */}
			<nav
				className={`mt-2 px-8 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
			>
				{menuItem
					.filter(
						(item) => item.label !== "LINKEDIN" && item.label !== "GITHUB",
					)
					.map((item) => (
						<Link
							key={item.label}
							href={item.path}
							className="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-600 transition-all"
						>
							<div className="w-8 flex justify-center text-slate-400">
								{item.icon}
							</div>
							<span className="ml-6 font-medium text-white whitespace-nowrap">
								{item.label}
							</span>
						</Link>
					))}
			</nav>
		</nav>
	);
};

export default Sidebar;
