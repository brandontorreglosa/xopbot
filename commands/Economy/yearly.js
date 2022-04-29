const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const mongodburl = process.env.X_MongodbURL;
const { Database } = require("quickmongo");
const db = new Database(mongodburl)
const logChannel = process.env.logChannel;
module.exports = {
  name: "yearly",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 31536000,
  description: "yearly Xocoins",
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const randomNumber = Math.floor(Math.random() * 1000000) + 5000; await db.add(`${message.author.username}_yearly_collected`, 1)
    const fetchd = await db.get(`${message.author.username}_yearly_collected`)
    const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Received \`${randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Yearly Xocoins!💸**`).setColor(`${color}`).setFooter(`Total Yearly\`s Collected: ${fetchd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`)
    message.lineReplyNoMention({ embed: embed });
    client.add(message.author.id, randomNumber)
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nClaimed: ${randomNumber}**` })
  },
};