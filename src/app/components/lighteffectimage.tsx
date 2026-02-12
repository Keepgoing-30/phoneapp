"use client";
// Nếu dùng Next.js, nên dùng component Image để tối ưu tốc độ tải trang
import type React from "react";
import { useState } from "react";

const LightEffectImage = () => {
	const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
	const [isHovering, setIsHovering] = useState(false);

	// Sửa divElement thành HTMLDivElement
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePos({
			x: ((e.clientX - rect.left) / rect.width) * 100,
			y: ((e.clientY - rect.top) / rect.height) * 100,
		});
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			onMouseMove={handleMouseMove}
			className="relative w-full h-full overflow-hidden"
		>
			{/* LỚP ÁNH SÁNG: Tách biệt hoàn toàn transition */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={
					{
						// Sử dụng CSS Variables để ép trình duyệt render nhanh hơn
						"--x": `${mousePos.x}%`,
						"--y": `${mousePos.y}%`,
						background: `radial-gradient(circle at var(--x) var(--y), oklch(42.4% 0.199 265.638) 0%, transparent 30%)`,
						opacity: isHovering ? 1 : 0,
						transition: "opacity 0.3s ease", // CHỈ transition opacity
					} as React.CSSProperties
				}
			/>
			{/* LỚP 0: ẢNH NỀN (Nằm dưới cùng) */}
			<img
				src="/nen.webp"
				alt="Background"
				className="absolute inset-0 z-5 w-full h-full object-cover opacity-100" // Thêm opacity thấp để ánh sáng nổi bật hơn
			/>

			{/* NGUỒN SÁNG */}
			<div
				className={`absolute inset-0 z-10 transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`}
				style={{
					background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, oklch(42.4% 0.199 265.638) 0%, oklch(54.1% 0.281 293.009) 15%, transparent 30%)`,
				}}
			/>

			{/* Dùng thẻ img bình thường nhưng thêm thuộc tính để tránh lỗi lint */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src="/thu.webp"
				alt="Michael Portfolio"
				className="relative z-20 w-full h-full object-cover pointer-events-none"
			/>

			<div className="absolute inset-0 z-30 pointer-events-none border border-white/10 rounded-xl" />
		</div>
	);
};

export default LightEffectImage;
