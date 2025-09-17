import Footer from "@/components/common/Footer";
import GroupDetailLayout from "@/components/group-detail/GroupDetailLayout";
import { getGroupById } from "@/services/groupservices";
import { cookies } from "next/headers";

export default async function GroupDetailPage({ searchParams }: { searchParams: { id: string } }) {
  const { id: groupId } = await searchParams;
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value || "";

  // Debug: cek id dan token
  console.log("GroupDetailPage id:", groupId, "token:", token);

  const groupRes = groupId ? await getGroupById(groupId, token) : null;
  const groupData = groupRes?.study_group || null;

  // Debug: cek data yang didapat dari API
  console.log("Group detail API response:", groupRes);

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <GroupDetailLayout group={groupData} />
      <Footer />
    </div>
  );
}