const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "beg",
  permissions: ["SEND_MESSAGES"],
  aliases: [],
  cooldown: 5,
  permissions: [],
  description: "beg for coins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`**You Begged And Got From XOPBOT ${randomNumber} Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
