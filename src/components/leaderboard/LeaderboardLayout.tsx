// filepath: c:\Data\Project\quizzo\src\components\leaderboard\LeaderboardLayout.tsx
import LeaderboardSidebar from "./LeaderboardSidebar";
import LeaderboardContent from "./LeaderboardContent";

export default function LeaderboardLayout({
  leaderboardData,
  groupLeaderboardData,
}: {
  leaderboardData: { leaderboard: any[] };
  groupLeaderboardData: { leaderboard: any[] };
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-2 md:px-0 py-8 flex-1">
      <LeaderboardSidebar />
      <LeaderboardContent
        leaderboardData={leaderboardData}
        groupLeaderboardData={groupLeaderboardData}
      />
    </div>
  );
}
