const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "deposit",
  permissions: ["SEND_MESSAGES"],
  aliases: ["dep"],
  cooldown: 10,
  permissions: [],
  description: "Deposit Xocoins into your bank!",
  async execute(client, message, cmd, args, Discord, profileData) {
    const amount = args[0];
    if (!args[0]) {
      return message.lineReplyNoMention({ content: "**`(prefix)deposit <coins>`**" });
    }

    try {
      if ((await client.bal(message.author.id)) < amount)
        return message.lineReplyNoMention({ content: `**You Don't Have That Amount Of Coins to Deposit!**` });

      client.rmv(message.author.id, amount)
      client.bankadd(message.author.id, amount)

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`**You Deposited ${amount} Xocoins Into Your Bank! 💸**`)
        .setColor('#c30202')
      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};