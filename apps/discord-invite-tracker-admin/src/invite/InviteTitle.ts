import { Invite as TInvite } from "../api/invite/Invite";

export const INVITE_TITLE_FIELD = "inviteId";

export const InviteTitle = (record: TInvite): string => {
  return record.inviteId?.toString() || String(record.id);
};
