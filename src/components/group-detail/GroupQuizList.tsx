import { FaRegChartBar, FaRegClock, FaUserFriends, FaStar, FaRegEye, FaRegPlayCircle } from "react-icons/fa";

export interface GroupQuizListProps {
  quizzes: {
    title: string;
    desc: string;
    avatar: string;
    questions: number;
    time: number;
    done: number;
    total: number;
    status?: string;
    score?: string;
    progress?: number;
    badge?: string;
  }[];
  onShowResult: (quiz: {
    title: string;
    desc: string;
    avatar: string;
    questions: number;
    time: number;
    done: number;
    total: number;
    status?: string;
    score?: string;
    progress?: number;
    badge?: string;
  }) => void;
}

export default function GroupQuizList({ quizzes, onShowResult }: GroupQuizListProps) {
  return (
    <section className="mb-8">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Daftar Quiz</h3>
      <div className="flex flex-col gap-4">
        {quizzes.map((quiz, idx) => (
          <div key={quiz.title + idx} className="bg-white rounded-xl shadow-sm p-5 flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Info Quiz */}
            <div className="flex-1 flex items-center gap-4">
              <img
                src={quiz.avatar}
                alt={quiz.title}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900 text-base">
                  {quiz.title}
                </div>
                <div className="text-xs text-gray-400 mb-1">{quiz.desc}</div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-1">
                  <span className="flex items-center gap-1">
                    <FaRegChartBar /> {quiz.questions} soal
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegClock /> {quiz.time} menit
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUserFriends /> {quiz.done}/{quiz.total} selesai
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {quiz.status === "done" && (
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                      Selesai - {quiz.score}
                    </span>
                  )}
                  {quiz.status === "not_started" && (
                    <span className="bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full">
                      Belum Dikerjakan
                    </span>
                  )}
                  {quiz.status === "in_progress" && (
                    <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                      Selesai - {quiz.score}
                    </span>
                  )}
                  {quiz.badge && (
                    <span className="flex items-center gap-1 text-xs text-yellow-500 font-semibold">
                      <FaStar /> {quiz.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Action */}
            <div className="flex flex-col items-end gap-2 min-w-[140px]">
              {quiz.status === "done" && (
                <button
                  onClick={() => onShowResult(quiz)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-500 font-semibold text-sm shadow border border-gray-200 cursor-pointer"
                >
                  <FaRegEye />
                  Lihat Hasil
                </button>
              )}
              {quiz.status === "not_started" && (
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500 text-white font-semibold text-sm shadow hover:bg-violet-600 transition">
                  <FaRegPlayCircle />
                  Kerjakan Quiz
                </button>
              )}
              {quiz.status === "in_progress" && (
                <button
                  onClick={() => onShowResult(quiz)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-500 font-semibold text-sm shadow border border-gray-200 cursor-pointer"
                >
                  <FaRegEye />
                  Lihat Hasil
                </button>
              )}
              <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
                <div
                  className={`h-1 rounded-full ${
                    quiz.progress && quiz.progress >= 80
                      ? "bg-green-500"
                      : quiz.progress && quiz.progress >= 50
                      ? "bg-blue-500"
                      : "bg-violet-500"
                  }`}
                  style={{ width: `${quiz.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 mt-1">
                {quiz.progress}% grup selesai
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  // Contoh pemakaian tombol lihat hasil:
  // <button onClick={() => onShowResult(quiz)}>Lihat Hasil</button>
}