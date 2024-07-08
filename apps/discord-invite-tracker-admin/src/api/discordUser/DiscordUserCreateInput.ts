import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutDiscordUsersInput } from "./SubscriptionCreateNestedManyWithoutDiscordUsersInput";

export type DiscordUserCreateInput = {
  userId?: string | null;
  username?: string | null;
  role?: RoleWhereUniqueInput | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutDiscordUsersInput;
};
