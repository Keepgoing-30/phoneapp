"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const certificates = [
	{
		id: 1,
		title: "Design User Experiences with Figma",
		url: "https://www.linkedin.com/learning/certificates/85907001a00d81291912b5a76652967a0b07f23962e77a9e036ff0334730919f?trk=share_certificate",
		imageUrl: "/a.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to execute the full UX design lifecycle in Figma, from sketching wireframes to building interactive prototypes, while efficiently collaborating with stakeholders and preparing production-ready visual assets for seamless developer handoff.",
	},

	{
		id: 2,
		title: "User Experience UX for NonDesigners",
		url: "https://www.linkedin.com/learning/certificates/c2635de8e8179b0bbd6a05c8e3f95099c2d6a9449a036d8b9c4f8951e02819d3?trk=share_certificate",
		imageUrl: "/c.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to execute the end-to-end UX design process, from conducting deep user research and personas to building scalable design systems and high-fidelity interactive prototypes with a focus on accessibility.",
	},
	{
		id: 3,
		title: "Figma: From Design to CSS Implementation",
		url: "https://www.linkedin.com/learning/certificates/08a80f3604baf5a9927f2acd4ef810e2089429ec7cc1044dd3016c3659311195?trk=share_certificate",
		imageUrl: "/d.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to bridge the gap between design and development by documenting project CSS, exporting optimized image assets, and accurately translating Figma designs into clean, responsive HTML/CSS code.",
	},

	{
		id: 4,
		title: "Designing Microinteractions with Figma",
		url: "https://www.linkedin.com/learning/certificates/e7e4caae7cce944fcb68b991c0327677d07cabf4a8d88544364cc24a64966143?trk=share_certificate",
		imageUrl: "/e.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to enhance user engagement by creating fluid micro-interactions, using Smart Animate, advanced triggers, and interactive components to build realistic elements like loading spinners, sliders, and toggle buttons.",
	},
	{
		id: 5,
		title: "Figma: Designing with Variables and Conditionals",
		url: "https://www.linkedin.com/learning/certificates/08515cb81651cd5f17610a93f7719ad9223c3b1c9e740f8eb02051120db19d24?trk=share_certificate",
		imageUrl: "/f.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to build advanced, data-driven prototypes by leveraging Figma variables and conditional logic to create complex functionalities such as dynamic shopping carts, visibility toggles, and state-based interactions.",
	},
	{
		id: 6,
		title: "Accessibility and Inclusion with Figma",
		url: "https://www.linkedin.com/learning/certificates/88cc9c122bd8bb93e6228194792c4288244555af54b770d38c251fe34ef79eb2?trk=share_certificate",
		imageUrl: "/g.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to design for all users by integrating accessibility audits into my workflow, utilizing tools like Stark and Adee to check color contrast, focus order, and screen reader compatibility while fostering inclusive design.",
	},
	{
		id: 7,
		title: "UX Foundations: Prototyping",
		url: "https://www.linkedin.com/learning/certificates/df7fec9ce655d4e1826201a60141e88da5fb43d94a9746536c2b98e605553faf?trk=share_certificate",
		imageUrl: "/h.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to validate design ideas through a comprehensive prototyping strategy, spanning from low-fidelity paper sketches to high-fidelity interactive models that minimize development risks and facilitate user testing.",
	},

	{
		id: 8,
		title: "Python for Non-Programmers",
		url: "https://www.linkedin.com/learning/certificates/d80e389e3814457ce0af4f2bf9c44be93617015aa0d56762ebe760620738254a?trk=share_certificate",
		imageUrl: "/b.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to build foundational programming logic using Python, from managing data with variables, lists, and dictionaries to implementing core functional features like loops, conditional statements, and reusable functions with parameters.",
	},

	{
		id: 9,
		title: "Figma for UX Design",
		url: "https://www.linkedin.com/learning/certificates/3c6956c3d0f051a57c8addce0d0efa1871719c558fffea7abb2294fec63f32f2?trk=share_certificate",
		imageUrl: "/i.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to manage professional design workflows, from setting up project styles and advanced Auto Layout to collaborating with stakeholders and exporting production-ready files for development handoff.",
	},
	{
		id: 10,
		title: "Illustrator 2025 Essential Training",
		url: "https://www.linkedin.com/learning/certificates/6e64f8aea1563e110da2ce2cc178af1607e89f2f7240f86d8571cb812b4080e2?trk=share_certificate",
		imageUrl: "/j.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to create complex vector illustrations by leveraging professional drawing tools like the Pen and Shape Builder, managing intricate layouts with layers and symbols, and applying advanced styling through dynamic gradients, custom brushes, and generative AI features for production-ready output.",
	},
	{
		id: 11,
		title: "Git Essential Training (2023)",
		url: "https://www.linkedin.com/learning/certificates/050dcefb7941898452ec4f1b08e7af8b470f1ed66c36900db1b1804f64b9c1bf?trk=share_certificate",
		imageUrl: "/k.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to manage source code efficiently using Git's distributed version control system, including local initialization, remote synchronization (push/pull), branch management, and navigating commit history to revert changes when necessary.",
	},
	{
		id: 12,
		title: "CSS Fundamentals: Unlock the Power of Web Styling",
		url: "https://www.linkedin.com/learning/certificates/5bef78418063bcf2f6ff8750cf316e5123450ac33e4f44c9048640e007b92299?trk=share_certificate",
		imageUrl: "/l.webp",
		platform: "LinkedIn Learning",
		learned:
			"I mastered the ability to architect modern web interfaces by applying core CSS concepts such as the Box Model, Cascade, and Specificity, while implementing complex layouts using Flexbox, CSS Grid, and responsive design principles for cross-browser compatibility.",
	},
];

export default function CertSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const current = certificates[currentIndex];

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === certificates.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="md:max-w-4xl w-full py-6 px-4 md:px-12 relative group mx-auto">
			{/* Khung chính */}
			<div className="absolute top-[580px] right-[150px] md:right-[-45px] md:top-[-25] p-2 md:p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-20 shadow-lg border border-white/10 flex items-center justify-center font-sans text-lg">
				<span className="font-normal">{currentIndex + 1}</span>
				<span className="mx-1 opacity-50">/</span>
				<span>{certificates.length}</span>
			</div>
			<div className="w-full h-135 md:h-190 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl flex flex-col items-center p-6 text-center transition-all duration-500 overflow-hidden relative">
				{/* Sửa lỗi gradient ở đây */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 opacity-50 pointer-events-none" />

				<div className="relative z-10 w-full flex flex-col items-center">
					{/* Ảnh có link click */}
					<a
						href={current.url}
						target="_blank"
						rel="noopener noreferrer"
						className="relative w-full mb-5 rounded-lg overflow-hidden border border-white/20 shadow-inner bg-slate-800 block group/img"
					>
						{current.imageUrl ? (
							<>
								<img
									src={current.imageUrl}
									alt={current.title}
									className="w-full h-auto block transition-transform duration-500 group-hover/img:scale-105"
								/>
								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
									<span className="text-white bg-blue-800/20 backdrop-blur-sm shadow-xl px-6 py-3 rounded-full text-md font-bold hover:border-cyan-100 transition-colors">
										Verify on LinkedIn
									</span>
								</div>
							</>
						) : (
							<div className="w-full h-64 flex flex-col items-center justify-center text-slate-500">
								<div className="w-16 h-16 bg-[#0077b5] rounded-lg flex items-center justify-center text-white text-3xl font-bold mb-2">
									in
								</div>
								<p>Preview not available</p>
							</div>
						)}
					</a>

					<h2 className="md:text-2xl font-bold text-white mb-2 leading-tight">
						{current.title}
					</h2>

					<p className="text-white text-sm italic opacity-80 leading-relaxed px-4">
						"{current.learned}"
					</p>
				</div>
			</div>

			{/* Nút bấm đặt bên ngoài khung chính nhưng vẫn trong div relative bao ngoài */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-[-30px] -translate-y-1/2 p-2 md:p-5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-20 shadow-lg border border-white/10"
			>
				<ChevronLeft size={24} />
			</button>

			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-[-30px] -translate-y-1/2 p-2 md:p-5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-20 shadow-lg border border-white/10"
			>
				<ChevronRight size={24} />
			</button>
		</div>
	);
}
