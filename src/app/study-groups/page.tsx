import Navbar from "@/components/Navbar";
import StudyGroupCard, { StudyGroupCardProps } from "@/components/StudyGroupCard";
import studyGroups from "@/data/study-groups.json"; // Import data dari file JSON

export default function StudyGroupsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Navbar */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Judul & Deskripsi */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Study Groups
          </h1>
          <p className="text-gray-500 text-base">
            Bergabung dengan teman untuk belajar bersama
          </p>
        </div>

        {/* Tombol Buat Grup */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1e40af] transition text-white font-semibold px-5 py-2 rounded-lg text-base shadow">
            <span className="text-xl leading-none">+</span>
            Buat Grup Belajar
          </button>
        </div>

        {/* Daftar Study Groups */}
        <div className="grid md:grid-cols-3 gap-6">
          {(studyGroups as StudyGroupCardProps[]).map((group, idx) => (
            <StudyGroupCard key={group.title + idx} {...group} />
          ))}
        </div>
      </main>
    </div>
  );
}