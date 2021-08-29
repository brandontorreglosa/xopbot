const Discord = require("discord.js")
const antiwordsSchema = require("../../models/antiwords");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "antiwords",
  cooldown: 15,
  permissions: ["ADMINISTRATOR"],
  description: "Setup antilink per server!",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)antiwords <on/off>`**' })
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.lineReplyNoMention({ content: `**Antiwords is now active!**` });

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.lineReplyNoMention({ content: `**Antiwords is now active**` });

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "Off" || args[0] === "off") {
      const data2 = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Antiwords has been turned off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Antiwords Isn't Even Setup Bot!**` });
      }
    }
  }
}