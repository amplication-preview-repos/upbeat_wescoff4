import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscordUserWhereUniqueInput } from "../discordUser/DiscordUserWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  subscriptionId?: StringNullableFilter;
  tier?: "Option1";
  discordUser?: DiscordUserWhereUniqueInput;
};
