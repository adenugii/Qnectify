const API_BASE_URL = process.env.API_BASE_URL || "http://101.32.242.72:3000";

export async function uploadQuiz({ file, num_questions, difficulty, description, token }: {
  file: File;
  num_questions: number;
  difficulty: string;
  description?: string;
  token: string;
}) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("num_questions", String(num_questions));
  formData.append("difficulty", difficulty);
  if (description) formData.append("description", description);

  const res = await fetch(`${API_BASE_URL}/quiz/upload`, {
    method: "POST",
    body: formData,
    credentials: "include",
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message || "Gagal upload quiz");
  }
  return res.json();
}
