const Discord = require("discord.js")
const JoinMsgSchema = require("../../models/joinmsg");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "joinmessage",
  cooldown: 10,
  permissions: ["MANAGE_CHANNELS"],
  clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
  description: "Change the welcome message per server!",
  aliases: ["joinmsg", "welcomemsg", "jmsg"],
  async execute(client, message, cmd, args, Discord) {
    const text = args.join(" ");
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)joinmessage <text/off>`**' });
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
        message.lineReplyNoMention({ content: `**Join Message Set To ${newData.JoinMsg}**` });

      } else if (!data) {

        let newData = new JoinMsgSchema({
          JoinMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.lineReplyNoMention({ content: `**Join Message Set To ${newData.JoinMsg}**` });

      }
    } else if (text === "off") {
      const data2 = await JoinMsgSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await JoinMsgSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Join Message Has Been Turned Off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Join Message Isn' Even Setup Bot!**` });
      }
    }
  },
};