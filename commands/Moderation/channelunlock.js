const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
   name: "channelunlock",
   cooldown: 10,
   permissions: ["ADMINISTRATOR"],
   clientpermissions: ["ADMINISTRATOR"],
   description: "Unlocks a Channel",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.users.first()

      message.channel.overwritePermissions([
         {
            id: message.guild.id,
            null: ['SEND_MESSAGES'],
         },
      ]);
      const embed = new Discord.MessageEmbed()
         .setTimestamp()
         .setAuthor(`Channel Updates!`, message.author.displayAvatarURL({ dynamic: true }))
         .setDescription(`**🔓 ${message.channel} Has Been Unlocked By ${message.author.username}!**`)
         .setColor('#c30202')
      await message.lineReplyNoMention(embed);
   }
}