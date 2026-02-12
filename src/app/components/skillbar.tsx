import React from "react";
import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb"; // Dùng Tabler Icons cho API

// 1. Data Structure: Thêm trường 'percentage' để máy vẽ thanh bar
const skills = [
	{ name: "HTML5", icon: <SiHtml5 />, percentage: 95, level: "Advance" },
	{ name: "CSS3", icon: <SiCss3 />, percentage: 90, level: "Advance" },
	{
		name: "TailwindCSS",
		icon: <SiTailwindcss />,
		percentage: 90,
		level: "Advance",
	},
	{
		name: "JavaScript",
		icon: <SiJavascript />,
		percentage: 85,
		level: "Advance",
	},
	{ name: "React", icon: <SiReact />, percentage: 80, level: "Advance" },
	{ name: "API", icon: <TbApi />, percentage: 85, level: "Advance" },
	{ name: "Next", icon: <SiNextdotjs />, percentage: 75, level: "Advance" },
	{ name: "Python", icon: <SiPython />, percentage: 60, level: "Intermediate" },
];

export default function SkillBar() {
	return (
		<div className="max-w-2xl mx-auto p-15 space-y-8">
			{/* Sửa lại cú pháp vòng lặp map */}
			{skills.map((skill) => (
				<div key={skill.name} className="group">
					{/* 1. Title: Icon + Name + level */}
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-3">
							{/* Dùng text-foreground để icon luôn nổi bật */}
							<span className="text-3xl text-rose-400">{skill.icon}</span>
							<span className="text-lg font-medium text-white text-bold">
								{skill.name}
							</span>
						</div>
						<span className="text-sm font-bold text-gray-200 uppercase tracking-wider">
							{skill.level}
						</span>
					</div>

					{/* 2. Progressbar: Kết hợp màu Indigo chuẩn Apple */}
					<div className="h-2 w-full bg-slate-200 dark:bg-slate-500 rounded-full overflow-hidden">
						<div
							className="h-full bg-sky-600 rounded-full transition-all duration-500 ease-in-out group-hover:bg-green-200"
							style={{ width: `${skill.percentage}%` }}
						></div>
					</div>
				</div>
			))}
		</div>
	);
}
