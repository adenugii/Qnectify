"use client";
import { useState } from "react";
import AccountRecommendation from "@/components/onboarding/AccountRecommendation";

export default function RekomendasiAkunPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <AccountRecommendation onSuccess={() => setShowSuccess(true)} />
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-bold text-lg mb-2 text-center">Selamat!</div>
            <div className="text-gray-600 text-center mb-4">
              Anda telah berhasil membuat akun.
            </div>
            <button
              className="w-full bg-[#2563eb] text-white rounded-md py-2 font-semibold hover:bg-[#174bbd] transition"
              onClick={() => (window.location.href = "/")}
            >
              Lanjut ke Beranda
            </button>
          </div>
        </div>
      )}
    </>
  );
}
