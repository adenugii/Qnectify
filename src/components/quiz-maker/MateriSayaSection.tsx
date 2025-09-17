export default function MateriSayaSection() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Materi Saya</h2>
        <a
          href="#"
          className="text-sm text-[#2563eb] hover:underline font-medium"
        >
          lihat selengkapnya
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-red-400">
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">Sempurna</span>
            <span className="text-xs text-gray-400 ml-auto">Uploaded 2 jam lalu</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-base">Matematika Dasar</h3>
          <p className="text-sm text-gray-500">Materi tentang aljabar dan geometri dasar untuk siswa SMP</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">15 soal tersedia</span>
            <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">Mulai Quiz</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-yellow-400">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">bagus</span>
            <span className="text-xs text-gray-400 ml-auto">Uploaded 1 hari lalu</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-base">Sejarah Indonesia</h3>
          <p className="text-sm text-gray-500">Materi tentang kemerdekaan Indonesia dan perjuangan pahlawan</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">15 soal tersedia</span>
            <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">Mulai Quiz</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-green-400">
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">Sempurna</span>
            <span className="text-xs text-gray-400 ml-auto">Uploaded 3 hari lalu</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-base">Catatan Fisika</h3>
          <p className="text-sm text-gray-500">Catatan tentang hukum Newton dan kinematika</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">12 soal tersedia</span>
            <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">Mulai Quiz</button>
          </div>
        </div>
      </div>
    </section>
  );
}
