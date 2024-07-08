import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { SubscriptionUpdateManyWithoutDiscordUsersInput } from "./SubscriptionUpdateManyWithoutDiscordUsersInput";

export type DiscordUserUpdateInput = {
  userId?: string | null;
  username?: string | null;
  role?: RoleWhereUniqueInput | null;
  subscriptions?: SubscriptionUpdateManyWithoutDiscordUsersInput;
};
