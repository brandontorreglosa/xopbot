const lineReplyNoMention = require('discord-reply');
const db = require('quickmongo');
const color = process.env.Color;
module.exports = {
  name: "daily",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 86400,
  permissions: [],
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 5000) + 5000;
    db.add(`${message.author.username}_daily_collected`, 1)
    const fetchd = db.get(`${message.author.username}_daily_collected`)
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Daily Xocoins! 💸**`)
      .setColor(`${color}`)
      .setFooter(`Total Daily\`s Collected: ${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, message.author.displayAvatarURL({ dynamic: true }))
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
