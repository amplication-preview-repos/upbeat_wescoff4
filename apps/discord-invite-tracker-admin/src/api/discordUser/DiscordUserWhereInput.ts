import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type DiscordUserWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  username?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  subscriptions?: SubscriptionListRelationFilter;
};
