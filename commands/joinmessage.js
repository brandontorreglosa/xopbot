const Discord = require("discord.js")
const JoinMsgSchema = require("../models/joinmsg");

module.exports = {
  name: "joinmessage",
  permissions: ["MANAGE_CHANNELS"],
  description: "Change the welcome message per server!",
  aliases: ["joinmsg", "welcomemsg", "jmsg"],
  async execute(client, message, cmd, args, Discord) {
    const text = args.join(" ");
    if (!args[0]) {
      return message.channel.send(`\`Usage: (prefix)joinmessage <Text|off>\``);
    }
    if (text !== "off") {
      const data = await JoinMsgSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await JoinMsgSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });
        let newData = new JoinMsgSchema({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`**Join Message Set To ${newData.JoinMsg}**`);

      } else if (!data) {

        let newData = new JoinMsgSchema({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.channel.send(`**Join Message Set To ${newData.JoinMsg}**`);

      }
    } else if (text === "off") {
      const data2 = await JoinMsgSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await JoinMsgSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`**Join Message Has Been Turned Off!**`);

      } else if (!data2) {
        return message.channel.send(`**Join Message Isn' Even Setup Bot!**`);
      }
    }
  },
};