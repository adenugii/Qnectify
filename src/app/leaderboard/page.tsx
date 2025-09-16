"use client";

import { useState } from "react";
import leaderboardData from "@/data/leaderboard.json";
import groupLeaderboardData from "@/data/group-leaderboard.json";
import LeaderboardSidebar from "@/components/leaderboard/LeaderboardSidebar";
import LeaderboardTabs from "@/components/leaderboard/LeaderboardTabs";
import LeaderboardGlobal from "@/components/leaderboard/LeaderboardGlobal";
import LeaderboardGroup from "@/components/leaderboard/LeaderboardGroup";
import Footer from "@/components/common/Footer";

type TabType = "global" | "group";

export default function LeaderboardPage() {
  const [tab, setTab] = useState<TabType>("global");
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      <div className="flex flex-col md:flex-row gap-6 px-2 md:px-0 py-8 flex-1">
        <LeaderboardSidebar />
        <section className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-yellow-400 text-2xl">🏆</span>
            <h1 className="font-bold text-2xl text-gray-900">Leaderboard</h1>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-0">
            <LeaderboardTabs tab={tab} setTab={setTab} />
            {tab === "global" ? (
              <LeaderboardGlobal
                users={leaderboardData.users}
                page={page}
                setPage={setPage}
              />
            ) : (
              <LeaderboardGroup
                groups={groupLeaderboardData.groups}
                page={page}
                setPage={setPage}
              />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}