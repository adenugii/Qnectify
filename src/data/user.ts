import users from "./user.json";

export type UserRekomendasi = {
  id: string;
  username: string;
  name: string;
  avatar: string;
  badge: string;
  badgeColor: string;
};

export const userRekomendasi: UserRekomendasi[] = users;
 