import { FaRegChartBar, FaTrophy, FaStar } from "react-icons/fa";

interface GroupProgressProps {
  progress: {
    totalQuiz: number;
    activeMembers: number;
    maxMembers: number;
    totalXP: number;
  };
}

export default function GroupProgress({ progress }: GroupProgressProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="bg-gray-100 rounded-full p-3 mb-2">
          <FaRegChartBar className="text-violet-400 text-xl" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{progress.totalQuiz}</div>
        <div className="text-gray-500 text-sm">Total Quiz</div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="bg-green-100 rounded-full p-3 mb-2">
          <FaTrophy className="text-green-500 text-xl" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{progress.activeMembers}/{progress.maxMembers}</div>
        <div className="text-gray-500 text-sm">Anggota Aktif</div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="bg-pink-100 rounded-full p-3 mb-2">
          <FaStar className="text-pink-400 text-xl" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{progress.totalXP.toLocaleString("en-US")}</div>
        <div className="text-gray-500 text-sm">Total XP Grup</div>
      </div>
    </section>
  );
}