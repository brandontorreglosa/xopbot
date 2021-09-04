const Discord = require("discord.js")
const LeaveMsgSchema = require("../../models/leavemessage");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "leavemessage",
  cooldown: 10,
  permissions: ["MANAGE_CHANNELS"],
  clientpermissions: ["MANAGE_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS"],
  description: "Change the welcome message per server!",
  aliases: ["leavemsg", "goodbyemsg", "lmsg"],
  async execute(client, message, cmd, args, Discord) {
    const text = args.join(" ");
    if (!args[0]) {
      return message.lineReplyNoMention({ content: `\`Usage: (prefix)leavemessage <Text|off>\`` });
    }
    if (text !== "off") {
      const data = await LeaveMsgSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await LeaveMsgSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });
        let newData = new LeaveMsgSchema({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.lineReplyNoMention({ content: `**Leave Message Set To ${newData.ByeMsg}**` });

      } else if (!data) {

        let newData = new LeaveMsgSchema({
          ByeMsg: args.join(" "),
          GuildID: message.guild.id,
        });
        newData.save();
        message.lineReplyNoMention({ content: `Goodbye Message set to ${newData.ByeMsg}` });

      }
    } else if (text === "off") {
      const data2 = await LeaveMsgSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await LeaveMsgSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.lineReplyNoMention({ content: `**Goodbye Message Has Been Turned Off!**` });

      } else if (!data2) {
        return message.lineReplyNoMention({ content: `**Goodbye Message Isn't Even Setup Bot!**` });
      }
    }
  },
};