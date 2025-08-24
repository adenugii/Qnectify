"use client";

import { useState } from "react";
import { FaChevronLeft, FaRegClock, FaRegBookmark } from "react-icons/fa";
import quizData from "@/data/quiz-question.json";

export default function QuizPage() {
  // Dummy state untuk current question dan jawaban
  const [current, setCurrent] = useState(2); // index soal ke-3 (0-based)
  const [selected, setSelected] = useState(1); // index jawaban ke-2 (0-based)
  const [marked, setMarked] = useState(false);

  const question = quizData.questions[current];

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <div className="w-full border-b bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-[#2563eb] text-xl">
              <FaChevronLeft />
            </button>
            <div>
              <div className="font-bold text-lg md:text-xl text-gray-900">
                Matematika Dasar
              </div>
              <div className="text-gray-500 text-sm">
                Quiz - Aljabar Linear
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock className="text-red-400" />
            <span className="bg-red-100 text-red-500 text-sm font-semibold px-3 py-1 rounded-lg">
              15:27
            </span>
          </div>
        </div>
      </div>

      {/* Progress & Soal */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-800 font-medium text-base">
            Soal {current + 1} dari {quizData.questions.length}
          </span>
          <span className="text-gray-400 text-sm">
            {Math.round(((current + 1) / quizData.questions.length) * 100)}% selesai
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
          <div
            className="h-2 bg-[#2563eb] rounded-full transition-all duration-300"
            style={{
              width: `${((current + 1) / quizData.questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Card Soal */}
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto flex flex-col gap-6">
          {/* Tipe Soal */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] text-sm font-semibold px-4 py-1 rounded-full mb-4">
              <span className="text-base">?</span>
              Pilihan Ganda
            </span>
          </div>
          {/* Pertanyaan */}
          <div className="font-bold text-xl text-gray-900 mb-2 leading-relaxed">
            {question.question}
          </div>
          {/* Pilihan Jawaban */}
          <div className="flex flex-col gap-4">
            {question.options.map((opt, idx) => (
              <label
                key={opt}
                className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition
                  ${
                    selected === idx
                      ? "border-[#2563eb] bg-blue-50"
                      : "border-gray-200 bg-white hover:border-[#2563eb]/60"
                  }
                `}
              >
                <input
                  type="radio"
                  name="answer"
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                  className="form-radio accent-[#2563eb] w-5 h-5"
                />
                <span className="font-semibold text-gray-700 text-base">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="text-gray-700 text-base">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigasi Bawah */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto mt-8">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 font-semibold text-base hover:bg-gray-50 transition w-full md:w-auto"
            disabled={current === 0}
          >
            <FaChevronLeft />
            Sebelumnya
          </button>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              type="button"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border bg-gray-100 text-gray-700 font-semibold text-base transition w-full md:w-auto ${
                marked ? "border-[#2563eb] bg-blue-50 text-[#2563eb]" : "border-gray-200"
              }`}
              onClick={() => setMarked((m) => !m)}
            >
              <FaRegBookmark />
              Tandai
            </button>
            <button
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[#2563eb] text-white font-semibold text-base shadow hover:bg-[#1e40af] transition w-full md:w-auto"
            >
              Selanjutnya
              <FaChevronLeft className="rotate-180" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}