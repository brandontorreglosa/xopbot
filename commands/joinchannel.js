const Discord = require("discord.js")
const welcomeSchema = require("../models/welcome");

module.exports = {
  name: "joinchannel",
  permissions: ["MANAGE_CHANNELS"],
  description: "Change the welcome channel per server!",
  aliases: ["jchannel", "jwelcome"],
 async execute(client, message, cmd, args, Discord)  {
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send("I Don't Have The `Manage Channels` Permission!")
    }
    if (!args[0]) {
      return message.channel.send(`\`Usage: (prefix)joinchannel <#channel|off>\``)
    }
    if (message.mentions.channels.first()) {
    const data = await joinModel.findOne({
      GuildID: message.guild.id
    });

    if (data) {
      await welcomeSchema.findOneAndRemove({
        GuildID: message.guild.id
      });

      message.channel.send(`**Join Channel Set To ${message.mentions.channels.first()}**`);

      let newData = new welcomeSchema({
        Welcome: message.mentions.channels.first().id,
        GuildID: message.guild.id
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`**Join Channel Set To ${message.mentions.channels.first()}**`);

      let newData = new welcomeSchema({
        Welcome: message.mentions.channels.first().id,
        GuildID: message.guild.id
      });
      newData.save();
    }
  } else if (args[0] === "off") {
      const data2 = await welcomeSchema.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await welcomeSchema.findOneAndRemove({
          GuildID: message.guild.id
        });

        return message.channel.send(`**Join Channel Has Been Turned Off!**`);

      } else if (!data2) {
        return message.channel.send(`**Join Channel Isn't Even Setup Bot!**`)
      }
    }
  }
}