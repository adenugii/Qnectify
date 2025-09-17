// "use client";
// import { useRef, useEffect, useState } from "react";

// const items = [
// 	{
// 		title: "AI Quiz Generator",
// 		desc: "Sistem AI yang membuat quiz personal sesuai kemampuan dan gaya belajar Anda",
// 		percent: 95,
// 	},
// 	{
// 		title: "Gamifikasi Belajar",
// 		desc: "Sistem XP, Level, dan Badge yang membuat belajar seperti bermain game",
// 		percent: 90,
// 	},
// 	{
// 		title: "Study Groups",
// 		desc: "Belajar bersama teman dalam grup yang mendukung dan memotivasi",
// 		percent: 85,
// 	},
// 	{
// 		title: "Leaderboard",
// 		desc: "Kompetisi sehat dengan ranking personal dan grup untuk memotivasi belajar",
// 		percent: 80,
// 	},
// ];

// export default function AboutWhyUsBarSection() {
// 	const ref = useRef<HTMLDivElement>(null);
// 	const [visible, setVisible] = useState(false);

// 	useEffect(() => {
// 		function onScroll() {
// 			if (!ref.current) return;
// 			const rect = ref.current.getBoundingClientRect();
// 			if (rect.top < window.innerHeight - 100) setVisible(true);
// 		}
// 		window.addEventListener("scroll", onScroll);
// 		onScroll();
// 		return () => window.removeEventListener("scroll", onScroll);
// 	}, []);

// 	return (
// 		<section className="bg-white py-16 px-4 flex flex-col items-center">
// 			<div ref={ref} className="w-full max-w-4xl">
// 				<h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
// 					Pencapaian Kami
// 				</h2>
// 				<p className="text-gray-500 mb-12 text-center">
// 					Beberapa keunggulan Qnectify yang telah terbukti secara nyata
// 				</p>
// 				<div className="space-y-8">
// 					{items.map((item, i) => (
// 						<div key={i} className="w-full">
// 							<div className="flex items-center justify-between mb-2">
// 								<div
// 									className={`font-semibold text-gray-700 text-lg transition-transform duration-700 ${
// 										visible
// 											? "translate-x-0 opacity-100"
// 											: "-translate-x-10 opacity-0"
// 									}`}
// 									style={{ transitionDelay: `${i * 120}ms` }}
// 								>
// 									{item.title}
// 								</div>
// 								<div
// 									className={`text-[#2563eb] font-bold transition-transform duration-700 ${
// 										visible
// 											? "translate-x-0 opacity-100"
// 											: "translate-x-10 opacity-0"
// 									}`}
// 									style={{ transitionDelay: `${i * 120 + 80}ms` }}
// 								>
// 									{item.percent}%
// 								</div>
// 							</div>
// 							<div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
// 								<div
// 									className="h-full bg-[#2563eb] rounded-full transition-all duration-1000"
// 									style={{
// 										width: visible ? `${item.percent}%` : "0%",
// 										transitionDelay: `${i * 120 + 200}ms`,
// 									}}
// 								/>
// 							</div>
// 							<div
// 								className={`text-gray-500 text-sm mt-2 transition-transform duration-700 ${
// 									visible
// 										? "translate-y-0 opacity-100"
// 										: "translate-y-4 opacity-0"
// 								}`}
// 								style={{ transitionDelay: `${i * 120 + 200}ms` }}
// 							>
// 								{item.desc}
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
