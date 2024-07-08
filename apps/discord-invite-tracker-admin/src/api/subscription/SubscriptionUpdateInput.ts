import { DiscordUserWhereUniqueInput } from "../discordUser/DiscordUserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  subscriptionId?: string | null;
  tier?: "Option1" | null;
  discordUser?: DiscordUserWhereUniqueInput | null;
};
