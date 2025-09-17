/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaStar, FaPlus } from "react-icons/fa";

interface GroupHeaderProps {
  group: any;
  onAddQuiz: () => void;
  tab: string;
  setTab: (tab: "quiz" | "anggota") => void;
}

export default function GroupHeader({ group, onAddQuiz, tab, setTab }: GroupHeaderProps) {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="bg-violet-100 text-violet-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-sm">
            <FaStar />
          </div>
          <div>
            <div className="font-bold text-xl text-gray-900 leading-tight">
              {group?.name || "Study Squad"}
            </div>
            <div className="text-gray-500 text-sm mt-0.5">
              {group?.member_count ?? 0} anggota aktif
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {group?.description}
            </div>
          </div>
        </div>
        <button
          className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] transition text-white font-semibold px-5 py-2 rounded-lg text-base shadow"
          onClick={onAddQuiz}
        >
          <FaPlus />
          Tambah Quiz
        </button>
      </div>
      {/* Tab */}
      <div className="max-w-4xl mx-auto px-8 flex gap-10 mt-2">
        <button
          className={`py-3 font-semibold text-base transition border-b-2 ${
            tab === "quiz"
              ? "text-[#6366f1] border-[#6366f1]"
              : "text-gray-500 border-transparent hover:text-[#6366f1]"
          }`}
          onClick={() => setTab("quiz")}
        >
          Quiz Bersama
        </button>
        <button
          className={`py-3 font-semibold text-base transition border-b-2 ${
            tab === "anggota"
              ? "text-[#6366f1] border-[#6366f1]"
              : "text-gray-500 border-transparent hover:text-[#6366f1]"
          }`}
          onClick={() => setTab("anggota")}
        >
          Anggota
        </button>
      </div>
    </div>
  );
}