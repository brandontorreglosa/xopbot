const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "balance",
  permissions: ["SEND_MESSAGES"],
  aliases: ["bal", "bl"],
  cooldown: 4,
  permissions: [],
  description: "Check the user balance",
  execute(client, message, cmd, args, Discord, profileData) {
    const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member
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