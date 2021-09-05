const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "deposit",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ["dep"],
  cooldown: 10,
  permissions: [],
  description: "Deposit Xocoins into your bank!",
  async execute(client, message, cmd, args, Discord) {
    const amount = args[0];
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)deposit <xocoins>\`**`)
      return message.lineReplyNoMention(nopr)
    }

    try {
      if ((await client.bal(message.author.id)) < amount) {
        const noxoc = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**You Dont Have \`${amount}\` Xocoins To Depsoit!**`)
        message.lineReplyNoMention(noxoc)
      }
      if (isNaN(args[0])) {
        const non = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#c30202')
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**\`${amount}\` Is Not A Number!**`)
        return message.lineReplyNoMention(non)
      }

      client.rmv(message.author.id, amount)
      client.bankadd(message.author.id, amount)

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Deposited \`${amount}\` Xocoins Into Your Bank! 💸**`)
        .setColor('#c30202')
      message.lineReplyNoMention(embed);
    } catch (err) {
      console.log(err);
    }
  },
};