const Discord = require("discord.js")
const antilinkSchema = require("../../models/antilink");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "antilink",
  cooldown: 15,
  permissions: ["ADMINISTRATOR"],
  clientpermissions: ["ADMINISTRATOR"],
  description: "Setup antilink per server!",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)antilink <on/off>`**' })
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await antilinkSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await antilinkSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.lineReplyNoMention({ content: `**Antilink is now active!**` });

        let newData = new antilinkSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.lineReplyNoMention({ content: `**Antilink is now active**` });

        let newData = new antilinkSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "Off" || args[0] === "off") {
      const data2 = await antilinkSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await antilinkSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Antilink has been turned off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Antilink Isn't Even Setup Bot!**` });
      }
    }
  }
}