const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "yearly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 31536000,
  permissions: [],
  description: "yearly Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 1000000) + 5000;
    if ((await client.bal(message.author.id)) = maxtodep) {
      const maxbanmyd = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**The Wallet Cant Hold More Than \`${maxtodep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins!**`)
      message.lineReplyNoMention(maxbanmyd)
    }
    const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${message.author.username}`)
      .setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Yearly Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
