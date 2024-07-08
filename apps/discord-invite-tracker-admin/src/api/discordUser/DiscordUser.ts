import { Role } from "../role/Role";
import { Subscription } from "../subscription/Subscription";

export type DiscordUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  username: string | null;
  role?: Role | null;
  subscriptions?: Array<Subscription>;
};
