const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "yearly",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 31536000,
  permissions: [],
  description: "yearly Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 1000000) + 5000;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`**You Received ${randomNumber} Yearly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
