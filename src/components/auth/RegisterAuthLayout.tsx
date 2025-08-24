"use client";
import { useState, useEffect } from "react";
import { FaLightbulb, FaCrown, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const slides = [
	{
		icon: "/brain.svg",
		title: "Smart Quiz Generator",
		desc: "Belajar jadi seru dengan Quiz AI! Buat quiz pintar dengan teknologi AI terdepan",
		badges: [
			{ icon: <FaLightbulb className="text-yellow-400" />, style: "left-8 top-8 bg-white" },
			{ icon: <FaCrown className="text-yellow-500" />, style: "right-8 top-16 bg-white" },
			{ icon: <FaStar className="text-pink-500" />, style: "right-8 bottom-8 bg-white" },
		],
		logoText: "",
	},
	{
		icon: "/quizzo-logo.svg",
		title: "Smart Quiz Generator",
		desc: "Buat quiz pintar dengan teknologi AI terdepan",
		badges: [
			{ icon: <FaCrown className="text-yellow-500" />, style: "right-8 top-8 bg-white" },
			{ icon: <FaStar className="text-pink-500" />, style: "left-8 bottom-8 bg-white" },
			{ icon: <span className="font-bold text-[#2563eb]">XP</span>, style: "left-8 top-16 bg-white" },
		],
		logoText: "QUIZZO",
	},
	{
		icon: "/smart-quiz-logo.svg",
		title: "Smart Quiz Generator",
		desc: "Belajar jadi seru dengan Quiz AI! Buat quiz pintar dengan teknologi AI terdepan",
		badges: [
			{ icon: <FaLightbulb className="text-yellow-400" />, style: "right-8 bottom-8 bg-white" },
			{ icon: <FaStar className="text-pink-500" />, style: "left-8 top-8 bg-white" },
		],
		logoText: "Smart Quiz",
	},
];

export default function RegisterAuthLayout() {
	const [idx, setIdx] = useState(0);
	const [agree, setAgree] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf1ff] to-[#e3e6ee]">
			<div className="w-full max-w-3xl bg-white/0 rounded-2xl shadow-xl flex overflow-hidden">
				{/* Left slider */}
				<div className="w-1/2 bg-[#2563eb] flex flex-col justify-center items-center relative py-10 px-6 transition-all duration-500">
					<div className="relative w-full h-80 flex flex-col items-center justify-center">
						{slides.map((slide, i) => (
							<div
								key={i}
								className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
									i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
								}`}
							>
								<div className="relative mb-6">
									<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg mx-auto">
										{slide.icon.endsWith(".svg") ? (
											<Image src={slide.icon} alt="icon" width={56} height={56} />
										) : (
											slide.icon
										)}
									</div>
									{slide.badges.map((b, j) => (
										<span
											key={j}
											className={`absolute ${b.style} w-8 h-8 rounded-full flex items-center justify-center shadow-md`}
										>
											{b.icon}
										</span>
									))}
								</div>
								<div className="text-white text-2xl font-bold text-center mb-2">{slide.title}</div>
								<div className="text-blue-100 text-base text-center mb-6">{slide.desc}</div>
								<div className="flex gap-2 justify-center">
									{slides.map((_, j) => (
										<span
											key={j}
											className={`w-2 h-2 rounded-full ${j === idx ? "bg-white" : "bg-blue-300"} transition-all`}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Right form */}
				<div className="w-1/2 bg-white flex flex-col justify-center px-8 py-10">
					<div className="mb-6">
						<div className="text-2xl font-bold text-gray-800 mb-1">Daftar Akun</div>
						<div className="text-sm text-gray-500">Mulai perjalanan belajar Anda</div>
					</div>
					<form
						className="flex flex-col gap-4"
						onSubmit={(e) => {
							e.preventDefault();
							if (agree) {
								router.push("/rekomendasi-akun");
							}
						}}
					>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
							<input
								type="email"
								className="text-gray-800 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="nama@email.com"
							/>
						</div>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Username</label>
							<input
								type="text"
								className="text-gray-800 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="username"
							/>
						</div>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
							<input
								type="password"
								className="text-gray-800 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="********"
							/>
						</div>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Konfirmasi Password</label>
							<input
								type="password"
								className="text-gray-700 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="********"
							/>
						</div>
						<label className="flex items-center gap-2 text-xs text-gray-600">
							<input
								type="checkbox"
								className="accent-[#2563eb]"
								checked={agree}
								onChange={(e) => setAgree(e.target.checked)}
							/>
							Saya setuju dengan{" "}
							<a href="#" className="text-[#2563eb] hover:underline">
								Syarat & Ketentuan
							</a>
						</label>
						<button
							type="submit"
							className={`w-full rounded-md py-2 font-semibold mt-2 transition shadow-md ${
								agree
									? "bg-[#2563eb] text-white hover:bg-[#174bbd] cursor-pointer"
									: "bg-gray-200 text-gray-400 cursor-not-allowed"
							}`}
							disabled={!agree}
						>
							Daftar Sekarang
						</button>
					</form>
					<div className="text-xs text-gray-500 mt-6 text-center">
						Sudah punya akun?{" "}
						<a href="/login" className="text-[#2563eb] hover:underline">
							Masuk di sini
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
