const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "balance",
  permissions: ["SEND_MESSAGES"],
  aliases: ["bal", "bl"],
  cooldown: 4,
  permissions: [],
  description: "Check the user balance",
  execute(client, message, cmd, args, Discord, profileData) {
    const user = message.author;
    const newEmbed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${user.user.username} Balance`, user.user.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202')
      .setDescription(`
      **💸 Wallet- ${profileData.coins} Xocoins** 
      **🏦 Bank- ${profileData.bank} Xocoins**
      `)
    message.lineReplyNoMention(newEmbed)
  },
};