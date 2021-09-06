const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "beg",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 5,
  permissions: [],
  description: "beg for coins",
  async execute(client, message, cmd, args, Discord) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const maxtodep = 10000000;
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
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`**You Begged And Got From XOPBOT \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins! 💸**`)
      .setColor('#c30202')
    message.lineReplyNoMention(embed);
    client.add(message.author.id, randomNumber)
  },
};
