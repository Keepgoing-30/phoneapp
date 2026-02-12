export default function Contact() {
	return (
		// Đổi sang bg-slate-950 để thấy rõ hiệu ứng ánh sáng
		<div className="relative h-96 w-full bg-slate-950 overflow-hidden border border-white/10 rounded-2xl">
			{/* Quầng sáng 1: Tăng độ đậm lên /40 và bỏ chữ bên trong để tránh bị blur theo */}
			<div className="absolute top-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-teal-500/40 blur-[100px] animate-pulse" />

			{/* Quầng sáng 2: Tăng độ đậm */}
			<div className="absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/40 blur-[100px] animate-pulse" />

			{/* Lớp hoa văn dấu chấm (Optional - để Michael thấy sự khác biệt) */}
			<div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px] opacity-10" />

			{/* Nội dung chính */}
			<div className="relative z-10 flex flex-col h-full items-center justify-center">
				<h1 className="text-white text-5xl font-black tracking-tighter mb-4">
					Contact
				</h1>
				<p className="text-slate-400 text-sm">
					Let's build something amazing together.
				</p>
			</div>
		</div>
	);
}
