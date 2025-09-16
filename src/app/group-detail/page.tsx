"use client";

import { useState, ChangeEvent } from "react";
import groupData from "@/data/group-detail.json";
import GroupHeader from "@/components/group-detail/GroupHeader";
import GroupQuizModal from "@/components/group-detail/GroupQuizModal";
import GroupProgress from "@/components/group-detail/GroupProgress";
import GroupQuizList from "@/components/group-detail/GroupQuizList";
import GroupTopPerformers from "@/components/group-detail/GroupTopPerformers";
import GroupMembers from "@/components/group-detail/GroupMembers";
import Footer from "@/components/common/Footer";
import QuizResultModal from "@/components/group-detail/QuizResultModal";

type TabType = "quiz" | "anggota";

export default function GroupDetailPage() {
  const [tab, setTab] = useState<TabType>("quiz");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    maxMember: "",
    picture: undefined as File | undefined,
    isPublic: true,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState(groupData.quizResults[0]);

  // Handler untuk form tambah quiz
  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handler upload gambar
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handler toggle public/private
  const handleTogglePublic = () => {
    setForm((prev) => ({ ...prev, isPublic: !prev.isPublic }));
  };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <GroupHeader onAddQuiz={() => setShowModal(true)} tab={tab} setTab={setTab} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <GroupQuizModal
          show={showModal}
          onClose={() => setShowModal(false)}
          form={form}
          preview={preview}
          onFormChange={handleFormChange}
          onImageChange={handleImageChange}
          onTogglePublic={handleTogglePublic}
        />
        {tab === "quiz" && (
          <>
            <GroupProgress progress={groupData.progress} />
            <GroupQuizList
              quizzes={groupData.quizzes}
              onShowResult={(quiz) => {
                const foundResult = groupData.quizResults.find(
                  (res) => res.title === quiz.title
                );
                if (foundResult) {
                  setResultData(foundResult);
                  setShowResult(true);
                }
              }}
            />
            <GroupTopPerformers topPerformers={groupData.topPerformers} />
          </>
        )}
        {tab === "anggota" && (
          <GroupMembers members={groupData.members} />
        )}
        <QuizResultModal show={showResult} onClose={() => setShowResult(false)} result={resultData} />
      </main>
      <Footer />
    </div>
  );
}