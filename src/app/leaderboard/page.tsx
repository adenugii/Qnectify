"use client";

import { useState } from "react";
import leaderboardData from "@/data/leaderboard.json";
import groupLeaderboardData from "@/data/group-leaderboard.json";
import { FaTrophy, FaUser, FaBolt, FaFire, FaStar, FaLock, FaGlobe, FaUsers, FaChevronLeft, FaChevronRight, FaMedal, FaCode, FaBookOpen, FaLeaf } from "react-icons/fa";
import ProfileSidebar from "@/components/leaderboard/ProfileSidebar";
import LeaderboardTabs from "@/components/leaderboard/LeaderboardTabs";
import GlobalLeaderboard from "@/components/leaderboard/GlobalLeaderboard";
import GroupLeaderboard from "@/components/leaderboard/GroupLeaderboard";

type TabType = "global" | "group";

export default function LeaderboardPage() {
  const [tab, setTab] = useState<TabType>("global");
  const [page, setPage] = useState(1);

  // Badge icon map
  const badgeIcon = {
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
      <ProfileSidebar />
      <section className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <FaTrophy className="text-yellow-400 text-2xl" />
          <h1 className="font-bold text-2xl text-gray-900">Leaderboard</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-0">
          <LeaderboardTabs tab={tab} setTab={setTab} />
          {tab === "global" ? (
            <GlobalLeaderboard
              users={leaderboardData.users}
              badgeIcon={badgeIcon}
              page={page}
              setPage={setPage}
            />
          ) : (
            <GroupLeaderboard
              groups={groupLeaderboardData.groups}
              groupIcon={groupIcon}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </section>
    </div>
  );
}