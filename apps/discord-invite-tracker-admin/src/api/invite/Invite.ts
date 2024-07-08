export type Invite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  inviteId: string | null;
  inviter: string | null;
  invitee: string | null;
};
