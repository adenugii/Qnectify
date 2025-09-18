"use client";
import { useState, useEffect } from "react";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizCard from "@/components/quiz/QuizCard";
import QuizNavigation from "@/components/quiz/QuizNavigation";
import Footer from "@/components/common/Footer";
import { useRouter } from "next/navigation";
import { getQuizById, attemptQuiz, getQuizAttempts } from "@/services/quizservices";

export default function QuizSoalClient({ quizId, soalId, token }: { quizId: string; soalId: string; token: string }) {
  const router = useRouter();
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number>(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    // Ambil answers dari localStorage jika ada
    const storageKey = `quiz-answers-${quizId}`;
    const saved = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch {}
    }
    async function fetchQuiz() {
      setLoading(true);
      const data = await getQuizById(token, quizId);
      setQuiz(data);
      // Inisialisasi answers hanya jika belum pernah diisi
      if (data && data.questions) {
        setAnswers((prev) => {
          if (Object.keys(prev).length === 0) {
            const initial: Record<string, string> = {};
            data.questions.forEach((q: any) => {
              initial[q.id] = "";
            });
            // Simpan ke localStorage juga
            if (typeof window !== 'undefined') localStorage.setItem(storageKey, JSON.stringify(initial));
            return initial;
          }
          return prev;
        });
      }
      setLoading(false);
    }
    fetchQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId, token]);

  useEffect(() => {
    // Set selected sesuai jawaban yang sudah ada di answers saat navigasi soal
    if (quiz && question && answers) {
      const idx = question.options.findIndex((opt: any) => opt.id === answers[question.id]);
      setSelected(idx);         
    } else {
      setSelected(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soalId, quiz]); // Hapus answers dari dependency agar tidak error

  if (loading) {
    return <div className="text-center mt-10 text-[#2563eb]">Loading...</div>;
  }
  if (!quiz) {
    return <div className="text-center mt-10 text-red-500">Quiz tidak ditemukan.</div>;
  }
  const current = quiz.questions.findIndex((q: any) => q.id === soalId);
  const total = quiz.questions.length;
  const question = quiz.questions[current];

  // Progress bar: mulai dari 0% di soal pertama, 90% di soal terakhir
  const progress = Math.floor((current / total) * 100);

  // Navigasi soal
  const handlePrev = () => {
    if (current > 0) {
      const prevId = quiz.questions[current - 1].id;
      router.push(`/quiz-maker/${quizId}/${prevId}`);
    }
  };
  const handleNext = () => {
    if (current < total - 1) {
      const nextId = quiz.questions[current + 1].id;
      router.push(`/quiz-maker/${quizId}/${nextId}`);
    }
  };
  const handleSubmit = async () => {
    // Cek apakah semua soal sudah dijawab
    const allAnswered = quiz.questions.every((q: any) => answers[q.id] && answers[q.id] !== "");
    if (!allAnswered) {
      alert("Harap jawab semua soal sebelum mengumpulkan quiz!");
      return;
    }
    setShowResult(true);
    try {
      await attemptQuiz(token, quizId, answers);
      // Hapus jawaban dari localStorage setelah submit
      const storageKey = `quiz-answers-${quizId}`;
      if (typeof window !== 'undefined') localStorage.removeItem(storageKey);
      const res = await getQuizAttempts(token, quizId);
      setResult(res);
    } catch (e) {
      setResult({ error: "Gagal submit atau mengambil hasil quiz" });
    }
  };

  // Set jawaban ketika memilih opsi
  const handleSelect = (idx: number) => {
    setSelected(idx);
    setAnswers((prev) => {
      const copy = { ...prev };
      copy[question.id] = question.options[idx].id;
      // Simpan ke localStorage setiap kali user memilih jawaban
      const storageKey = `quiz-answers-${quizId}`;
      if (typeof window !== 'undefined') localStorage.setItem(storageKey, JSON.stringify(copy));
      return copy;
    });
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full flex flex-col items-center">
          <div className="text-3xl mb-2 text-[#2563eb] font-bold">Hasil Quiz</div>
          {result && result.attempts && result.attempts.length > 0 ? (
            <>
              <div className="text-lg mb-4">Skor kamu: <span className="font-bold">{result.attempts[0].score} / {result.attempts[0].total_questions}</span></div>
              <div className="text-2xl font-bold text-green-600 mb-4">{Math.round((result.attempts[0].score / result.attempts[0].total_questions) * 100)}%</div>
              <div className="text-xs text-gray-500 mb-2">Dikumpulkan pada: {new Date(result.attempts[0].submitted_at).toLocaleString("id-ID")}</div>
            </>
          ) : (
            <div className="text-red-500 mb-4">{result?.error || "Gagal mengambil hasil quiz."}</div>
          )}
          <button className="bg-[#2563eb] text-white rounded-md px-6 py-2 font-semibold hover:bg-[#174bbd] transition" onClick={() => router.push("/")}>Kembali ke Beranda</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <QuizHeader
        title={quiz.title}
        subtitle={quiz.description}
        time={quiz.time_limit?.String ? quiz.time_limit.String + " Menit" : "45 Menit"}
      />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <QuizProgress current={current} total={total} />
        <QuizCard
          title={quiz.title}
          subtitle={quiz.description}
          level={quiz.difficulty === "easy" ? "Mudah" : quiz.difficulty === "medium" ? "Sedang" : "Sulit"}
          levelColor={quiz.difficulty === "easy" ? "green" : quiz.difficulty === "medium" ? "yellow" : "red"}
          questions={total}
          time={Number(quiz.time_limit?.String) || 45}
          progress={progress}
          status="progress"
          question={question.question_text}
          options={question.options.map((opt: any) => opt.content)}
          selected={question.id in answers ? question.options.findIndex((opt: any) => opt.id === answers[question.id]) : -1}
          setSelected={handleSelect}
        />
        <QuizNavigation
          current={current}
          total={total}
          marked={false}
          setMarked={() => {}}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        <div className="flex justify-end mt-8">
          {current === total - 1 && (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              onClick={handleSubmit}
            >
              Kumpulkan
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
