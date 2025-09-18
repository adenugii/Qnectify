"use client";
import { useEffect, useState } from "react";
import { getQuizAttempts, getQuizById } from "@/services/quizservices";
import { FaCalculator } from "react-icons/fa6";

export default function QuizHistory({ token }: { token?: string })  {
  const [attempts, setAttempts] = useState<any[]>([]);
  const [quizMeta, setQuizMeta] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      setLoading(true);
      // Gunakan token dari props jika ada, jangan ambil dari localStorage
      let res: any = {};
      try {
        res = await getQuizAttempts(token || "");
      } catch {
        res = { attempts: [] };
      }
      // Filter hanya attempt dengan skor tertinggi untuk setiap quiz_id
      const bestAttempts: Record<string, any> = {};
      (res.attempts || []).forEach((a: any) => {
        if (!bestAttempts[a.quiz_id] || a.score > bestAttempts[a.quiz_id].score) {
          bestAttempts[a.quiz_id] = a;
        }
      });
      // Ambil 3 attempt terbaru dari bestAttempts
      const sorted = Object.values(bestAttempts).sort((a: any, b: any) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime());
      setAttempts(sorted.slice(0, 3));
      // Fetch meta quiz
      const meta: Record<string, any> = {};
      await Promise.all(sorted.slice(0, 3).map(async (a: any) => {
        const quiz = await getQuizById(token || "", a.quiz_id);
        if (quiz) meta[a.quiz_id] = quiz;
      }));
      setQuizMeta(meta);
      setLoading(false);
    }
    fetchHistory();
  }, [token]);

  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">
        Quiz History
      </h3>
      <div className="flex flex-col gap-4">
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : attempts.length === 0 ? (
          <div className="text-gray-400">Belum ada riwayat quiz.</div>
        ) : attempts.map((a, i) => {
          const meta = quizMeta[a.quiz_id] || {};
          const percent = a.total_questions > 0 ? (a.score / a.total_questions) * 100 : 0;
          const lulus = percent >= 50;
          return (
            <div key={a.id} className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <FaCalculator className="text-blue-500 text-xl" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 text-sm">
                  {meta.title || "Quiz"}
                </div>
                <div className="text-xs text-gray-400">{new Date(a.submitted_at).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className={`font-bold text-lg leading-none ${lulus ? "text-green-500" : "text-red-500"}`}>
                  {a.score}/{a.total_questions}
                </span>
                <span className="text-xs text-gray-400 font-semibold">
                  {lulus ? "Lulus" : "Tidak Lulus"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}