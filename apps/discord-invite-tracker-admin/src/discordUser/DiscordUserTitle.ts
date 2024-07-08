import { DiscordUser as TDiscordUser } from "../api/discordUser/DiscordUser";

export const DISCORDUSER_TITLE_FIELD = "username";

export const DiscordUserTitle = (record: TDiscordUser): string => {
  return record.username?.toString() || String(record.id);
};
