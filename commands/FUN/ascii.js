const discord = require("discord.js");
const figlet = require("figlet");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
const logChannel = process.env.logChannel;
module.exports = {
   name: "ascii",
   permissions: ["SEND_MESSAGES"],
   clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
   cooldown: 5,
   aliases: [],
   category: "Fun",
   usage: "ascii <text>",
   description: "Returns provided text in ascii format.",
   async execute(client, message, cmd, args, Discord) {
      let text = args.join(" ");
      const loggerchannel = client.channels.cache.get(logChannel);
      if (!text) {
         const nopr = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**\`(prefix)ascii <text>\`**`)
         return message.lineReplyNoMention({ embed: nopr })
      }
      if (text.length > 13) {
         const maxlenembed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true })).setDescription(`**Please Put Text That Has \`13\`Characters Or Less Because The Conversion Won\`t Be That Good!**`)
         return message.lineReplyNoMention({ embed: maxlenembed })
      }
      figlet(text, function (err, data) {
         const embed = new Discord.MessageEmbed().setTimestamp().setColor(`${color}`).setTitle('Ascii Conversion').setDescription('```' + data + '```')
         message.lineReplyNoMention({ embed: embed })
         loggerchannel.send({ content: `**${message.author.username}#${message.author.discriminator} used the command ${this.name} in ${message.guild.name}**` })
      })
   }
}