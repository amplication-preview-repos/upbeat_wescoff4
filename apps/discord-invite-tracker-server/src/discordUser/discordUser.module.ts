import { Module } from "@nestjs/common";
import { DiscordUserModuleBase } from "./base/discordUser.module.base";
import { DiscordUserService } from "./discordUser.service";
import { DiscordUserController } from "./discordUser.controller";
import { DiscordUserResolver } from "./discordUser.resolver";

@Module({
  imports: [DiscordUserModuleBase],
  controllers: [DiscordUserController],
  providers: [DiscordUserService, DiscordUserResolver],
  exports: [DiscordUserService],
})
export class DiscordUserModule {}
