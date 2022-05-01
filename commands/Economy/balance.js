const lineReplyNoMention = require('discord-reply');
const Color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
  name: "balance",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ["bal", "bl"],
  cooldown: 5,
  description: "Check the user balance",
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const user = message.mentions.users.first() || message.author; const bal = await client.bal(user.id); const bank = await client.bank(user.id); const debt = await client.debt(user.id)
    const net = bal + bank; const noob = 1000; const average = 10000; const lowrich = 100000; const midrich = 500000; const rich = 1000000; const superrich = 5000000; const megarich = 1000000000;
    if (net <= noob) {
      const newEmbed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter('Lol What A Poor Noob 🤣!')
      message.lineReplyNoMention({ embed: newEmbed })
    } else if (net <= average) {
      const newEmbed1 = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter('Bruh, My Mom Has More Dough 😂!')
      message.lineReplyNoMention({ embed: newEmbed1 })
    } else if (net <= lowrich) {
      const newEmbed2 = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter('Not Bad. For A Weeb 😅!')
      message.lineReplyNoMention({ embed: newEmbed2 })
    } else if (net <= midrich) {
      const newEmbed3 = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter(`Ok, ${user.username} Got Some Dough. Nice 😄!`)
      message.lineReplyNoMention({ embed: newEmbed3 })
    } else if (net <= rich) {
      const newEmbed4 = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter(`OMG, ${user.username} Got More Dough Than Me 😲!`)
      message.lineReplyNoMention({ embed: newEmbed4 })
    } else if (net <= superrich) {
      const newEmbed5 = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter(`OMFG, ${user.username} Is Rich ASF 😳!`)
      message.lineReplyNoMention({ embed: newEmbed5 })
    } else if (net <= megarich) {
      const newEmbed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`).setFooter(`WTH, OMFG. ${user.username} Is The Next Elon Musk 💰!`)
      message.lineReplyNoMention({ embed: newEmbed })
    }
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nWallet: ${bal} | Bank: ${bank} | Debt: ${debt}**` })
  },
};