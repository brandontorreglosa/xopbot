const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "withdraw",
  cooldown: 10,
  permissions: ["SEND_MESSAGES"],
  aliases: ["wd"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(client, message, cmd, args, Discord) {
    const amount = args[0];
    if (!args[0]) {
      return message.lineReplyNoMention({ content: "**`(prefix)withdraw <xocoins>`**" });
    }

    try {
      if ((await client.bank(message.author.id)) < amount)
        return message.lineReplyNoMention({ content: `**You Don't Have That Amount Of Xocoins To Withdraw!**` });
      if (isNaN(args[0])) return message.lineReplyNoMention({ content: '**That Is Not A Number!**' })

      client.add(message.author.id, amount)
      client.bankrmv(message.author.id, amount)

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`**You Withdrew ${amount} Xocoins Into Your Wallet! 💸**`)
        .setColor('#c30202')

      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};