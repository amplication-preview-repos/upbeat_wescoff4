import { SortOrder } from "../../util/SortOrder";

export type InviteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  inviteId?: SortOrder;
  inviter?: SortOrder;
  invitee?: SortOrder;
};
