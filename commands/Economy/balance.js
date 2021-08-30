const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "balance",
  permissions: ["SEND_MESSAGES"],
  aliases: ["bal", "bl"],
  cooldown: 4,
  permissions: [],
  description: "Check the user balance",
  async execute(client, message, cmd, args, Discord, profileData) {
    const user = message.mentions.users.first() || message.author;
    const bal = await client.bal(user.id);
    const bank = await client.bank(user.id)
    
    const newEmbed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${user.username} Balance`, user.displayAvatarURL({ dynamic: true }))
      .setColor('#c30202')
      .setDescription(`
      **💸 Wallet- ${bal} Xocoins** 
      **🏦 Bank- ${bank} Xocoins**
      `)
    message.lineReplyNoMention(newEmbed)
  },
};