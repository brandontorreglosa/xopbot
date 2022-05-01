const lineReplyNoMention = require('discord-reply');
const mongodburl = process.env.X_MongodbURL;
const color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
  name: "daily",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 86400,
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const randomNumber = Math.floor(Math.random() * 5000) + 5000; 
    const count = 0;const fetchd = count++;
    const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Daily Xocoins!💸**`).setColor(`${color}`).setFooter(`Total Daily\`s Collected: ${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    message.lineReplyNoMention({ embed: embed });
    client.add(message.author.id, randomNumber)
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nClaimed: ${randomNumber}**` })
  },
};