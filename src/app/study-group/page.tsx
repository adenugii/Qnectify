import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StudyGroupList from "@/components/StudyGroup/StudyGroupList";
import StudyGroupHeader from "@/components/StudyGroup/StudyGroupHeader";
import StudyGroupCreateButton from "@/components/StudyGroup/StudyGroupCreateButton";
import { cookies } from "next/headers";
import { getAllGroups } from "@/services/groupservices";

export default async function StudyGroupsPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value || "";
  const groupsRes = await getAllGroups();
  const studyGroups = groupsRes.study_groups || [];

  // Mapping ke StudyGroupCardProps
  const mappedGroups = studyGroups.map((group: any, idx: number) => ({
    title: group.name,
    description: group.description,
    memberCount: group.member_count,
    maxMember: group.max_member,
    isPrivate: group.is_private,
    inviteCode: group.invite_code,
    // icon: bisa di-random atau default, misal:
    icon: ["math", "physics", "english"][idx % 3] as "math" | "physics" | "english",
    // tambahkan properti lain sesuai kebutuhan StudyGroupCard
  }));

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <StudyGroupHeader />
        <StudyGroupCreateButton token={token} />
        <StudyGroupList groups={mappedGroups} />
      </main>
      <Footer />
    </div>
  );
}