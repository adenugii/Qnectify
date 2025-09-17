/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
// filepath: c:\Data\Project\quizzo\src\components\leaderboard\LeaderboardContent.tsx
import { useState } from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardTabs from "./LeaderboardTabs";
import LeaderboardGlobal from "./LeaderboardGlobal";
import LeaderboardGroup from "./LeaderboardGroup";

type TabType = "global" | "group";

export default function LeaderboardContent({
  leaderboardData,
  groupLeaderboardData,
}: {
  leaderboardData: { leaderboard: any[] };
  groupLeaderboardData: { leaderboard: any[] };
}) {
  const [tab, setTab] = useState<TabType>("global");
  const [page, setPage] = useState(1);

  return (
    <section className="flex-1 flex flex-col gap-6">
      <LeaderboardHeader />
      <div className="bg-white rounded-xl shadow-sm p-0">
        <LeaderboardTabs tab={tab} setTab={setTab} />
        {tab === "global" ? (
          <LeaderboardGlobal
            users={leaderboardData.leaderboard}
            page={page}
            setPage={setPage}
          />
        ) : (
          <LeaderboardGroup
            groups={groupLeaderboardData.leaderboard}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
}
