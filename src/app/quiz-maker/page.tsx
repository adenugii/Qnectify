import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaCloudUploadAlt, FaCheckCircle, FaStickyNote } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { BsExclamationCircleFill } from "react-icons/bs";

// Halaman Upload Materi
export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Judul & Deskripsi */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Upload Materi Belajarmu
          </h1>
          <p className="text-gray-500 text-base">
            Upload file PDF, DOCX atau tulis catatan untuk membuat kuiz dengan AI
          </p>
        </div>

        {/* Grid utama: Form upload & Tips */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Form Upload */}
          <section className="md:col-span-2 bg-white rounded-xl shadow-sm p-6">
            {/* Upload Box */}
            <div className="mb-5">
              <h2 className="font-semibold text-gray-900 mb-3 text-base">
                Upload Materi
              </h2>
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg py-8 cursor-pointer transition hover:border-[#2563eb] bg-[#fafbfc]"
              >
                <FaCloudUploadAlt className="text-4xl text-gray-400 mb-2" />
                <span className="text-gray-500 text-base mb-1">
                  Drag & drop file atau klik untuk upload
                </span>
                <span className="text-xs text-gray-400 mb-3">
                  Mendukung PDF, DOCX (Maks. 10MB)
                </span>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.docx"
                  className="hidden"
                />
                <button
                  type="button"
                  className="mt-2 px-5 py-2 bg-[#2563eb] text-white rounded-md font-medium text-sm shadow hover:bg-[#1e40af] transition"
                >
                  Pilih File
                </button>
              </label>
            </div>

            {/* Atau Tulis Catatan */}
            <div className="mb-5">
              <h2 className="font-semibold text-gray-900 mb-2 text-base">
                Atau Tulis Catatan
              </h2>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-lg p-3 text-gray-900 text-sm bg-[#fafbfc] focus:outline-none focus:border-[#2563eb] resize-none"
                placeholder="Tulis materi atau catatan belajar di sini..."
              />
            </div>

            {/* Pilihan tingkat quiz */}
            <div className="flex items-center gap-6 mb-5">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="accent-[#2563eb] rounded"
                  name="easy"
                />
                Buat quiz tingkat mudah
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="accent-[#2563eb] rounded"
                  name="hard"
                />
                Buat quiz tingkat sulit
              </label>
            </div>

            {/* Tombol Generate */}
            <button
              type="button"
              className="w-full py-3 bg-[#2563eb] text-white rounded-lg font-semibold text-base shadow hover:bg-[#1e40af] transition"
            >
              Generate Quiz dengan AI
            </button>
          </section>

          {/* Tips Upload */}
          <aside className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h3 className="font-semibold text-gray-900 mb-4 text-base flex items-center gap-2">
              <MdOutlineTipsAndUpdates className="text-[#2563eb] text-xl" />
              Tips Upload
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <BsExclamationCircleFill className="text-yellow-400 mt-0.5" />
                <span>
                  Pastikan file berisi materi yang jelas dan terstruktur
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaStickyNote className="text-blue-400 mt-0.5" />
                <span>
                  Format PDF dan DOCX memberikan hasil terbaik
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-0.5" />
                <span>
                  AI akan menganalisis dan membuat quiz otomatis
                </span>
              </li>
            </ul>
          </aside>
        </div>

        {/* Materi Saya */}
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
          {/* Card Materi */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-red-400">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">
                  Sempurna
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                  Uploaded 2 jam lalu
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base">
                Matematika Dasar
              </h3>
              <p className="text-sm text-gray-500">
                Materi tentang aljabar dan geometri dasar untuk siswa SMP
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">15 soal tersedia</span>
                <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">
                  Mulai Quiz
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-yellow-400">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                  bagus
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                  Uploaded 1 hari lalu
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base">
                Sejarah Indonesia
              </h3>
              <p className="text-sm text-gray-500">
                Materi tentang kemerdekaan Indonesia dan perjuangan pahlawan
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">15 soal tersedia</span>
                <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">
                  Mulai Quiz
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-3 border-t-4 border-green-400">
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded">
                  Sempurna
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                  Uploaded 3 hari lalu
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-base">
                Catatan Fisika
              </h3>
              <p className="text-sm text-gray-500">
                Catatan tentang hukum Newton dan kinematika
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">12 soal tersedia</span>
                <button className="bg-[#2563eb] text-white text-sm font-medium px-4 py-1.5 rounded shadow hover:bg-[#1e40af] transition">
                  Mulai Quiz
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}