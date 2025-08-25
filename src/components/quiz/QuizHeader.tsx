import { FaChevronLeft, FaRegClock } from "react-icons/fa";

interface QuizHeaderProps {
  title: string;
  subtitle: string;
  time: string;
}

export default function QuizHeader({ title, subtitle, time }: QuizHeaderProps) {
  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-[#2563eb] text-xl">
            <FaChevronLeft />
          </button>
          <div>
            <div className="font-bold text-lg md:text-xl text-gray-900">
              {title}
            </div>
            <div className="text-gray-500 text-sm">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="text-red-400" />
          <span className="bg-red-100 text-red-500 text-sm font-semibold px-3 py-1 rounded-lg">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}