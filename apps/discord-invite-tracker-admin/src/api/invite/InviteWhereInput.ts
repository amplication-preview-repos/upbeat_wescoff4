import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InviteWhereInput = {
  id?: StringFilter;
  inviteId?: StringNullableFilter;
  inviter?: StringNullableFilter;
  invitee?: StringNullableFilter;
};
