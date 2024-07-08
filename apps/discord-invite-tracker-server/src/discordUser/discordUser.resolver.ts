import * as graphql from "@nestjs/graphql";
import { DiscordUserResolverBase } from "./base/discordUser.resolver.base";
import { DiscordUser } from "./base/DiscordUser";
import { DiscordUserService } from "./discordUser.service";

@graphql.Resolver(() => DiscordUser)
export class DiscordUserResolver extends DiscordUserResolverBase {
  constructor(protected readonly service: DiscordUserService) {
    super(service);
  }
}
