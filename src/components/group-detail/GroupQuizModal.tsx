import { FaTimes, FaUnlock, FaLock } from "react-icons/fa";
import { ChangeEvent } from "react";

interface GroupQuizModalProps {
  show: boolean;
  onClose: () => void;
  form: {
    name: string;
    desc: string;
    maxMember: string;
    picture?: File;
    isPublic: boolean;
  };
  preview: string | null;
  onFormChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTogglePublic: () => void;
}

export default function GroupQuizModal({
  show,
  onClose,
  form,
  preview,
  onFormChange,
  onImageChange,
  onTogglePublic,
}: GroupQuizModalProps) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
          aria-label="Tutup"
        >
          <FaTimes />
        </button>
        <h2 className="font-bold text-xl text-gray-900 mb-6">Tambah Quiz Baru</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama Quiz</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onFormChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-500"
              placeholder="Masukkan nama quiz"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Deskripsi</label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={onFormChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-500"
              placeholder="Deskripsi quiz"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Max Member</label>
            <input
              type="number"
              name="maxMember"
              value={form.maxMember}
              onChange={onFormChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-violet-500"
              placeholder="Jumlah maksimal anggota"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Group Picture</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-12 h-12 rounded-lg object-cover border"
                />
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Tipe Grup</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition ${
                  form.isPublic
                    ? "bg-violet-500 text-white border-violet-500"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
                onClick={() => !form.isPublic && onTogglePublic()}
              >
                <FaUnlock />
                Public
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition ${
                  !form.isPublic
                    ? "bg-violet-500 text-white border-violet-500"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
                onClick={() => form.isPublic && onTogglePublic()}
              >
                <FaLock />
                Private
              </button>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full py-2 rounded-lg bg-violet-500 text-white font-semibold text-base shadow hover:bg-violet-600 transition"
            onClick={onClose}
          >
            Simpan Quiz
          </button>
        </form>
      </div>
    </div>
  );
}