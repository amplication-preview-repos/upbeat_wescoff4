import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscordUserService } from "./discordUser.service";
import { DiscordUserControllerBase } from "./base/discordUser.controller.base";

@swagger.ApiTags("discordUsers")
@common.Controller("discordUsers")
export class DiscordUserController extends DiscordUserControllerBase {
  constructor(protected readonly service: DiscordUserService) {
    super(service);
  }
}
