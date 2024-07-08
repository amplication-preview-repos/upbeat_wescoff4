/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSubscriptionTier } from "./EnumSubscriptionTier";
import { DiscordUser } from "../../discordUser/base/DiscordUser";

@ObjectType()
class Subscription {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subscriptionId!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionTier,
  })
  @IsEnum(EnumSubscriptionTier)
  @IsOptional()
  @Field(() => EnumSubscriptionTier, {
    nullable: true,
  })
  tier?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => DiscordUser,
  })
  @ValidateNested()
  @Type(() => DiscordUser)
  @IsOptional()
  discordUser?: DiscordUser | null;
}

export { Subscription as Subscription };
