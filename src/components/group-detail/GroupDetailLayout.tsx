/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import GroupHeader from "./GroupHeader";
import GroupQuizModal from "./GroupQuizModal";
import GroupProgress from "./GroupProgress";
import GroupQuizList from "./GroupQuizList";
import GroupTopPerformers from "./GroupTopPerformers";
import GroupMembers from "./GroupMembers";
import QuizResultModal from "./QuizResultModal";
import { useState } from "react";

export default function GroupDetailLayout({ group }: { group: any }) {
  // Debug: cek data group yang diterima
  console.log("GroupDetailLayout group prop:", group);

  const [tab, setTab] = useState<"quiz" | "anggota">("quiz");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: group?.name || "",
    desc: group?.description || "",
    maxMember: group?.max_member || "",
    picture: undefined as File | undefined,
    isPublic: !group?.is_private,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(undefined);

  // Data dari API, fallback ke array kosong jika belum ada
  const members = group?.members ?? [];
  const quizzes = group?.quizzes ?? [];
  const topPerformers = group?.topPerformers ?? [];

  // Progress dari API
  const progress = {
    totalQuiz: quizzes.length,
    activeMembers: group?.member_count ?? 0,
    maxMembers: group?.max_member ?? 0,
    totalXP: members.reduce((acc: number, m: { xp?: number }) => acc + (m.xp ?? 0), 0),
  };

  // Handler untuk form tambah quiz
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, picture: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleTogglePublic = () => {
    setForm((prev) => ({ ...prev, isPublic: !prev.isPublic }));
  };

  const handleShowResult = (result: any) => {
    setResultData(result);
    setShowResult(true);
  };

  const fallbackResult = {
    title: "",
    score: 0,
    total: 0,
    xp: 0,
    badge: "",
    correct: 0,
    wrong: 0,
    time: "",
    details: [],
  };

  return (
    <div>
      <GroupHeader
        group={group}
        onAddQuiz={() => setShowModal(true)}
        tab={tab}
        setTab={setTab}
      />
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
            <GroupProgress progress={progress} />
            <GroupQuizList
              quizzes={quizzes}
              onShowResult={handleShowResult}
            />
            <GroupTopPerformers topPerformers={topPerformers} />
          </>
        )}
        {tab === "anggota" && (
          <GroupMembers members={members} />
        )}
        <QuizResultModal
          show={showResult}
          onClose={() => setShowResult(false)}
          result={resultData ?? fallbackResult}
        />
      </main>
    </div>
  );
}