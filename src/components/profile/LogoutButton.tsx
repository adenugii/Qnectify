"use client";
import { logout } from "@/services/authservices";
import { useRouter } from "next/navigation";

export default function LogoutButton({ token }: { token?: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded bg-[#2563eb] text-white font-semibold hover:bg-[#174bbd]"
    >
      Logout
    </button>
  );
}
