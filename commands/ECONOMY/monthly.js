const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const mongodburl = process.env.X_MongodbURL;
const logChannel = process.env.logChannel;
module.exports = {
  name: "monthly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 2628000,
  description: "daily Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const randomNumber = Math.floor(Math.random() * 100000) + 5000; 
    const count = 0;const fetchd = count + 1;
    const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Monthly Xocoins!💸**`).setColor(`${color}`).setFooter(`Total Monthly\`s Collected: ${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    message.lineReplyNoMention({ embed: embed });
    client.add(message.author.id, randomNumber)
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nClaimed: ${randomNumber}**` })
  },
};