"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginAuthLayout from "@/components/auth/LoginAuthLayout";
import { signin } from "@/services/authservices";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  // Handler to be passed to LoginAuthLayout
  const handleLogin = async ({
    email,
    password,
    rememberMe,
    setError,
    setLoading,
  }: {
    email: string;
    password: string;
    rememberMe: boolean;
    setError: (msg: string | null) => void;
    setLoading: (v: boolean) => void;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signin({ email, password });
      // Simpan token di cookie agar bisa diakses SSR
      Cookies.set("token", data.token, {
        expires: rememberMe ? 7 : undefined,
        path: "/",
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      });
      if (data.user?.username) {
        Cookies.set("username", data.user.username);
      }
      setSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } catch (err: any) {
      setError(err.message || "Gagal login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoginAuthLayout onLogin={handleLogin} />
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-bold text-lg mb-2 text-center">Login Berhasil!</div>
            <div className="text-gray-600 text-center mb-2">
              Anda akan diarahkan ke halaman utama...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
