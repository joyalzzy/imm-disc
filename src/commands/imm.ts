import { Pagination } from "@discordx/pagination";
import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType, EmbedBuilder } from "discord.js";
import { Discord, MetadataStorage, Slash, SlashGroup, SlashOption } from "discordx";
import { getAutcomplete, getFormatPropertyEmbed, getPropertyByName, getRand } from "../imm/imm.js";

@Discord()
@SlashGroup({
    name: "imm",
    description: "imm"
  })
@SlashGroup("imm")
export class SlashExample {
  // example: pagination for all slash command
  
  @Slash({
    description: "Info",
    name: "info",
    
  })
  async info(
    @SlashOption({
      description: "store",
      name: "store",
      required: true,
      type: ApplicationCommandOptionType.String,
      autocomplete: getAutcomplete
    })
    name : String,
    interaction: CommandInteraction): Promise<void> {
      await interaction.deferReply();
      await interaction.followUp(
        {
          embeds: [getFormatPropertyEmbed(getPropertyByName(name)!)]
        }
      )

  }

  @Slash({
    description: "random",
    name: "random",
    
  })
  async random(
    @SlashOption({
      name: "num",
      description: "num",
      type: ApplicationCommandOptionType.Integer
    })
    num : Number = 1,
    interaction: CommandInteraction): Promise<void> {
      await interaction.deferReply();
      await interaction.followUp(
        {
          embeds: Array(num).fill(1).map(() => getFormatPropertyEmbed(getRand()!))
        }
      )

  }
}
