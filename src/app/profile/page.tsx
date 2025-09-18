import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ProfileCard from "@/components/profile/ProfileCard";

import { cookies } from "next/headers";
import { getProfile } from "@/services/userservices";
import LogoutButton from "@/components/profile/LogoutButton";
import Badges from "@/components/profile/Badges";
import QuizHistory from "@/components/profile/QuizHistory";
import ProfileLeaderboard from "@/components/profile/ProfileLeaderboard";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value || "";
  const user = await getProfile(token);

  return (

       <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Kiri: Profil, Badge, History */}
        <div className="flex-1 flex flex-col gap-6">
          <ProfileCard user={user} />

          <Badges />
          <QuizHistory token={token}  />
        </div>
        {/* Kanan: Leaderboard */}
        <aside className="w-full md:w-[340px] flex-shrink-0">
          <ProfileLeaderboard />
          <LogoutButton token={token} />

        </aside>
      </main>
      <Footer />
    </div>
  );
}