import { DiscordUser } from "../discordUser/DiscordUser";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptionId: string | null;
  tier?: "Option1" | null;
  discordUser?: DiscordUser | null;
};
