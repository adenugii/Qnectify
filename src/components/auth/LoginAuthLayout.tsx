"use client";
import { useState, useEffect } from "react";
import { FaStar, FaLightbulb } from "react-icons/fa";
import Image from "next/image";

const slides = [
	{
		icon: "/smart-quiz-logo.svg",
		title: "Belajar jadi seru dengan Quiz AI!",
		desc: "Tingkatkan kemampuan belajarmu dengan quiz yang dibuat khusus oleh AI",
		badges: [
			{ icon: <FaStar className="text-green-500" />, style: "left-4 top-24 bg-white" },
			{ icon: <FaLightbulb className="text-yellow-400" />, style: "right-4 top-12 bg-white" },
		],
		logoText: "Smart Quiz",
	},
	{
		icon: "/quizzo-logo.svg",
		title: "Smart Quiz Generator",
		desc: "Buat quiz pintar dengan teknologi AI terdepan",
		badges: [
			{ icon: <span className="font-bold text-yellow-400">XP</span>, style: "right-8 bottom-8 bg-white" },
			{ icon: <FaStar className="text-green-500" />, style: "left-8 top-8 bg-white" },
		],
		logoText: "QUIZZO",
	},
	{
		icon: "/brain.svg",
		title: "Quiz AI Otomatis",
		desc: "Belajar jadi seru dengan Quiz AI! Buat quiz pintar dengan teknologi AI terdepan",
		badges: [
			{ icon: <FaLightbulb className="text-yellow-400" />, style: "left-8 bottom-8 bg-white" },
			{ icon: <FaStar className="text-green-500" />, style: "right-8 top-8 bg-white" },
		],
		logoText: "",
	},
];

type LoginAuthLayoutProps = {
	onLogin?: ({
		email,
		password,
		rememberMe,
		setError,
		setLoading,
	}: {
		email: string;
		password: string;
		rememberMe: boolean;
		setError: (msg: string | null) => void;
		setLoading: (v: boolean) => void;
	}) => void;
};

export default function LoginAuthLayout({ onLogin }: LoginAuthLayoutProps) {
	const [idx, setIdx] = useState(0);
	const [form, setForm] = useState({ email: "", password: "" });
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4000);
		return () => clearInterval(timer);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (onLogin) {
			await onLogin({
				email: form.email,
				password: form.password,
				rememberMe,
				setError,
				setLoading,
			});
		}
	};

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
						<div className="text-2xl font-bold text-gray-800 mb-1">Selamat Datang!</div>
						<div className="text-sm text-gray-500">Masuk ke akun Smart Quiz Generator Anda</div>
					</div>
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
							<input
								type="email"
								name="email"
								className="text-gray-800 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="nama@email.com"
								value={form.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
							<input
								type="password"
								name="password"
								className="text-gray-800 w-full rounded-md border border-gray-300 shadow-[0_3px_10px_0_rgba(37,99,235,0.25)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
								placeholder="********"
								value={form.password}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="flex items-center justify-between">
							<label className="flex items-center gap-2 text-xs text-gray-600">
								<input
									type="checkbox"
									className="accent-[#2563eb]"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
								/>
								Ingat saya
							</label>
							<a href="#" className="text-xs text-[#2563eb] hover:underline">
								Lupa password?
							</a>
						</div>
						{error && <div className="text-xs text-red-500">{error}</div>}
						<button
							type="submit"
							className="w-full bg-[#2563eb] text-white rounded-md py-2 font-semibold mt-2 hover:bg-[#174bbd] transition"
							disabled={loading}
						>
							{loading ? "Memproses..." : "Masuk →"}
						</button>
						<div className="flex items-center gap-2 my-2">
							<div className="flex-1 h-px bg-gray-200" />
							<span className="text-xs text-gray-400">atau</span>
							<div className="flex-1 h-px bg-gray-200" />
						</div>
						<button
							type="button"
							className="w-full border border-gray-200 shadow-sm rounded-md py-2 font-semibold flex items-center justify-center gap-2 text-gray-700 bg-white hover:bg-gray-50 transition"
						>
							<span className="flex items-center justify-center w-5 h-5">
								<span className="text-[22px] font-bold text-[#EA4335]">G</span>
							</span>
							<span className="flex-1 text-center">Masuk dengan Google</span>
						</button>
					</form>
					<div className="text-xs text-gray-500 mt-6 text-center">
						Belum punya akun?{" "}
						<a href="/register" className="text-[#2563eb] hover:underline">
							Daftar di sini
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
