import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  subscriptionId?: SortOrder;
  tier?: SortOrder;
  discordUserId?: SortOrder;
};
