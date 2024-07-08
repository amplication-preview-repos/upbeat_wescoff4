import { DiscordUserCreateNestedManyWithoutRolesInput } from "./DiscordUserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  roleId?: string | null;
  name?: string | null;
  discordUsers?: DiscordUserCreateNestedManyWithoutRolesInput;
};
