import { DiscordUser } from "../discordUser/DiscordUser";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roleId: string | null;
  name: string | null;
  discordUsers?: Array<DiscordUser>;
};
