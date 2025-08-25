"use client";

import { useState } from "react";
import quizData from "@/data/quiz-question.json";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizCard from "@/components/quiz/QuizCard";
import QuizNavigation from "@/components/quiz/QuizNavigation";

export default function QuizPage() {
  const [current, setCurrent] = useState(2);
  const [selected, setSelected] = useState(1);
  const [marked, setMarked] = useState(false);

  const question = quizData.questions[current];

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <QuizHeader
        title="Matematika Dasar"
        subtitle="Quiz - Aljabar Linear"
        time="15:27"
      />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <QuizProgress current={current} total={quizData.questions.length} />
        <QuizCard
          title="Matematika Dasar"
          subtitle="Quiz - Aljabar Linear"
          level="Mudah"
          levelColor="green"
          questions={quizData.questions.length}
          time={45}
          progress={Math.round(((current + 1) / quizData.questions.length) * 100)}
          status="progress"
          question={question.question}
          options={question.options}
          selected={selected}
          setSelected={setSelected}
        />
        <QuizNavigation
          current={current}
          total={quizData.questions.length}
          marked={marked}
          setMarked={setMarked}
          onPrev={() => setCurrent((c) => Math.max(0, c - 1))}
          onNext={() => setCurrent((c) => Math.min(quizData.questions.length - 1, c + 1))}
        />
      </main>
    </div>
  );
}