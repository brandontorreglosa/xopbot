const lineReplyNoMention = require('discord-reply');
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
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Weekly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
