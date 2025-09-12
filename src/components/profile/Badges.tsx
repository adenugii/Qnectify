import { FaTrophy, FaFire, FaStar, FaClock } from "react-icons/fa";

export default function Badges() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">
        Badges Achieved
      </h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center bg-yellow-100 rounded-lg px-7 py-5">
          <FaTrophy className="text-yellow-400 text-2xl mb-2" />
          <span className="font-semibold text-sm text-gray-700">First Win</span>
        </div>
        <div className="flex flex-col items-center bg-blue-100 rounded-lg px-7 py-5">
          <FaFire className="text-blue-500 text-2xl mb-2" />
          <span className="font-semibold text-sm text-gray-700">10 Streak</span>
        </div>
        <div className="flex flex-col items-center bg-purple-100 rounded-lg px-7 py-5">
          <FaStar className="text-purple-500 text-2xl mb-2" />
          <span className="font-semibold text-sm text-gray-700">Perfect Score</span>
        </div>
        <div className="flex flex-col items-center bg-green-100 rounded-lg px-7 py-5">
          <FaClock className="text-green-500 text-2xl mb-2" />
          <span className="font-semibold text-sm text-gray-700">Speed Demon</span>
        </div>
      </div>
    </section>
  );
}