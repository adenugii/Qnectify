import Footer from "@/components/common/Footer";
import LeaderboardLayout from "@/components/leaderboard/LeaderboardLayout";
import { getUserLeaderboard, getGroupLeaderboard } from "@/services/leaderboardservices";

export default async function LeaderboardPage() {
  const userLeaderboardRes = await getUserLeaderboard();
  const groupLeaderboardRes = await getGroupLeaderboard();

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      <LeaderboardLayout
        leaderboardData={userLeaderboardRes}
        groupLeaderboardData={groupLeaderboardRes}
      />
      <Footer />
    </div>
  );
}