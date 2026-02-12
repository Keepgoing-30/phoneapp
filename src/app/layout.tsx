import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"; // Import Inter - "Bản sao" hoàn hảo của Apple SF Pro
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

// Cấu hình font Inter
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Michael's Portfolio",
	description: "Software Engineering student at Ensign College",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				/* 1. Sử dụng inter.className để áp dụng font toàn trang */
				/* 2. Thêm 'antialiased' để chữ mượt và thanh mảnh như trên Mac */
				className={`${inter.className} antialiased text-[#1d1d1f]`}
			>
				{/* 3. THÊM class 'group' ở đây để hiệu ứng hover ml-64 ở dưới hoạt động */}
				<div className="flex min-h-screen">
					<div className="peer">
						<Sidebar />
					</div>

					{/* Phần nội dung chính */}
					<main className="flex-1 pl-0 p-0 text-[#1d1d1f] bg-background">
						{children}
					</main>
				</div>

				<Footer />
			</body>
		</html>
	);
}
