interface Performer {
  name: string;
  avatar: string;
  quizDone: number;
  xp: number;
  rank: number;
  isYou?: boolean;
}

interface GroupTopPerformersProps {
  topPerformers: Performer[];
}

export default function GroupTopPerformers({ topPerformers }: GroupTopPerformersProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-900">Top Performers</h3>
        <a href="#" className="text-sm text-violet-500 hover:underline font-medium">
          Lihat Semua
        </a>
      </div>
      <div className="flex flex-col gap-2">
        {topPerformers.map((user, idx) => (
          <div
            key={user.name + idx}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg ${
              idx === 0 ? "bg-yellow-50" : ""
            }`}
          >
            <span
              className={`font-bold text-base w-6 text-center ${
                idx === 0 ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              {idx + 1}
            </span>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-900">
                {user.name}
                {user.isYou && (
                  <span className="ml-2 text-xs text-violet-500 font-bold">(Kamu)</span>
                )}
              </div>
              <div className="text-xs text-gray-400">
                {user.quizDone} quiz selesai
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span
                className={`font-bold text-base ${
                  idx === 0 ? "text-yellow-600" : "text-gray-700"
                }`}
              >
                {user.xp.toLocaleString("en-US")} XP
              </span>
              <span className="text-xs text-gray-400">
                Rank #{user.rank}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}