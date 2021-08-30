const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "monthly",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 2628000,
  permissions: [],
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 100000) + 5000;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`**You Received ${randomNumber} Monthly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
