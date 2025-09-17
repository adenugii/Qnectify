/* eslint-disable prefer-const */
"use client";
import { useState, useMemo } from "react";
import { userRekomendasi, UserRekomendasi } from "@/data/user";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardState = {
  user: UserRekomendasi;
  status: "idle" | "following" | "removing";
};

export default function AccountRecommendation({ onSuccess }: { onSuccess?: () => void }) {
  const [cards, setCards] = useState<CardState[]>(
    userRekomendasi.slice(0, 6).map((user) => ({ user, status: "idle" }))
  );
  const [pool, setPool] = useState<UserRekomendasi[]>(userRekomendasi.slice(6));
  const [followed, setFollowed] = useState<UserRekomendasi[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredCards = useMemo(() => {
    if (!search) return cards;
    return cards.filter(
      (c) =>
        c.user.username.toLowerCase().includes(search.toLowerCase()) ||
        c.user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, cards]);

  const handleFollow = (userId: string) => {
    setCards((prev) =>
      prev.map((c) =>
        c.user.id === userId ? { ...c, status: "following" } : c
      )
    );
    setTimeout(() => {
      setCards((prev) => {
        const idx = prev.findIndex((c) => c.user.id === userId);
        if (idx === -1) return prev;
        // Mark as removing for animation
        const newCards = [...prev];
        newCards[idx] = { ...newCards[idx], status: "removing" };
        return newCards;
      });
      setTimeout(() => {
        setCards((prev) => {
          const idx = prev.findIndex((c) => c.user.id === userId);
          if (idx === -1) return prev;
          const newCards = [...prev];
          // Remove the card
          newCards.splice(idx, 1);
          // Add new user from pool if available
          if (pool.length > 0) {
            const [newUser, ...rest] = pool;
            setPool(rest);
            newCards.splice(idx, 0, { user: newUser, status: "idle" });
          }
          return newCards;
        });
        // Add to followed
        const user = cards.find((c) => c.user.id === userId)?.user;
        if (user) setFollowed((prev) => [...prev, user]);
      }, 350); // match animation duration
    }, 900); // show "Followed" for 0.9s
  };

  const handleNext = () => {
    if (onSuccess) onSuccess();
    else router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf1ff]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <div className="mb-2 flex items-center gap-2 text-xl font-semibold">
          <span>✨</span>
          <span>Rekomendasi Akun untuk Kamu</span>
        </div>
        <div className="text-gray-500 text-sm mb-4">
          Ikuti minimal 5 akun agar pengalaman belajarmu lebih seru.
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Cari akun lain"
            className="w-full rounded-md border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {filteredCards.map((card, idx) => (
            <div
              key={card.user.id}
              className={`
                bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center
                shadow-lg border border-gray-100 relative
                transition-all duration-300
                ${card.status === "removing" ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}
                ${card.status === "following" ? "ring-2 ring-[#2563eb]/30" : ""}
              `}
              style={{ minHeight: 220 }}
            >
              <Image
                src={card.user.avatar}
                alt={card.user.name}
                width={56}
                height={56}
                className="rounded-full mb-2 object-cover"
              />
              <div className="font-semibold text-gray-800">{card.user.username}</div>
              <span
                className={`text-xs px-2 py-1 rounded-full mt-1 mb-3 text-white ${card.user.badgeColor}`}
              >
                {card.user.badge}
              </span>
              {card.status === "following" ? (
                <button
                  className="w-full bg-green-400 text-white rounded-md py-2 font-semibold transition-all duration-300 cursor-default"
                  disabled
                >
                  <span className="animate-pulse">Followed</span>
                </button>
              ) : (
                <button
                  className="w-full bg-[#2563eb] text-white rounded-md py-2 font-semibold hover:bg-[#174bbd] transition"
                  onClick={() => handleFollow(card.user.id)}
                  disabled={
                    followed.some((u) => u.id === card.user.id) ||
                    card.status !== "idle"
                  }
                >
                  + Follow
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mb-2 text-sm text-gray-700 flex justify-between">
          {followed.length >= 5 ? (
            <span className="font-bold text-green-600">
              Anda sudah mengikuti {followed.length} orang
            </span>
          ) : (
            <>
              <span>Sudah mengikuti:</span>
              <span className="font-bold text-[#2563eb]">{followed.length}/5 akun</span>
            </>
          )}
        </div>
        <div className="w-full h-2 bg-gray-100 rounded mb-4 overflow-hidden">
          <div
            className={`h-full transition-all ${followed.length >= 5 ? "bg-green-500" : "bg-[#2563eb]"}`}
            style={{
              width: followed.length >= 5
                ? "100%"
                : `${(followed.length / 5) * 100}%`
            }}
          />
        </div>
        <button
          className={`w-full rounded-md py-2 font-semibold transition ${
            followed.length >= 5
              ? "bg-[#2563eb] text-white hover:bg-[#174bbd] cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={followed.length < 5}
          onClick={handleNext}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

