import Image from "next/image";
import Button from "./components/button";
import CertSlider from "./components/certificates";
import SkillBar from "./components/skillbar";
import { TestimonialSlider } from "./components/testimonial";
// app/page.tsx

export default function Home() {
	return (
		<>
			<div className="flex-none md:grid grid-cols-12 gap-4 bg-[linear-gradient(to_right,#355c7d,#6c5b7b,#1494C2)] rounded-2xl p-4 min-h-[600px] z-1">
				<div className="bg-[linear-gradient(to_right,#283048,#859398)] rounded-t-2xl md:col-span-9 flex flex-col md:flex-row md:rounded-xl overflow-hidden shadow-xl">
					<div className="bg-[linear-gradient(to_right,#283048,#859398)] flex flex-col md:flex-row overflow-hidden w-full md:w-1/2 ">
						<Image
							src="/toi.webp"
							alt="Michael"
							width={500}
							height={600}
							className="w-full h-full object-cover rounded-t-2xl rounded-b-3xl md:rounded-none"
						/>
					</div>
					<div className="pb-10 md:pb-0 w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-[linear-gradient(to_right,#283048,#859398)]">
						<h1 className="text-center md:text-center text-white text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
							Hello, I am Michael!
						</h1>
						<p className="text-blue-300 text-center md:text-center md:text-2xl leading-relaxed">
							Aspiring Frontend Software Engineer |
						</p>
						<p className="text-blue-300 text-center md:text-center md:text-2xl leading-relaxed pb-10">
							Creative UX/UI Designer.
						</p>

						{/*Hire Me Button */}

						<div className="flex gap-7">
							<Button href="/about" variant="secondary">
								Hire Me!
							</Button>

							<Button href="/projects" variant="outline">
								View Works
							</Button>
						</div>
					</div>
				</div>
				<div className="rounded-b-2xl md:col-span-3 bg-[linear-gradient(to_right,#859398,#6c5b7b)] backdrop-blur-md md:rounded-xl pt-5 flex flex-col items-center shadow-xl">
					<h2 className="text-white text-3xl font-bold border-b-2 border-gray-400 pb-1">
						My Skills
					</h2>
					<div className="w-full">
						<SkillBar />
					</div>
				</div>
			</div>
			<div className="mt-5 mb-4 p-8 rounded-2xl backdrop-blur-md bg-[linear-gradient(to_right,#355c7d,#6c5b7b,#1494C2)] md:w-full">
				<h1 className="text-violet-50 text-3xl md:text-5xl font-bold border-b-2 border-cyan-100 pb-1 text-center font-lora">
					Testimonials
				</h1>
				<p className="text-violet-50 text-center mt-5 mb-5 md:text-2xl leading-relaxed">
					Hear what others have to say about my work ethic and skills:
				</p>

				{/* Chỉ cần gọi Slider trực tiếp như thế này */}
				<div className="w-full">
					<TestimonialSlider />
				</div>
			</div>
			<div className="mt-5 mb-4 p-8 pb-30 rounded-2xl md:rounded-b-none backdrop-blur-md bg-[linear-gradient(to_right,#355c7d,#6c5b7b,#1494C2)] md:w-full flex flex-col items-center justify-center text-center">
				<h1 className="text-violet-50 text-3xl md:text-5xl font-bold border-b-2 border-cyan-100 pb-1">
					Certificates
				</h1>
				<p className="text-violet-50 text-center mt-5 md:text-center md:text-2xl leading-relaxed">
					Explore the professional certifications <br /> I have earned:
				</p>

				<CertSlider />
			</div>
		</>
	);
}
