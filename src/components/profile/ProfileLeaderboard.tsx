import { MdLeaderboard } from "react-icons/md";

export default function ProfileLeaderboard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-bold text-lg text-gray-900 flex-1">
          Global Leaderboard
        </h3>
        <span className="text-yellow-400 text-xl">
          <MdLeaderboard />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-yellow-50 rounded-lg px-3 py-2">
          <span className="font-bold text-yellow-500 text-base w-5 text-center">1</span>
          <img src="/leaderboard-1.jpg" alt="Sarah Wilson" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Sarah Wilson</div>
            <div className="text-xs text-gray-400">4,850 XP</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="font-bold text-gray-400 text-base w-5 text-center">2</span>
          <img src="/leaderboard-2.jpg" alt="Mike Chen" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Mike Chen</div>
            <div className="text-xs text-gray-400">4,320 XP</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-blue-50 rounded-lg px-3 py-2 border border-blue-200">
          <span className="font-bold text-blue-500 text-base w-5 text-center">7</span>
          <img src="/leaderboard-you.jpg" alt="Ahmad Rizki" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-[#2563eb] text-sm">Ahmad Rizki (You)</div>
            <div className="text-xs text-gray-400">2,450 XP</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="font-bold text-gray-400 text-base w-5 text-center">8</span>
          <img src="/leaderboard-3.jpg" alt="Lisa Park" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">Lisa Park</div>
            <div className="text-xs text-gray-400">2,380 XP</div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="font-bold text-gray-400 text-base w-5 text-center">9</span>
          <img src="/leaderboard-4.jpg" alt="David Kim" className="w-8 h-8 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">David Kim</div>
            <div className="text-xs text-gray-400">2,200 XP</div>
          </div>
        </div>
      </div>
      <button className="w-full mt-6 py-2 rounded-md bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition">
        View Full Leaderboard
      </button>
    </div>
  );
}