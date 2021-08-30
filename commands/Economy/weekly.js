const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "weekly",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 604800,
  permissions: [],
  description: "weekly Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 20000) + 5000;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`**You Received ${randomNumber} Weekly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
