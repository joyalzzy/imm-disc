import { AutocompleteInteraction, Embed, EmbedBuilder } from "discord.js";
import immJSON from "../data/imm.json" assert { type: "json" };
import {
  IMMResponse,
  Property,
  RelBrandtenantsDetail,
  RelTenantsDetail,
} from "../types";
const imms = immJSON as IMMResponse;

export const getPropertyByName = (name: String) => {
  return imms.properties.find((x) => x.entityname == name);
};
export const getAutcomplete = (interaction: AutocompleteInteraction) => {
  interaction.respond(
    imms.properties
      .filter((x) =>
        x["jcr:title"].startsWith(interaction.options.getFocused(true).value)
      )
      .map((x) => {
        return { name: x["jcr:title"], value: x.entityname };
      })
      .slice(0, 25)
  );
};
export const getFormatPropertyEmbed = (p: Property) => {
  return new EmbedBuilder()
    .setTitle(p["jcr:title"])
    .addFields([
      { name: "desc", value: p.shortdescription ?? "NA" },

      {
        name: "food types",
        value: p.foodTypes?.reduce((x, y) => `${x}, ${y}, `) ?? "NA",
      },
      {
        name: "store vibe",
        value: p.storeVibe.reduce((x, y) => `${x}, ${y}, `) ?? "NA",
      },
    ])
    .setFooter({ text: p.pagePath }).setImage(`https://www.capitaland.com${p.thumbnail}`);
};
export const getRand = () => {
  let p = imms.properties[Math.floor(Math.random() * imms.properties.length)];
  console.log(p["jcr:title"]);
  return p;
};
