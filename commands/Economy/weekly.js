const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const db = require("quick.db");
module.exports = {
  name: "weekly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 604800,
  permissions: [],
  description: "weekly Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 20000) + 5000;
    await db.add(`${message.author.username}_weekly_collected`, 1)
    const fetchd = await db.get(`${message.author.username}_weekly_collected`)
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Weekly Xocoins! 💸**`)
      .setColor(`${color}`)
      .setFooter(`Total Weekly\`s Collected: ${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
