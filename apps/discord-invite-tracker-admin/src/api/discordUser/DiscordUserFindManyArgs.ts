import { DiscordUserWhereInput } from "./DiscordUserWhereInput";
import { DiscordUserOrderByInput } from "./DiscordUserOrderByInput";

export type DiscordUserFindManyArgs = {
  where?: DiscordUserWhereInput;
  orderBy?: Array<DiscordUserOrderByInput>;
  skip?: number;
  take?: number;
};
