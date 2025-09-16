import QuizResultHeader from "@/components/quiz-result/QuizResultHeader";
import QuizScoreSummary from "@/components/quiz-result/QuizScoreSummary";
import QuizResultActions from "@/components/quiz-result/QuizResultActions";
import QuizResultDiscussion from "@/components/quiz-result/QuizResultDiscussion";
import Navbar from "@/components/quiz/QuizHeader";
import Footer from "@/components/common/Footer";
import resultData from "@/data/quiz-result.json";

export default function QuizResultPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col">
      <Navbar
        title={resultData.title}
        subtitle={resultData.subtitle}
        time={resultData.time}
      />
      <main className="max-w-4xl mx-auto px-4 py-8 flex-1">
        <QuizScoreSummary
          score={resultData.score}
          accuracy={resultData.accuracy}
          correct={resultData.correct}
          wrong={resultData.wrong}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <QuizResultDiscussion discussions={resultData.discussions} />
          </div>
          <div>
            <QuizResultActions />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}