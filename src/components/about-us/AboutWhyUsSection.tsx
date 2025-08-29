"use client";
import { FaRobot, FaGamepad, FaUsers, FaTrophy } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={28} className="text-[#2563eb]" />,
    title: "AI Quiz Generator",
    desc: "Sistem AI yang membuat quiz personal sesuai kemampuan dan gaya belajar Anda",
  },
  {
    icon: <FaGamepad size={28} className="text-[#2563eb]" />,
    title: "Gamifikasi Belajar",
    desc: "Sistem XP, Level, dan Badge yang membuat belajar seperti bermain game",
  },
  {
    icon: <FaUsers size={28} className="text-[#2563eb]" />,
    title: "Study Groups",
    desc: "Belajar bersama teman dalam grup yang mendukung dan memotivasi",
  },
  {
    icon: <FaTrophy size={28} className="text-[#2563eb]" />,
    title: "Leaderboard",
    desc: "Kompetisi sehat dengan ranking personal dan grup untuk memotivasi belajar",
  },
];

export default function AboutWhyUsSection() {
  return (
    <section className="bg-gradient-to-br from-[#f7fafd] to-[#eaf1ff] py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Kenapa Pilih Kami?</h2>
      <p className="text-gray-500 mb-12 text-center">
        Fitur-fitur unggulan yang membuat belajar jadi lebih seru
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#eaf1ff] flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <div className="font-bold text-lg text-gray-800 mb-2 text-center">{f.title}</div>
            <div className="text-gray-500 text-sm text-center">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
