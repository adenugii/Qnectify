"use client";

import { useState, JSX } from "react";
import leaderboardData from "@/data/leaderboard.json";
import groupLeaderboardData from "@/data/group-leaderboard.json";
import { FaTrophy, FaUser, FaBolt, FaFire, FaStar, FaLock, FaGlobe, FaUsers, FaChevronLeft, FaChevronRight, FaMedal, FaCode, FaBookOpen, FaLeaf } from "react-icons/fa";

type TabType = "global" | "group";

export default function LeaderboardPage() {
  const [tab, setTab] = useState<TabType>("global");
  const [page, setPage] = useState(1);

  // Badge types
  type BadgeType = "win" | "streak" | "perfect" | "speed" | "new";
  // Badge icon map
  const badgeIcon: Record<BadgeType, JSX.Element> = {
    win: <FaTrophy className="text-yellow-400" />,
    streak: <FaFire className="text-blue-500" />,
    perfect: <FaStar className="text-purple-500" />,
    speed: <FaBolt className="text-green-500" />,
    new: <FaStar className="text-blue-500" />,
  };

  // Group icon map
  const groupIcon = {
    yellow: <FaMedal className="text-yellow-400" />,
    blue: <FaCode className="text-blue-500" />,
    purple: <FaBookOpen className="text-purple-500" />,
    green: <FaLeaf className="text-green-500" />,
    red: <FaFire className="text-red-500" />,
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col md:flex-row gap-6 px-2 md:px-0 py-8">
      {/* Sidebar */}
      <aside className="w-full md:w-[300px] flex-shrink-0 flex flex-col gap-4">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center mb-2">
          <img
            src="/profile-demo.jpg"
            alt="Sarah Johnson"
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mb-2"
          />
          <div className="font-bold text-lg text-gray-900">Sarah Johnson</div>
          <div className="text-gray-500 text-sm mb-3">Level 12</div>
          <div className="w-full mb-1">
            <div className="flex justify-between text-xs text-gray-400 mb-0.5">
              <span>XP Progress</span>
              <span className="text-[#2563eb] font-bold">350/500</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 bg-[#2563eb] rounded-full" style={{ width: "70%" }} />
            </div>
            <div className="text-xs text-gray-400 mt-1">150 XP menuju Level 13</div>
          </div>
          {/* Badge Collection */}
          <div className="w-full mt-4">
            <div className="text-xs font-semibold text-gray-700 mb-2">Badge Collection</div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-yellow-100 p-2 rounded-lg">{badgeIcon.win}</span>
              <span className="bg-blue-100 p-2 rounded-lg">{badgeIcon.streak}</span>
              <span className="bg-purple-100 p-2 rounded-lg">{badgeIcon.perfect}</span>
              <span className="bg-green-100 p-2 rounded-lg">{badgeIcon.speed}</span>
              <span className="bg-blue-100 p-2 rounded-lg flex items-center gap-1">
                {badgeIcon.new}
                <span className="text-xs font-bold text-blue-500">Baru</span>
              </span>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Global Rank</span>
            <span className="font-bold text-[#2563eb]">#247</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Quizzes Completed</span>
            <span className="font-bold text-green-500">127</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Quizzes Inprogress</span>
            <span className="font-bold text-purple-500">87</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Quizzes Not Started</span>
            <span className="font-bold text-red-400">43</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <FaTrophy className="text-yellow-400 text-2xl" />
          <h1 className="font-bold text-2xl text-gray-900">Leaderboard</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-0">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 font-semibold text-base border-b-2 transition ${
                tab === "global"
                  ? "text-[#2563eb] border-[#2563eb] bg-blue-50"
                  : "text-gray-500 border-transparent hover:text-[#2563eb]"
              }`}
              onClick={() => setTab("global")}
            >
              <span className="inline-flex items-center gap-2">
                <FaGlobe /> Global Leaderboard
              </span>
            </button>
            <button
              className={`flex-1 py-4 font-semibold text-base border-b-2 transition ${
                tab === "group"
                  ? "text-[#2563eb] border-[#2563eb] bg-blue-50"
                  : "text-gray-500 border-transparent hover:text-[#2563eb]"
              }`}
              onClick={() => setTab("group")}
            >
              <span className="inline-flex items-center gap-2">
                <FaUsers /> Study Group
              </span>
            </button>
          </div>

          {/* Tab Content */}
          {tab === "global" && (
            <div className="p-6">
              <div className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <FaTrophy className="text-yellow-400" />
                Global Leaderboard <span className="font-normal text-gray-400 text-sm">(Top 50 Users)</span>
              </div>
              <div className="flex flex-col gap-2">
                {leaderboardData.users.map((user, idx) => (
                  <div
                    key={user.name + idx}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg border ${
                      idx === 0
                        ? "bg-yellow-50 border-yellow-200"
                        : idx === 1
                        ? "bg-blue-50 border-blue-200"
                        : "border-transparent"
                    } ${user.isYou ? "border-blue-500" : ""}`}
                  >
                    <span
                      className={`font-bold text-base w-8 text-center ${
                        idx === 0
                          ? "text-yellow-500"
                          : idx === 1
                          ? "text-blue-500"
                          : "text-gray-400"
                      }`}
                    >
                      #{idx + 1}
                    </span>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div
                        className={`font-semibold text-gray-900 text-base ${
                          user.isYou ? "text-[#2563eb]" : ""
                        }`}
                      >
                        {user.name}
                        {user.isYou && (
                          <span className="ml-2 text-xs font-bold text-[#2563eb]">(You)</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400">Level {user.level}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`font-bold text-base ${
                          idx === 0
                            ? "text-yellow-600"
                            : idx === 1
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {user.xp.toLocaleString("en-US")} XP
                        {user.badges?.map((b, i) =>
                          (b in badgeIcon) ? (
                            <span key={b + i}>{badgeIcon[b as BadgeType]}</span>
                          ) : null
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-6">
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-gray-500 font-semibold disabled:opacity-50"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`px-3 py-1 rounded ${
                      page === p
                        ? "bg-[#2563eb] text-white font-bold"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-gray-500 font-semibold disabled:opacity-50"
                  disabled={page === 3}
                  onClick={() => setPage((p) => Math.min(3, p + 1))}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {tab === "group" && (
            <div className="p-6">
              <div className="flex justify-end mb-2">
                <button className="bg-[#2563eb] text-white font-semibold px-4 py-1.5 rounded-lg text-sm shadow hover:bg-[#1e40af] transition">
                  Your Group
                </button>
              </div>
              <div className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <FaTrophy className="text-yellow-400" />
                Global Leaderboard <span className="font-normal text-gray-400 text-sm">(Top 50 Group)</span>
              </div>
              <div className="flex flex-col gap-2">
                {groupLeaderboardData.groups.map((group, idx) => (
                  <div
                    key={group.name + idx}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg border ${
                      idx === 0
                        ? "bg-yellow-50 border-yellow-200"
                        : idx === 2
                        ? "bg-purple-50 border-purple-200"
                        : idx === 1
                        ? "bg-blue-50 border-blue-200"
                        : "border-transparent"
                    } ${group.isYou ? "border-blue-500" : ""}`}
                  >
                    <span
                      className={`font-bold text-base w-8 text-center ${
                        idx === 0
                          ? "text-yellow-500"
                          : idx === 1
                          ? "text-blue-500"
                          : idx === 2
                          ? "text-purple-500"
                          : "text-gray-400"
                      }`}
                    >
                      #{idx + 1}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold ${group.bg}`}>
                      {groupIcon[group.icon as keyof typeof groupIcon]}
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-semibold text-gray-900 text-base ${
                          group.isYou ? "text-[#2563eb]" : ""
                        }`}
                      >
                        {group.name}
                        {group.isYou && (
                          <span className="ml-2 text-xs font-bold text-[#2563eb]">(Your Group)</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400">{group.members} members</div>
                      <div className="text-xs text-gray-400">
                        Completed {group.completed} group quizzes
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`font-bold text-base ${
                          idx === 0
                            ? "text-yellow-600"
                            : idx === 1
                            ? "text-blue-600"
                            : idx === 2
                            ? "text-purple-600"
                            : "text-gray-700"
                        }`}
                      >
                        {group.xp.toLocaleString("en-US")} XP
                      </span>
                      <span className={`text-xs mt-1 ${group.trend > 0 ? "text-green-500" : "text-red-500"}`}>
                        {group.trend > 0 ? `↑ +${group.trend.toLocaleString("en-US")}` : `↓ ${Math.abs(group.trend).toLocaleString("en-US")}`} this week
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-6">
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-gray-500 font-semibold disabled:opacity-50"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`px-3 py-1 rounded ${
                      page === p
                        ? "bg-[#2563eb] text-white font-bold"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded bg-gray-100 text-gray-500 font-semibold disabled:opacity-50"
                  disabled={page === 3}
                  onClick={() => setPage((p) => Math.min(3, p + 1))}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}