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
  const groupRes = await getAllGroups();

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <StudyGroupHeader />
        <StudyGroupCreateButton token={token} />
        <StudyGroupList groups={groupRes.recommendations} />
      </main>
      <Footer />
    </div>
  );
}