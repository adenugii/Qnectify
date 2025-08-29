import { FaStar, FaPlus } from "react-icons/fa";

interface GroupHeaderProps {
  onAddQuiz: () => void;
  tab: string;
  setTab: (tab: "quiz" | "anggota") => void;
}

export default function GroupHeader({ onAddQuiz, tab, setTab }: GroupHeaderProps) {
  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-violet-100 text-violet-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
            <FaStar />
          </div>
          <div>
            <div className="font-bold text-lg md:text-xl text-gray-900">
              Study Squad
            </div>
            <div className="text-gray-500 text-sm">
              15 anggota aktif
            </div>
          </div>
        </div>
        <button
          className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 transition text-white font-semibold px-5 py-2 rounded-lg text-base shadow"
          onClick={onAddQuiz}
        >
          <FaPlus />
          Tambah Quiz
        </button>
      </div>
      {/* Tab */}
      <div className="max-w-4xl mx-auto px-6 border-b flex gap-8 mt-2">
        <button
          className={`py-3 font-semibold text-base transition border-b-2 ${
            tab === "quiz"
              ? "text-violet-600 border-violet-500"
              : "text-gray-500 border-transparent hover:text-violet-500"
          }`}
          onClick={() => setTab("quiz")}
        >
          Quiz Bersama
        </button>
        <button
          className={`py-3 font-semibold text-base transition border-b-2 ${
            tab === "anggota"
              ? "text-violet-600 border-violet-500"
              : "text-gray-500 border-transparent hover:text-violet-500"
          }`}
          onClick={() => setTab("anggota")}
        >
          Anggota
        </button>
      </div>
    </div>
  );
}