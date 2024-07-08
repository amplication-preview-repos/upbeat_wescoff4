import { SortOrder } from "../../util/SortOrder";

export type DiscordUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
  roleId?: SortOrder;
};
