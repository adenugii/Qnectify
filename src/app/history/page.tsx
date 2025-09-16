import Navbar from "@/components/common/Navbar";
import PerformanceOverviewSection from "@/components/history/PerformanceOverviewSection";
import QuizHistorySection from "@/components/history/QuizHistorySection";


export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
        <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
         <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Quiz History
          </h1>
          <p className="text-gray-500 text-base">
            lacak perkembanganmu dan hasil dari quiz yang sudah kamu kerjakan
          </p>
        </div>
        <QuizHistorySection />
        <PerformanceOverviewSection />
      </div>
    </div>
  );
}
