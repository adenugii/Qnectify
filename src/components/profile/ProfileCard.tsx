export default function ProfileCard() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6">
      <div>
        <img
          src="/profile-demo.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-xl text-gray-900 mb-1">
          Rafi Fachrul Nugroho
        </h2>
        <div className="text-gray-500 text-sm mb-2">
          Level 15 • Quiz Master
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-[#2563eb] text-white text-xs font-bold rounded-full px-2 py-0.5">
            15
          </span>
          <span className="text-xs text-gray-500">XP Progress</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-[#2563eb] rounded-full"
            style={{ width: "81.6%" }}
          />
        </div>
        <div className="flex justify-end text-xs text-[#2563eb] font-semibold mt-1">
          2,450 / 3,000 XP
        </div>
      </div>
    </section>
  );
}