import React, { useState } from "react";

interface StudyGroupCreateCardProps {
  onClose: () => void;
  onCreate: (data: {
    name: string;
    description: string;
    max_member: number;
    is_private: boolean;
  }) => Promise<void>;
  loading?: boolean;
  error?: string;
}

export default function StudyGroupCreateCard({
  onClose,
  onCreate,
  loading,
  error,
}: StudyGroupCreateCardProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxMember, setMaxMember] = useState(10);
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onCreate({
      name,
      description,
      max_member: maxMember,
      is_private: isPrivate,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-900">Buat Grup Belajar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama Grup</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Deskripsi</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Maksimal Member</label>
            <input
              type="number"
              min={2}
              max={100}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={maxMember}
              onChange={e => setMaxMember(Number(e.target.value))}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={e => setIsPrivate(e.target.checked)}
              id="isPrivate"
            />
            <label htmlFor="isPrivate" className="text-gray-700">Grup Privat</label>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? "Membuat..." : "Buat Grup"}
          </button>
        </form>
      </div>
    </div>
  );
}
