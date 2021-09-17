const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
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
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)deposit <xocoins>\`**`)
      return message.lineReplyNoMention(nopr)
    }

    try {
      if ((await client.bal(message.author.id)) < amount) {
        const noxoc = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${color}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**You Dont Have \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins To Depsoit!**`)
        message.lineReplyNoMention(noxoc)
      }
      if (isNaN(args[0])) {
        const non = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${color}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**\`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Is Not A Number!**`)
        return message.lineReplyNoMention(non)
      }

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Deposited \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins Into Your Bank! 💸**`)
        .setColor(`${color}`)
      message.lineReplyNoMention(embed);
      client.rmv(message.author.id, amount)
      client.bankadd(message.author.id, amount)
    } catch (err) {
      console.log(err);
    }
  },
};