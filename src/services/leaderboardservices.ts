const API_BASE_URL = process.env.API_BASE_URL || "http://101.32.242.72:3000";

export async function getUserLeaderboard() {
  const res = await fetch(`${API_BASE_URL}/quiz/leaderboard/users`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    return { leaderboard: [] };
  }
  return res.json();
}

export async function getGroupLeaderboard() {
  const res = await fetch(`${API_BASE_URL}/quiz/leaderboard/study-groups`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    return { leaderboard: [] };
  }
  return res.json();
}
