export default function QuizResultActions() {
  return (
    <div className="flex flex-col gap-3 mt-8">
      <button className="w-full py-3 rounded-lg bg-[#6366f1] text-white font-semibold text-base shadow hover:bg-[#4f46e5] transition">
        Kembali ke Dashboard
      </button>
      <button className="w-full py-3 rounded-lg bg-white border border-gray-200 text-[#6366f1] font-semibold text-base shadow hover:bg-gray-50 transition">
        Bagikan Hasil
      </button>
      <div className="bg-blue-50 rounded-lg p-4 mt-2">
        <div className="font-semibold text-gray-700 mb-1">Quiz Berikutnya</div>
        <div className="text-sm text-gray-500 mb-2">Tingkatkan skill Anda dengan quiz lanjutan</div>
        <button className="w-full py-2 rounded-md bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition">
          Lihat Quiz Lain
        </button>
      </div>
    </div>
  );
}