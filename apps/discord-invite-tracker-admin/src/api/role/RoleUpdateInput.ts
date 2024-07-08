import { DiscordUserUpdateManyWithoutRolesInput } from "./DiscordUserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  roleId?: string | null;
  name?: string | null;
  discordUsers?: DiscordUserUpdateManyWithoutRolesInput;
};
