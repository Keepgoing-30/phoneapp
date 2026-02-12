"use client";
import LightEffectImage from "../components/lighteffectimage";

export default function About() {
	return (
		/* - w-full: Chiếm hết chiều rộng có sẵn.
       - max-w-[393px]: Giới hạn đúng chiều rộng iPhone 14 Pro ở Mobile.
       - md:max-w-6xl: Mở rộng ra cho màn hình lớn.
       - mx-auto: Luôn nằm giữa trang.
    */
		<div className="w-full max-w-[393px] md:max-w-full mx-auto bg-sky-900/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 md:p-12 z-10 shadow-2xl transition-all duration-500">
			{/* - flex-col: Xếp chồng (ảnh trên, chữ dưới) cho Mobile.
          - md:flex-row: Xếp hàng ngang cho Desktop.
          - items-center: Căn giữa các thành phần theo trục dọc.
      */}
			<div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
				{/* Khối Ảnh - Tự điều chỉnh kích thước */}
				<div className="w-full flex justify-center items-center shrink-0 md:w-2/5">
					<div className="max-w-[280px] md:max-w-full">
						<LightEffectImage />
					</div>
				</div>

				{/* Khối Văn Bản - Tự thích nghi */}
				<div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
					<h1 className="text-white text-4xl md:text-6xl font-sans font-light tracking-[0.2em] uppercase mb-6">
						About
					</h1>

					<div className="space-y-5">
						<p className="text-slate-200 text-sm md:text-lg leading-relaxed text-justify md:text-left">
							Hi, I’m Michael. I’m an aspiring software engineer with a strong
							interest in UI design and full-stack development. I focus on
							understanding user needs and building practical solutions, while
							also writing clean, maintainable code.
						</p>
						<p className="text-slate-200 text-sm md:text-lg leading-relaxed text-justify md:text-left">
							I enjoy working across both frontend and backend because it allows
							me to design, build, and fully control the products I create. This
							structured way of thinking helps me build systems that are both
							functional and scalable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
