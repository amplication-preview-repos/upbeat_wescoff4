import { DiscordUserWhereUniqueInput } from "../discordUser/DiscordUserWhereUniqueInput";

export type SubscriptionCreateInput = {
  subscriptionId?: string | null;
  tier?: "Option1" | null;
  discordUser?: DiscordUserWhereUniqueInput | null;
};
