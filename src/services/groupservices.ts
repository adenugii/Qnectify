const API_BASE_URL = process.env.API_BASE_URL || "http://101.32.242.72:3000";

export async function createStudyGroup(
  data: {
    name: string;
    description: string;
    max_member: number;
    is_private: boolean;
  },
  token?: string
) {
  const res = await fetch(`${API_BASE_URL}/study-group/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: "include",
    cache: "no-store",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create group");
  }
  return res.json();
}

export async function getAllGroups() {
  const res = await fetch(`${API_BASE_URL}/study-groups`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    return { study_groups: [] };
  }
  return res.json();
}
