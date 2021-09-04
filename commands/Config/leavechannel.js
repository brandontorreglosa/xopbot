const Discord = module.require("discord.js")
const goodbyeSchema = require("../../models/leavechannel");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "leavechannel",
  cooldown: 15,
  permissions: ["MANAGE_CHANNELS"],
  clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
  description: "Change the goodbye channel per server!",
  aliases: ["gchannel", "goodbye"],
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)leavechannel <channel/off>`**' });
    }
    if (message.mentions.channels.first()) {
      const data = await goodbyeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await goodbyeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.lineReplyNoMention({ content: `**Goodbye Channel Set To ${message.mentions.channels.first()}**` });

        let newData = new goodbyeSchema({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.lineReplyNoMention({ content: `**Goodbye Channel Set To ${message.mentions.channels.first()}**` });

        let newData = new goodbyeSchema({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await goodbyeSchema.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await goodbyeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Goodbye Channel Has Been Turned Off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Goodbye Channel Isn't Even Setup Bot!**` });
      }
    }
  },
};