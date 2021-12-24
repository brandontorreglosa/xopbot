const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "xmas",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 31536000,
  permissions: [],
  description: "xmas Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 10000000) + 5000;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xmas Xocoins! 💸**`)
      .setColor(`${color}`)
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
