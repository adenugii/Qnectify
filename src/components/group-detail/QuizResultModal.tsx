import { FaCheckCircle, FaTimesCircle, FaStar, FaArrowLeft } from "react-icons/fa";

interface QuizResultModalProps {
  show: boolean;
  onClose: () => void;
  result: {
    title: string;
    score: number;
    total: number;
    xp: number;
    badge?: string;
    correct: number;
    wrong: number;
    time: string;
    details: { question: string; correct: boolean; answer: string }[];
  };
}

export default function QuizResultModal({ show, onClose, result }: QuizResultModalProps) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-8 relative">
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-[#6366f1] text-xl"
          onClick={onClose}
          aria-label="Kembali"
        >
          <FaArrowLeft />
        </button>
        <div className="flex flex-col items-center mb-6">
          <FaCheckCircle className="text-[#6366f1] text-4xl mb-2" />
          <h2 className="font-bold text-2xl text-gray-900 mb-1">{result.title}</h2>
          <div className="text-gray-500 text-base mb-2">Hasil Quiz Kamu</div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-3xl font-bold text-[#2563eb]">{result.score}/{result.total}</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold text-sm">
              +{result.xp} XP
            </span>
            {result.badge && (
              <span className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold text-sm">
                <FaStar /> {result.badge}
              </span>
            )}
          </div>
          <div className="flex gap-6 mb-2">
            <span className="text-green-500 font-semibold">
              {result.correct} Benar
            </span>
            <span className="text-red-500 font-semibold">
              {result.wrong} Salah
            </span>
            <span className="text-gray-500 font-semibold">
              {result.time} menit
            </span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Detail Jawaban</h3>
          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto">
            {result.details.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                  item.correct
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <span className="font-bold text-base text-gray-500 w-6 text-center">{idx + 1}</span>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">{item.question}</div>
                  <div className="text-xs text-gray-400">Jawaban: {item.answer}</div>
                </div>
                <div>
                  {item.correct ? (
                    <FaCheckCircle className="text-green-500 text-xl" />
                  ) : (
                    <FaTimesCircle className="text-red-500 text-xl" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full mt-4 py-2 rounded-lg bg-[#6366f1] text-white font-semibold text-base shadow hover:bg-[#4f46e5] transition"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}