const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "withdraw",
  cooldown: 10,
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ["wd"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(client, message, cmd, args, Discord) {
    const amount = args[0];
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)withdraw <xocoins>\`**`)
      return message.lineReplyNoMention(nopr)
    }

    try {
      if ((await client.bank(message.author.id)) < amount) {
        const noxoc = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**You Dont Have \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins To Withdraw!**`)
        return message.lineReplyNoMention(noxoc)
      }
      if (isNaN(args[0])) {
        const nonum = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**\`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Is Not A Number!**`)
        return message.lineReplyNoMention(nonum)
      }


      client.add(message.author.id, amount)
      client.bankrmv(message.author.id, amount)
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${message.author.username}`)
        .setDescription(`**You Withdrew \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins Into Your Wallet! 💸**`)
        .setColor('#c30202')

      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};