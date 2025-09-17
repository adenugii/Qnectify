import { FaClipboardList, FaCheckCircle, FaChartLine, FaFire } from "react-icons/fa";

const stats = [
  {
    icon: <FaClipboardList size={32} className="text-[#6366f1]" />,
    value: 6,
    label: "Total Quizzes",
  },
  {
    icon: <FaCheckCircle size={32} className="text-[#22c55e]" />,
    value: 5,
    label: "Passed",
  },
  {
    icon: <FaChartLine size={32} className="text-[#a78bfa]" />,
    value: 80.5,
    label: "Average Score",
  },
  {
    icon: <FaFire size={32} className="text-[#f59e42]" />,
    value: 3,
    label: "Current Streak",
  },
];

export default function PerformanceOverviewSection() {
  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Performance Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div>{s.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{s.value}</div>
              <div className="text-gray-500 text-sm text-center">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
