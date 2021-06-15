module.exports = {
    name: 'addrole',
    aliases: ['addnewrole'],
    permissions: ["MANAGE_ROLES"],
    async execute(client, message, cmd, args, Discord) {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("**Sorry You Need Permissions To Add A Role!**");
          }
          if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("**I Do Not Have Permission To Manage Roles!**");
          } 
        let target = message.mentions.members.first();
    
        if(!target) return message.reply(`**Please Mention A User!**`)
        
        let arole = message.mentions.roles.first();
        
        if(!arole) return message.reply(`**Please Mention Role For Add!**`)
        
        //let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
        //let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
        
          const embed = new Discord.MessageEmbed()
          .setTitle(`${target.user.username} Has Been Given A Role`)
          .setTimestamp()
          .setColor("#c30202")
          .setDescription(`**XOPBOT Changed Role For ${target.user.username} And Added ${arole}**`)
          .setFooter('👑HACKERPROᵈᵉᵛ#1498')
         await message.channel.send(embed)
          
          target.roles.add(arole)
    }
}