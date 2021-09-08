const Discord = module.require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
   name: "channellock",
   cooldown: 10,
   permissions: ["ADMINISTRATOR"],
   clientpermissions: ["ADMINISTRATOR"],
   description: "Locks a Channel",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.users.first()
      const reason = args.slice(0).join(" ")
      if (!reason) return message.lineReplyNoMention({ content: "**`(prefix)channellock <reason>`**"}) //, allowedMentions: { repliedUser: true } })

      message.channel.overwritePermissions([
         {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
         },
      ]);
      const embed = new Discord.MessageEmbed()
         .setTimestamp()
         .setTitle("Channel Updates")
         .setDescription(`**🔒 ${message.channel} Has Been Locked By ${message.author.username}! \n${reason}**`)
         .setColor('#c30202')
      await message.lineReplyNoMention(embed);
   }
}