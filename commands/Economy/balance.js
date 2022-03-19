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
    const user = message.mentions.users.first() || message.author; const bal = await client.bal(user.id); const bank = await client.bank(user.id)
    const debt = await client.debt(user.id)
    const newEmbed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true })).setColor(`${Color}`).setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**\n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`)
    message.lineReplyNoMention({ embed: newEmbed })
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nWallet: ${bal} | Bank: ${bank} | Debt: ${debt}**` })
  },
};