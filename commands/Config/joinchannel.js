const Discord = require("discord.js")
const welcomeSchema = require("../../models/welcome");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "joinchannel",
  cooldown: 15,
  permissions: ["MANAGE_CHANNELS"],
  description: "Change the welcome channel per server!",
  aliases: ["jchannel", "jwelcome"],
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)joinchannel <channel/off>`**' })
    }
    if (message.mentions.channels.first()) {
      const data = await welcomeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await welcomeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.lineReplyNoMention({ content: `**Join Channel Set To ${message.mentions.channels.first()}**` });

        let newData = new welcomeSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.lineReplyNoMention({ content: `**Join Channel Set To ${message.mentions.channels.first()}**` });

        let newData = new welcomeSchema({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await welcomeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await welcomeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Join Channel Has Been Turned Off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Join Channel Isn't Even Setup Bot!**` });
      }
    }
  }
}