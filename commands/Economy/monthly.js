const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "monthly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 2628000,
  permissions: [],
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 100000) + 5000;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Monthly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
