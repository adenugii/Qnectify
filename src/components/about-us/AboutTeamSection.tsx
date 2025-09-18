"use client";
import Image from "next/image";
import { FaRocket, FaPen, FaPalette, FaChartLine } from "react-icons/fa";

const team = [
  {
    name: "Rafi",
    role: "Founder & Engineer",
    avatar: "/avatars/rizky.png",
    icon: <FaRocket className="text-white" size={32} />,
    quote: '“Suka kopi hitam dan coding sampai pagi. Mimpinya bikin pendidikan jadi accessible untuk semua!”',
  },
  {
    name: "Ade",
    role: "AI Engineer",
    avatar: "/avatars/dewi.png",
    icon: <FaPen className="text-white" size={32} />,
    quote: '“Pecinta algoritma dan machine learning. Bisa debug code sambil minum bubble tea!”',
  },
  {
    name: "Huda",
    role: "UI/UX Designer",
    avatar: "/avatars/budi.png",
    icon: <FaPalette className="text-white" size={32} />,
    quote: '“Obsesi dengan pixel perfect dan user experience. Koleksi font lebih dari 500!”',
  },
  {
    name: "Kohi",
    role: "Marketing",
    avatar: "/avatars/sari.png",
    icon: <FaChartLine className="text-white" size={32} />,
    quote: '“Data-driven marketer yang suka eksperimen. Bisa bikin konten viral sambil makan mie ayam!”',
  },
];

export default function AboutTeamSection() {
  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Tim Kami</h2>
      <p className="text-gray-500 mb-12 text-center">
        Orang-orang hebat di balik platform ini
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {team.map((member, i) => (
          <div
            key={i}
            className="group perspective"
            style={{ perspective: 1200 }}
          >
            <div className="relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-[#2563eb] rounded-2xl flex flex-col items-center justify-center shadow-xl backface-hidden">
                <div className="mb-6">{member.icon}</div>
                <div className="text-white text-center px-4">{member.quote}</div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-y-180 backface-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 object-cover"
                />
                <div className="font-bold text-lg text-gray-800">{member.name}</div>
                <div className="text-gray-500 text-sm">{member.role}</div>
                <div className="mt-4">
                  <Image src="/logo_besar.png" alt="Quizzo" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .transform-style-preserve-3d {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
