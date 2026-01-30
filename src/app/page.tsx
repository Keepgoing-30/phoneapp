import SkillBar from "./components/skillbar";
// app/page.tsx
export default function Home() {
	return (
		<>
			<div className="flex-none md:grid grid-cols-12 gap-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-2xl p-4 min-h-[600px] z-1">
				<div className="md:col-span-9 flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl">
					<div className="flex flex-col md:flex-row overflow-hidden w-full md:w-1/2 bg-white">
						<img
							src="/toi.jpg"
							alt="Michael"
							className="w-full h-full object-cover rounded-b-3xl md:rounded-none"
						/>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-white">
						<h1 className="text-center md:text-center text-slate-800 text-3xl md:text-5xl font-bold mb-4">
							Hello, I am Michael!
						</h1>
						<p className="text-slate-600 text-center md:text-center md:text-2xl leading-relaxed">
							Aspiring Frontend Software Engineer |
						</p>
						<p className="text-slate-600 text-center md:text-center md:text-2xl leading-relaxed">
							Creative UX/UI Designer.
						</p>
					</div>
				</div>
				<div className="md:col-span-3 bg-stone-900/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center shadow-xl">
					<h2 className="text-white text-3xl font-bold border-b-2 border-indigo-400 pb-1">
						My Skill
					</h2>
					<div className="w-full">
						<SkillBar />
					</div>
				</div>
			</div>
			<div className="bg-white mb-4 rounded-xl p-6 md:w-full ">
				<h1 className="text-slate-600 text-3xl font-bold border-b-2 border-indigo-400 pb-1 text-center">
					Testimonials
				</h1>
				<p className="text-slate-600 text-center mt-5 md:text-center md:text-2xl leading-relaxed">
					Hear what others have to say about my work ethic and skills:
				</p>
			</div>
		</>
	);
}
