import { FaChevronLeft, FaRegBookmark } from "react-icons/fa";

interface QuizNavigationProps {
  current: number;
  total: number;
  marked: boolean;
  setMarked: (v: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function QuizNavigation({
  current,
  total,
  marked,
  setMarked,
  onPrev,
  onNext,
}: QuizNavigationProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto mt-8">
      <button
        className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 font-semibold text-base hover:bg-gray-50 transition w-full md:w-auto"
        disabled={current === 0}
        onClick={onPrev}
      >
        <FaChevronLeft />
        Sebelumnya
      </button>
      <div className="flex gap-3 w-full md:w-auto">
        <button
          type="button"
          className={`flex items-center gap-2 px-6 py-3 rounded-lg border bg-gray-100 text-gray-700 font-semibold text-base transition w-full md:w-auto ${
            marked ? "border-[#2563eb] bg-blue-50 text-[#2563eb]" : "border-gray-200"
          }`}
          onClick={() => setMarked(!marked)}
        >
          <FaRegBookmark />
          Tandai
        </button>
        <button
          className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition w-full md:w-auto"
          onClick={onNext}
          disabled={current === total - 1}
        >
          Selanjutnya
          <FaChevronLeft className="rotate-180" />
        </button>
      </div>
    </div>
  );
}