import Navbar from "@/components/common/Navbar";
import ProfileCard from "@/components/profile/ProfileCard";
import Badges from "@/components/profile/Badges";
import QuizHistory from "@/components/profile/QuizHistory";
import ProfileLeaderboard from "@/components/profile/ProfileLeaderboard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Kiri: Profil, Badge, History */}
        <div className="flex-1 flex flex-col gap-6">
          <ProfileCard />
          <Badges />
          <QuizHistory />
        </div>
        {/* Kanan: Leaderboard */}
        <aside className="w-full md:w-[340px] flex-shrink-0">
          <ProfileLeaderboard />
        </aside>
      </main>
    </div>
  );
}