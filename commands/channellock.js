const Discord = module.require("discord.js");

module.exports = {
   name: "channellock",
   permissions: ["ADMINISTRATOR"],
   description: "Locks a Channel",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.members.first()
      let reason = args.slice(0).join(" ")
      if (!reason) return message.reply("***Please Specify A Reason!***")

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
         .setColor("RED")
      await message.channel.send(embed);
   }
}