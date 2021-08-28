const discord = require("discord.js");
const figlet = require("figlet");
const lineReplyNoMention = require('discord-reply');
module.exports = {
   name: "ascii",
   permissions: ["SEND_MESSAGES"],
   cooldown: 5,
   aliases: [],
   category: "Fun",
   usage: "ascii <text>",
   description: "Returns provided text in ascii format.",
   async execute(client, message, cmd, args, Discord) {

      let text = args.join(" ");
      if (!text) {
         return message.lineReplyNoMention({ content: '**`(prefix)ascii <text>`**' })
      }
      let maxlen = 20
      if (text.length > 11) {
         return message.lineReplyNoMention({ content: `**Please Put Text That Has 11 Characters Or Less Because The Conversion Won't Be That Good!**` })
      }

      figlet(text, function (err, data) {
         const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Ascii Conversion')
            .setDescription('```' + data + '```')
         message.lineReplyNoMention(embed)
      })
   }
}