const Discord = module.require("discord.js")
const goodbyeSchema = require("../models/leavechannel");

module.exports = {
  name: "leavechannel",
  permissions: ["MANAGE_CHANNELS"],
  description: "Change the goodbye channel per server!",
  aliases: ["gchannel", "goodbye"],
  async execute(client, message, cmd, args, Discord) {
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send("**I Don't Have The `Manage Channels` Permission!**")
    }
    if (!args[0]) {
      return message.channel.send(`\`Usage: (prefix)leavechannel <#channel|off>\``);
    }
    if (message.mentions.channels.first()) {
      const data = await goodbyeSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await goodbyeSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(`**Goodbye Channel Set To ${message.mentions.channels.first()}**`);

        let newData = new goodbyeSchema({
          Bye: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`**Goodbye Channel Set To ${message.mentions.channels.first()}**`);

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

        return message.channel.send(`**Goodbye Channel Has Been Turned Off!**`);

      } else if (!data2) {
        return message.channel.send(`**Goodbye Channel Isn't Even Setup Bot!**`);
      }
    }
  },
};