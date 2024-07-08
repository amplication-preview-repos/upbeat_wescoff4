import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiscordUserListRelationFilter } from "../discordUser/DiscordUserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  roleId?: StringNullableFilter;
  name?: StringNullableFilter;
  discordUsers?: DiscordUserListRelationFilter;
};
