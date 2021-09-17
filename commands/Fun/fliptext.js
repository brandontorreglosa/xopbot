const Discord = require("discord.js");
const flip = require("flip-text");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
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
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)fliptext <text\`**`)
      return message.lineReplyNoMention(nopr)
    }
    args.reverse();
    var flipped = [];

    args.forEach((arg) => {
      flipped.push(flip(arg));
    });

    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setColor(`${color}`)
      .setTitle('Fliptext Conversion')
      .setDescription(flipped.join(" "))
    message.lineReplyNoMention(embed);
  }
}