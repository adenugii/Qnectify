import { cookies } from "next/headers";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import UploadFormSection from "@/components/quiz-maker/UploadFormSection";
import TipsSection from "@/components/quiz-maker/TipsSection";
import MateriSayaSection from "@/components/quiz-maker/MateriSayaSection";
import { getMyQuiz } from "@/services/quizservices";

// Halaman Upload Materi
export default async function UploadPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value || "";
  const response = await getMyQuiz(token);
  const quiz = Array.isArray(response) ? response : response?.quiz || [];

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
          <UploadFormSection token={token} />
          <TipsSection />
        </div>

        {/* Materi Saya */}
        <MateriSayaSection quiz={quiz} />
      </main>

      <Footer />
    </div>
  );
}