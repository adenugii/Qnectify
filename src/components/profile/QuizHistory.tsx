import { FaCalculator, FaFlask, FaGlobe } from "react-icons/fa6";

export default function QuizHistory() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">
        Quiz History
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 rounded-lg p-3">
            <FaCalculator className="text-blue-500 text-xl" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">
              Mathematics Quiz
            </div>
            <div className="text-xs text-gray-400">January 15, 2024</div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-green-500 text-lg leading-none">
              95/100
            </span>
            <span className="text-xs text-gray-400 font-semibold">
              +250 XP
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 rounded-lg p-3">
            <FaFlask className="text-blue-500 text-xl" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">
              Science Quiz
            </div>
            <div className="text-xs text-gray-400">January 14, 2024</div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-green-500 text-lg leading-none">
              88/100
            </span>
            <span className="text-xs text-gray-400 font-semibold">
              +220 XP
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 rounded-lg p-3">
            <FaGlobe className="text-blue-500 text-xl" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">
              Geography Quiz
            </div>
            <div className="text-xs text-gray-400">January 13, 2024</div>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-yellow-500 text-lg leading-none">
              72/100
            </span>
            <span className="text-xs text-gray-400 font-semibold">
              +180 XP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}