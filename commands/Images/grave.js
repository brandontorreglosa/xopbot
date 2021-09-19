const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "grave",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 5,
  description: "Image Manipulation Command",
  async execute(client, message, cmd, args, Discord) {
    const mention = message.mentions.users.first() || message.member;
    const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });

    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('GRAVE')
    //   .setColor(`${color}`)
    //   .setImage(`https://vacefron.nl/api/grave?user=${avatar}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/grave?user=${avatar}`, name: "xopbotgrave.png" }] });
  }
}