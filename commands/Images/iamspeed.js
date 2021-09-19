const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "iamspeed",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ['iams', 'iaspeed'],
  cooldown: 5,
  description: "Image Manipulation Command",
  async execute(client, message, cmd, args, Discord) {

    const mention = message.mentions.users.first() || message.member;
    const avatar = mention.user.displayAvatarURL({ size: 2048, format: "png" });


    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('IAMSPEED')
    //   .setColor(`${color}`)
    //   .setImage(`https://vacefron.nl/api/iamspeed?user=${avatar}`)

    // message.lineReplyNoMention(embed)

     message.lineReplyNoMention({ files: [{ attachment: `https://vacefron.nl/api/iamspeed?user=${avatar}`, name: "xopbotiamspeed.png" }] });
  }
}