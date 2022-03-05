const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: "give",
  cooldown: 15,
  aliases: [],
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  description: "give a player some Xocoins",
  async execute(client, message, cmd, args, Discord) {
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)give<@user><xocoins>\`**`)
      return message.lineReplyNoMention({ embed: nopr })
    }
    const giveuser1 = args[0]; const user = message.mentions.users.first(); if (!user) {
      const nouserhere = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${giveuser1}\`Does Not Exist In This Server!**`)
      return message.lineReplyNoMention({ embed: nouserhere })
    }
    const amount = args[1]; if (!args[1]) {
      const noxocspec = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Specify The Xocoins To Give!**`)
      return message.lineReplyNoMention({ embed: noxocspec })
    }
    if ((await client.bal(message.author.id)) < amount) {
      const noxocamount = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Dont Have \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Xocoins To Bet!**`)
      return message.lineReplyNoMention({ embed: noxocamount })
    }
    if (isNaN(args[1])) {
      const xocnonum = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Is Not A Number!**`)
      return message.lineReplyNoMention({ embed: xocnonum })
    }
    try {
      await client.rmv(message.author.id, amount)
      await client.add(user.id, amount)
      const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle(`${message.author.username}`).setDescription(`**This User Has Been Given \`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\`Of Xocoins!**💸`)
      return message.lineReplyNoMention({ embed: embed });
    } catch (err) { console.log(err); }
  },
};