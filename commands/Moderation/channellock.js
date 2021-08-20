const Discord = module.require("discord.js");

module.exports = {
   name: "channellock",
   cooldown: 10,
   permissions: ["ADMINISTRATOR"],
   description: "Locks a Channel",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.members.first()
      const reason = args.slice(0).join(" ")
      if (!reason) return message.reply({ content: "***Please Specify A Reason!***", allowedMentions: { repliedUser: true } })

      message.channel.permissionOverwrites.set([
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
      await message.channel.send(embed);
   }
}