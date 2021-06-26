const Discord = require("discord.js")
const LeaveMsgSchema = require("../models/leavemessage");

module.exports = {
  name: "joinmessage",
  permissions: ["MANAGE_CHANNELS"],
  description: "Change the welcome message per server!",
  aliases: ["leavemsg", "goodbyemsg", "lmsg"],
  async execute(client, message, cmd, args, Discord) {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Usage: (prefix)leavemessage <Text|off>\``)
    }
    if (text !== "off") {
      const data = await joinModel.findOne({
        GuildID: message.guild.id
      });

      if (data) {
        await joinModel.findOneAndRemove({
          GuildID: message.guild.id
        });
        let newData = new joinModel({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id
        });
        newData.save();
        message.channel.send(`**Leave Message Set To ${newData.JoinMsg}**`);

      } else if (!data) {

        let newData = new joinModel({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id
        });
        newData.save();
        message.channel.send(`Goodbye Message set to ${newData.JoinMsg}`);

      }
    } else if (text === "off") {
      const data2 = await joinModel.findOne({
        GuildID: message.guild.id
      });

      if (data2) {
        await joinModel.findOneAndRemove({
          GuildID: message.guild.id
        });

        return message.channel.send(`**Goodbye Message Has Been Turned Off!**`);

      } else if (!data2) {
        return message.channel.send(`Goodbye Message Isn't Even Setup Bot!`)
      }
    }
  }
}