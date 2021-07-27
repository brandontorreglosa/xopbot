const Discord = module.require("discord.js");

module.exports = {
   name: "channelunlock",
   cooldown: 10,
   permissions: ["ADMINISTRATOR"],
   description: "Unlocks a Channel",
   async execute(client, message, cmd, args, Discord) {
      const user = message.mentions.members.first()

      message.channel.overwritePermissions([
         {
            id: message.guild.id,
            null: ['SEND_MESSAGES'],
         },
      ]);
      const embed = new Discord.MessageEmbed()
         .setTimestamp()
         .setTitle("Channel Updates")
         .setDescription(`**🔓 ${message.channel} Has Been Unlocked By ${message.author.username}!**`)
         .setColor('#c30202')
      await message.channel.send(embed);
   }
}