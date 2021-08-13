const Discord = require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  permissions: ["SEND_MESSAGES"],
  cooldown: 4,
  description: "Flip some text",
  usage: "fliptext <text>",
  type: "Fun",
  async execute(client, message, cmd, args, Discord) {
    if (args.length < 1) {
      return message.channel.send({ content: "**Please Enter Some Text To Flip!**" })
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
    message.channel.send({ embeds: [embed] });
  }
}