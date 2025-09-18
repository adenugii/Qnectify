import QuizSoalClient from "@/components/quiz/QuizSoalClient";
import { cookies } from "next/headers";

export default function QuizSoalPageServer({ params }: { params: { "quiz-id": string; soal: string } }) {
  const cookieStore = cookies();
  // @ts-expect-error
  const token = typeof cookieStore.get === "function" ? cookieStore.get("token")?.value || "" : "";
  const quizId = params["quiz-id"];
  const soalId = params["soal"];
  return <QuizSoalClient quizId={quizId} soalId={soalId} token={token} />;
}