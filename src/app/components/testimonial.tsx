"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
	{
		name: "Spencer Ingley",
		title:
			"Associate Professor of Biology, Co-Director, Edward D. Smith Center for Learning & Teaching, BYU - Hawaii",
		date: "Jan 2026",
		comment:
			"I had the pleasure of having Michael work as my research assistant on the BYU-Hawaii habitat restoration project. Michael was incredibly capable, creative, and innovative. He brought in a wealth of skills and abilities that accelerated the work that we were doing. Michael worked well in a diverse team environment, and we miss him and his contributions greatly.",
		imageUrl: "./ingley.webp",
		linkedinUrl: "https://www.linkedin.com/in/spencer-ingley-28394954/",
	},

	{
		name: "Shinehah Remion",
		title: "Business Management in HR and Marketing-BYUH",
		date: "Jan 2026",
		comment:
			"Working with Michael, I observed a rare combination of efficiency and deep observation. He didn't just work fast; he improved how we worked by identifying and solving process bottlenecks that caused team fatigue. His natural inclination toward analyzing systems and solving real-world problems makes him a valuable asset to any technical team. He is a focused, consistent, and highly capable problem solver.",
		imageUrl: "./shine.webp",
		linkedinUrl: "https://www.linkedin.com/in/shinehah-remion/",
	},

	{
		name: "Lewis Hassell",
		title:
			"Professor of Pathology at University of Oklahoma Health Sciences Center",
		date: "Jan 2026",
		comment:
			"In working with Micheal when he was a volunteer in Vietnam, I found him to be a very dedicated hard worker. He managed complex issues with many types of people quite well and yet also remained focused on his core purposes. He is very even tempered and was never frustrated, despite some very challenging co-workers.",
		imageUrl: "./hussel.webp",
		linkedinUrl: "https://www.linkedin.com/in/lewis-hassell-6898966/",
	},

	{
		name: "Julius Such",
		title: "The former supervisor at the Polynesian Cultural Center-Hawaii",
		date: "Jan 2026",
		comment:
			"I am Julius Such, former supervisor of Michael Bui at the Polynesian Cultural Center on the Smoothie Team. During a challenging period when the position had high turnover, Michael consistently stepped up, improved our work processes, and helped make the team more efficient. He was also a great teammate who contributed to a positive work environment.",
		imageUrl: "./julius.webp",
		linkedinUrl: "https://www.linkedin.com/in/julius-such-060a091b5/",
	},

	{
		name: "Caitlin Alder-Escabarte",
		title:
			"Master of Marine Biology student at James Cook University - Coral Reef Sciences",
		date: "Jan 2026",
		comment:
			"Michael was a consistently hardworking and reliable coworker who always completed tasks efficiently and to a high standard. During our time working together in Hawaii, he was patient and instructive, often taking the time to teach me tasks I was unfamiliar with and ensuring the work was done correctly. Michael not only met expectations but exceeded them, making him a valuable and dependable member of our team.",
		imageUrl: "./caitlin.webp",
		linkedinUrl: "https://www.linkedin.com/in/caitlin-alder/",
	},
];

export const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Michael lưu ý: Vì hiện 3 thẻ, nên số lần bấm "Next" tối đa sẽ là (Tổng số thẻ - 2)
	const maxIndex = testimonials.length - 3;

	const next = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prev = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	return (
		<div className="relative w-full mx-auto px-4 py-10">
			{/* Nút bấm điều hướng */}
			<div className="absolute top-[150px] -translate-y-[10px] w-full md:left-[-10px] flex justify-between px-2 z-20 pointer-events-none">
				<button
					onClick={prev}
					className="p-3 bg-white/10 hover:bg-cyan-500/50 backdrop-blur-md rounded-full transition-all pointer-events-auto shadow-lg border border-white/20"
				>
					<ChevronLeft className="text-white" size={28} />
				</button>
				<button
					onClick={next}
					className="p-3 bg-white/10 hover:bg-cyan-500/50 backdrop-blur-md rounded-full transition-all pointer-events-auto shadow-lg border border-white/20"
				>
					<ChevronRight className="text-white" size={28} />
				</button>
			</div>

			{/* Khung chứa các thẻ */}

			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-700 ease-in-out gap-5"
					style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
				>
					{testimonials.map((t, index) => (
						<div
							key={index}
							className="w-full md:w-[calc(33.333%-1.25rem)] flex-none p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-cyan-400/50 transition-colors"
						>
							<div className="flex items-center gap-3 mt-3 pb-4 border-b-1 border-white/5">
								<img
									src={t.imageUrl}
									alt={t.name}
									className="w-20 h-20 rounded-full border border-cyan-400/50 object-cover shrink-0"
								/>
								<div className="text-left overflow-hidden">
									<h4 className="text-white font-bold text-2xl truncate">
										{t.name}
									</h4>
									<p className="text-slate-300 text-[13px] leading-tight line-clamp-2">
										{t.title}
									</p>
								</div>
							</div>
							<div>
								<Quote className="text-cyan-400 mb-4 opacity-40" size={32} />
								<p className="font-lora italic text-base text-slate-200 leading-relaxed mb-6 line-clamp-6">
									"{t.comment}"
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
