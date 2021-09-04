const Discord = require("discord.js");
const flip = require("flip-text");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "fliptext",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 4,
  description: "Flip some text",
  usage: "fliptext <text>",
  type: "Fun",
  async execute(client, message, cmd, args, Discord) {
    if (args.length < 1) {
      return message.lineReplyNoMention({ content: "**`(prefix)fliptext <text>`**" })
    }
    args.reverse();
    var flipped = [];

    args.forEach((arg) => {
      flipped.push(flip(arg));
    });

    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor('#c30202')
      .setTitle('Fliptext Conversion')
      .setDescription(flipped.join(" "))
    message.lineReplyNoMention(embed);
  }
}