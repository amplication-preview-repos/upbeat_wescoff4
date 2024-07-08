import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiscordUserServiceBase } from "./base/discordUser.service.base";

@Injectable()
export class DiscordUserService extends DiscordUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
