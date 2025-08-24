import { FaUpload, FaRobot, FaMedal, FaTrophy } from "react-icons/fa";

const fitur = [
	{
		icon: <FaUpload size={32} className="text-[#2563eb]" />,
		title: "Upload Materi",
		desc: "Upload file PDF, dokumen, atau teks apapun. AI kami akan memproses materi Anda dengan cepat dan akurat.",
	},
	{
		icon: <FaRobot size={32} className="text-[#2563eb]" />,
		title: "AI Generate Quiz",
		desc: "Teknologi AI canggih menganalisis materi dan membuat quiz berkualitas tinggi secara otomatis dalam hitungan detik.",
	},
	{
		icon: <FaMedal size={32} className="text-[#2563eb]" />,
		title: "XP & Badges",
		desc: "Kumpulkan XP, naik level, dan raih berbagai badge keren. Belajar jadi lebih menyenangkan dan memotivasi!",
	},
	{
		icon: <FaTrophy size={32} className="text-[#2563eb]" />,
		title: "Leaderboard",
		desc: "Kompetisi sehat dengan teman-teman. Lihat ranking Anda dan jadilah yang terdepan dalam leaderboard global.",
	},
];

export default function FiturUnggulanSection() {
	return (
		<section className="w-full bg-white py-14 px-4 flex flex-col items-center">
			<h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-2 text-center">
				Fitur Unggulan
			</h2>
			<p className="text-[#6b7280] mb-8 text-center max-w-xl">
				Nikmati pengalaman belajar yang revolusioner dengan teknologi AI terdepan
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
				{fitur.map((f, i) => (
					<div
						key={i}
						className="bg-[#f4f8ff] rounded-xl p-6 flex flex-col items-center shadow-[0_4px_24px_0_rgba(30,58,138,0.2)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(30,58,138,0.35)] "

					>
						<div className="mb-3 relative flex items-center justify-center">
							<span className="absolute w-14 h-14 rounded-full bg-[#DBEAFE]"></span>
							<span className="relative z-10">{f.icon}</span>
						</div>
						<div className="font-semibold text-lg text-[#222] mb-2 text-center">
							{f.title}
						</div>
						<div className="text-[#6b7280] text-sm text-center">
							{f.desc}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
