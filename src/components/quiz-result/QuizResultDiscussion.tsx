interface DiscussionItem {
  number: number;
  question: string;
  yourAnswer: string;
  correctAnswer: string;
  explanation: string;
  isCorrect: boolean;
}

interface QuizResultDiscussionProps {
  discussions: DiscussionItem[];
}

export default function QuizResultDiscussion({ discussions }: QuizResultDiscussionProps) {
  return (
    <section className="bg-white rounded-xl shadow p-6 mt-10">
      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-[#2563eb]">📘</span>
        Pembahasan Soal
      </h3>
      <div className="flex flex-col gap-4">
        {discussions.map((item) => (
          <div
            key={item.number}
            className={`p-4 rounded-lg border ${
              item.isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-[#2563eb]">Soal #{item.number}</span>
              {!item.isCorrect && (
                <span className="text-red-500 font-semibold text-sm">Salah</span>
              )}
            </div>
            <div className="text-gray-700 font-semibold mb-1">{item.question}</div>
            <div className="text-sm mb-1">
              <span className="font-semibold text-gray-500">Jawaban Anda: </span>
              <span className={item.isCorrect ? "text-green-600" : "text-red-500"}>{item.yourAnswer}</span>
            </div>
            <div className="text-sm mb-1">
              <span className="font-semibold text-gray-500">Jawaban Benar: </span>
              <span className="text-green-600">{item.correctAnswer}</span>
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Pembahasan: </span>
              {item.explanation}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}