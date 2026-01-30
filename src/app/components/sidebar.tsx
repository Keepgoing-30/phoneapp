import { Briefcase, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import type React from "react";

//Define data for sidebar
interface NavItem {
	label: string;
	path: string;
	icon: React.ReactNode;
}

const menuItem: NavItem[] = [
	{ label: "HOME", path: "/", icon: <Home className="icon-style" size={24} /> },
	{
		label: "ABOUT",
		path: "/about",
		icon: <User className="icon-style" size={24} />,
	},
	{
		label: "PROJECT",
		path: "/projects",
		icon: <Briefcase className="icon-style" size={24} />,
	},
	{
		label: "USERS",
		path: "/users",
		icon: <Mail className="icon-style" size={24} />,
	},
];
const Sidebar: React.FC = () => {
	return (
		// 'aside' is a box for the sidebar. fixed: Giúp Sidebar "đứng yên" khi bạn cuộn trang nội dung.
		//h-screen: Cho Sidebar cao bằng 100% màn hình (height: 100vh).
		//shadow-xl: Tạo bóng đổ phía bên phải để Sidebar trông "nổi" lên khỏi mặt trang web.
		//border-b: Tạo một đường kẻ ở dưới (border-bottom) để ngăn cách phần Logo và Menu.
		<aside
			className="fixed left-0 top-0 h-screen hover:bg-sky-300/10 text-white transition-all duration-300 ease-in-out z-50
                 w-15 hover:w-57 group shadow-2xl"
		>
			{/*Logo and title*/}
			{/*p-6: Padding đều 4 phía (khoảng cách từ viền vào trong).*/}
			<div className="h-20 flex items-center px-3.5 border-b border-slate-800 overflow-hidden">
				<div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">
					M
				</div>
				<span className="ml-4 font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-foreground whitespace-nowrap">
					MICHAEL DEV
				</span>
			</div>
			{/*MENU Chính */}
			{/* MENU Chính - Chỉ dùng 1 thẻ nav duy nhất */}
			<nav className="mt-3.5 px-1.5 space-y-2">
				{menuItem.map((item) => (
					<Link
						key={item.label}
						href={item.path}
						className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-all group/item overflow-hidden"
					>
						<div className="w-8 flex justify-center text-slate-400 group-hover/item:text-indigo-400">
							{item.icon}
						</div>
						<span className="ml-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
							{item.label}
						</span>
					</Link>
				))}{" "}
				{/* Đóng ngoặc map ở đây */}
			</nav>
		</aside>
	);
};

export default Sidebar;
