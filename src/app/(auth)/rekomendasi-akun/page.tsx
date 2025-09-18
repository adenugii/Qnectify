import { cookies } from "next/headers";
import { getUserRecommendations } from "@/services/userservices";
import AccountRecommendation from "@/components/onboarding/AccountRecommendation";

export default async function RekomendasiAkunPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value || "";
  console.log("[SSR PAGE] Token rekomendasi-akun:", token, typeof token);
  const users = await getUserRecommendations(token);
  return <AccountRecommendation users={users} token={token} />;
}
