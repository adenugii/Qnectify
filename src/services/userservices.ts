const API_BASE_URL = process.env.API_BASE_URL || "http://101.32.242.72:3000";

export async function getProfile(token?: string) {
  const res = await fetch(`${API_BASE_URL}/user/profile`, {
    method: "GET",
    headers: token ? { Cookie: `token=${token}` } : {},
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}
