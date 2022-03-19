const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const logChannel = process.env.logChannel;
const db = require("quick.db");
const { MessageButton, MessageActionRow } = require("discord-buttons");
module.exports = {
  name: "beg",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: [],
  cooldown: 15,
  description: "beg for coins",
  async execute(client, message, cmd, args, Discord) {
    const loggerchannel = client.channels.cache.get(logChannel);
    const randomNumber = Math.floor(Math.random() * 500) + 1; const randompercentage = Math.floor(Math.random() * 100) + 1; const got = randomNumber + randompercentage; await db.add(`${message.author.username}_begged_total`, 1)
    const totalbegs = await db.get(`${message.author.username}_begged_total`)
    const embed = new Discord.MessageEmbed().setTimestamp().setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**You Begged And Got From XOPBOT \`${got.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins, Including ${randompercentage} Bonus!💸**`).setColor(`${color}`).setFooter(`You Have Begged For Over: ${totalbegs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Times!`)
    message.lineReplyNoMention({ embed: embed }); client.add(message.author.id, got)
    loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name} \nClaimed: ${got}**` })
  },
};