const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
   name: "respect",
   cooldown: 3,
   permissions: ["SEND_MESSAGES"],
   clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
   description: "Returns Random Respect GIF",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.members.first();
      if (!user) {
         const nopr = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#c30202')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**\`(prefix)respect <@user>\`**`)
         return message.lineReplyNoMention(nopr)
      }
      var gif = [
         `https://media.tenor.com/images/0eb1f1ff68936dbde97bebfa4145e6f0/tenor.gif`,
         `https://media.tenor.com/images/aff79a052e44a086ae473277d7da8a16/tenor.gif`,
         `https://media.tenor.com/images/81e0044564919b3804681952f4191621/tenor.gif`,
         `https://media.tenor.com/images/67e34fd8928748888c93894e0fc07c1d/tenor.gif`,
         `https://media.tenor.com/images/6c6d4aef595b236fa1e925ab1ab43502/tenor.gif`,
         `https://media.tenor.com/images/045b1c2e205826ccc7418bb13cc1bcd7/tenor.gif`,
         `https://media.tenor.com/images/e56d320cdc20d4f8602be39b4e460d49/tenor.gif`,
         `https://media.tenor.com/images/cb6989d452a97107bcff9e6aa8c4ba3d/tenor.gif`,
         `https://media.tenor.com/images/a697ff336053aa2eb4d9ed9a8b8526ea/tenor.gif`,
         `https://media.tenor.com/images/4363c864b009e851dacc13b259a9d75c/tenor.gif`,
         `https://media.tenor.com/images/d73aac94ff4e9b22a94a223ffd9ec651/tenor.gif`,
      ];
      const embed = new Discord.MessageEmbed()
         .setTimestamp()
         .setTitle(`**${message.author.username} Respects ${user.displayName}**`)
         .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
         .setColor('#c30202')
         .setFooter('Respect Forever')

      message.lineReplyNoMention(embed);
   }
}