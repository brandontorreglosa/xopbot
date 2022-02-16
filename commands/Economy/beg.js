const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const db = require('quickmongo');
module.exports = {
  name: "beg",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 5,
  permissions: [],
  description: "beg for coins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    db.add(`${message.author.username}_begged_total`, 1)
    const totalbegs = db.get(`${message.author.username}_begged_total`)
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Begged And Got From XOPBOT \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins! 💸**`)
      .setColor(`${color}`)
      .setFooter(`You Have Begged For Over: ${totalbegs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Times!`, message.author.displayAvatarURL({ dynamic: true }))
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
