import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FaStickyNote, FaCheckCircle } from "react-icons/fa";

export default function TipsSection() {
  return (
    <aside className="bg-white rounded-xl shadow-sm p-6 h-fit">
      <h3 className="font-semibold text-gray-900 mb-4 text-base flex items-center gap-2">
        <MdOutlineTipsAndUpdates className="text-[#2563eb] text-xl" />
        Tips Upload
      </h3>
      <ul className="space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <BsExclamationCircleFill className="text-yellow-400 mt-0.5" />
          <span>Pastikan file berisi materi yang jelas dan terstruktur</span>
        </li>
        <li className="flex items-start gap-3">
          <FaStickyNote className="text-blue-400 mt-0.5" />
          <span>Format PDF akan memberikan hasil terbaik</span>
        </li>
        <li className="flex items-start gap-3">
          <FaCheckCircle className="text-green-500 mt-0.5" />
          <span>AI akan menganalisis dan membuat quiz otomatis</span>
        </li>
      </ul>
    </aside>
  );
}
