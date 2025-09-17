import { FaCalculator, FaAtom } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineBarChart } from "react-icons/md";

export interface StudyGroupCardProps {
  title: string;
  desc: string;
  members: number;
  quizDone: number;
  quizTotal: number;
  progress: number; // 0-100
  icon: "math" | "physics" | "english";
}

export default function StudyGroupCard({
  title,
  desc,
  members,
  quizDone,
  quizTotal,
  progress,
  icon,
}: StudyGroupCardProps) {
  // Pilih ikon sesuai tipe grup
  const iconMap = {
    math: <FaCalculator className="text-[#2563eb] text-lg" />,
    physics: <FaAtom className="text-[#2563eb] text-lg" />,
    english: <PiBookOpenTextFill className="text-[#2563eb] text-lg" />,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col gap-3 relative">
      {/* Icon pojok kanan atas */}
      <div className="absolute top-4 right-4">{iconMap[icon]}</div>
      {/* Judul */}
      <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
      {/* Deskripsi */}
      <p className="text-sm text-gray-500">{desc}</p>
      {/* Info anggota & quiz */}
      <div className="flex items-center gap-4 text-xs text-gray-700 mt-1">
        <span className="flex items-center gap-1">
          <HiUsers className="text-base" />
          {members} anggota
        </span>
        <span className="flex items-center gap-1">
          <MdOutlineBarChart className="text-base" />
          {quizDone}/{quizTotal} quiz
        </span>
      </div>
      {/* Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-1 mt-2">
          <span className="text-xs text-gray-500">Progress Quiz</span>
          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 rounded-full bg-[#2563eb] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Tombol Masuk Grup */}
      <button className="w-full py-2 rounded-md bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition mt-2">
        Masuk Grup
      </button>
    </div>
  );
}