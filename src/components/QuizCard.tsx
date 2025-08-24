import React from "react";

// Props untuk QuizCard
export interface QuizCardProps {
  title: string;
  subtitle: string;
  level: "Mudah" | "Sedang" | "Sulit";
  levelColor: "green" | "yellow" | "red";
  questions: number;
  time: number;
  progress: number; // 0-100
  status: "progress" | "done" | "not_started";
}

// Badge warna sesuai level
const levelBadge = {
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-500",
};

export default function QuizCard({
  title,
  subtitle,
  level,
  levelColor,
  questions,
  time,
  progress,
  status,
}: QuizCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col gap-3">
      {/* Header: Judul & Badge */}
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${levelBadge[levelColor]}`}>
          {level}
        </span>
      </div>
      <span className="text-xs text-gray-400 mb-1">{subtitle}</span>
      {/* Info Soal & Waktu */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-1">
        <span>
          <span className="font-semibold">{questions} soal</span>
        </span>
        <span>
          <span className="font-semibold">{time} menit</span>
        </span>
      </div>
      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500">Progress:</span>
          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              progress === 100
                ? "bg-green-500"
                : "bg-[#2563eb]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Tombol Aksi */}
      {status === "done" ? (
        <button
          className="w-full py-2 rounded-md bg-gray-100 text-gray-400 font-semibold text-base flex items-center justify-center gap-2 cursor-default"
          disabled
        >
          <svg width="18" height="18" fill="none" className="inline-block">
            <circle cx="9" cy="9" r="8" stroke="#22C55E" strokeWidth="2" />
            <path d="M6 9.5L8 11.5L12 7.5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Selesai
        </button>
      ) : status === "progress" ? (
        <button className="w-full py-2 rounded-md bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition">
          Lanjutkan Quiz
        </button>
      ) : (
        <button className="w-full py-2 rounded-md bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition">
          Mulai Quiz
        </button>
      )}
    </div>
  );
}