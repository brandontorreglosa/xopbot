const discord = require("discord.js");
const figlet = require("figlet");

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
         return message.channel.send({ content: `**Please Provide Text For The Ascii Conversion!**` })
      }
      let maxlen = 20
      if (text.length > 11) {
         return message.channel.send({ content: `**Please Put Text That Has 11 Characters Or Less Because The Conversion Won't Be That Good!**` })
      }

      figlet(text, function (err, data) {
         const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setTitle('Ascii Conversion')
            .setDescription('```' + data + '```')
         message.channel.send(embed)
      })
   }
}