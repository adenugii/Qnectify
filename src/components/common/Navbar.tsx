import Link from "next/link";
import { cookies } from "next/headers";
import { getProfile } from "@/services/userservices";
import Image from "next/image";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  // Ambil token dari cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  // Fetch profile user
  const user = token ? await getProfile(token) : null;
  return <NavbarClient user={user} />;
}
