const API_BASE_URL = process.env.API_BASE_URL || "http://101.32.242.72:3000";

export async function signup({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) {
  const res = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.message || "Gagal mendaftar");
  }

  return res.json();
}

export async function signin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.message || "Gagal login");
  }
  return data;
}
