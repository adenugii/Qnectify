import { FaCheckCircle } from "react-icons/fa";

interface QuizScoreSummaryProps {
  score: number;
  accuracy: number;
  correct: number;
  wrong: number;
}

export default function QuizScoreSummary({ score, accuracy, correct, wrong }: QuizScoreSummaryProps) {
  return (
    <section className="flex flex-col items-center mb-8">
      <FaCheckCircle className="text-green-400 text-5xl mb-3" />
      <h2 className="font-bold text-2xl text-gray-900 mb-1">Quiz Selesai!</h2>
      <div className="text-gray-500 text-base mb-6">Berikut adalah hasil quiz Anda</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="bg-[#e0e7ff] text-[#6366f1] rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-2">{score}</div>
          <div className="font-bold text-lg text-gray-900 mb-1">Skor Quiz</div>
          <div className="text-gray-500 text-sm mb-2">Selamat! Anda mendapat nilai yang bagus</div>
          <div className="flex gap-4 text-base font-semibold">
            <span className="text-[#6366f1]">{accuracy}% Akurasi</span>
            <span className="text-green-500">{correct} Benar</span>
            <span className="text-red-500">{wrong} Salah</span>
          </div>
        </div>
        {/* Achievement */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="text-yellow-400 text-3xl mb-2">🏆</div>
          <div className="font-bold text-lg text-gray-900 mb-1">Achievement Unlocked!</div>
          <div className="text-orange-500 font-bold text-base mb-1">Sharpshooter</div>
          <div className="text-gray-500 text-sm mb-2">Jawab 15+ soal dengan benar dalam satu quiz</div>
          <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold text-sm">+100 Bonus XP</div>
        </div>
        {/* XP & Time */}
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
            <div className="bg-yellow-100 rounded-full p-2">
              <span className="text-yellow-500 text-xl">★</span>
            </div>
            <div>
              <div className="font-bold text-[#6366f1] text-lg">+425 XP</div>
              <div className="text-xs text-gray-500">Level 12 – 68% menuju Level 13</div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                <div className="h-2 bg-[#6366f1] rounded-full" style={{ width: "68%" }} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
            <div className="bg-blue-100 rounded-full p-2">
              <span className="text-blue-500 text-xl">⏱️</span>
            </div>
            <div>
              <div className="font-bold text-[#2563eb] text-lg">12:45</div>
              <div className="text-xs text-gray-500">Rata-rata 38 detik per soal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}