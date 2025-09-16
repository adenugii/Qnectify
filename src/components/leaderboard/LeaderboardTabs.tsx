import { FaGlobe, FaUsers } from "react-icons/fa";

interface LeaderboardTabsProps {
  tab: "global" | "group";
  setTab: (tab: "global" | "group") => void;
}

export default function LeaderboardTabs({ tab, setTab }: LeaderboardTabsProps) {
  return (
    <div className="flex border-b bg-white rounded-t-xl">
      <button
        className={`flex-1 py-4 font-semibold text-base border-b-2 transition ${
          tab === "global"
            ? "text-[#2563eb] border-[#2563eb] bg-blue-50"
            : "text-gray-500 border-transparent hover:text-[#2563eb]"
        }`}
        onClick={() => setTab("global")}
      >
        <span className="inline-flex items-center gap-2">
          <FaGlobe /> Global Leaderboard
        </span>
      </button>
      <button
        className={`flex-1 py-4 font-semibold text-base border-b-2 transition ${
          tab === "group"
            ? "text-[#2563eb] border-[#2563eb] bg-blue-50"
            : "text-gray-500 border-transparent hover:text-[#2563eb]"
        }`}
        onClick={() => setTab("group")}
      >
        <span className="inline-flex items-center gap-2">
          <FaUsers /> Study Group
        </span>
      </button>
    </div>
  );
}