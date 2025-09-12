interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const percent = Math.round(((current + 1) / total) * 100);
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-800 font-medium text-base">
          Soal {current + 1} dari {total}
        </span>
        <span className="text-gray-400 text-sm">
          {percent}% selesai
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div
          className="h-2 bg-[#2563eb] rounded-full transition-all duration-300"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </>
  );
}