import Navbar from "@/components/common/Navbar";
import { FaTrophy, FaFire, FaStar, FaClock } from "react-icons/fa";
import { FaFlask, FaGlobe, FaCalculator } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdLeaderboard } from "react-icons/md";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Kiri: Profil, Badge, History */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Profile Card */}
          <section className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
            {/* Foto Profil */}
            <div>
              <img
                src="/profile-demo.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
              />
            </div>
            {/* Info */}
            <div className="flex-1">
              <h2 className="font-bold text-xl text-gray-900 mb-1">
                Rafi Fachrul Nugroho
              </h2>
              <div className="text-gray-500 text-sm mb-2">
                Level 15 • Quiz Master
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#2563eb] text-white text-xs font-bold rounded-full px-2 py-0.5">
                  15
                </span>
                <span className="text-xs text-gray-500">XP Progress</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-[#2563eb] rounded-full"
                  style={{ width: "81.6%" }}
                />
              </div>
              <div className="flex justify-end text-xs text-[#2563eb] font-semibold mt-1">
                2,450 / 3,000 XP
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              Badges Achieved
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center bg-yellow-100 rounded-lg px-7 py-5">
                <FaTrophy className="text-yellow-400 text-2xl mb-2" />
                <span className="font-semibold text-sm text-gray-700">First Win</span>
              </div>
              <div className="flex flex-col items-center bg-blue-100 rounded-lg px-7 py-5">
                <FaFire className="text-blue-500 text-2xl mb-2" />
                <span className="font-semibold text-sm text-gray-700">10 Streak</span>
              </div>
              <div className="flex flex-col items-center bg-purple-100 rounded-lg px-7 py-5">
                <FaStar className="text-purple-500 text-2xl mb-2" />
                <span className="font-semibold text-sm text-gray-700">Perfect Score</span>
              </div>
              <div className="flex flex-col items-center bg-green-100 rounded-lg px-7 py-5">
                <FaClock className="text-green-500 text-2xl mb-2" />
                <span className="font-semibold text-sm text-gray-700">Speed Demon</span>
              </div>
            </div>
          </section>

          {/* Quiz History */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              Quiz History
            </h3>
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <FaCalculator className="text-blue-500 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    Mathematics Quiz
                  </div>
                  <div className="text-xs text-gray-400">January 15, 2024</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-green-500 text-lg leading-none">
                    95/100
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">
                    +250 XP
                  </span>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <FaFlask className="text-blue-500 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    Science Quiz
                  </div>
                  <div className="text-xs text-gray-400">January 14, 2024</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-green-500 text-lg leading-none">
                    88/100
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">
                    +220 XP
                  </span>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <FaGlobe className="text-blue-500 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">
                    Geography Quiz
                  </div>
                  <div className="text-xs text-gray-400">January 13, 2024</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-yellow-500 text-lg leading-none">
                    72/100
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">
                    +180 XP
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Kanan: Leaderboard */}
        <aside className="w-full md:w-[340px] flex-shrink-0">
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
              {/* Leaderboard Items */}
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
        </aside>
      </main>
    </div>
  );
}