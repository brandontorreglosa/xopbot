module.exports = {
    name: 'addrole',
    aliases: ['addnewrole'],
    permissions: ["MANAGE_ROLES"],
    async execute(client, message, cmd, args, Discord) {
      const member = message.mentions.members.first()
      if(!member) {
          const addroleError = new MessageEmbed()
          .setDescription(`Please mention a member in order to give them the role`)
          .setColor("RED")
          return message.channel.send(addroleError)
      }
      args.shift()
      let roleToGive = message.mentions.roles.first()
      
      if(!roleToGive) {
          const addroleError2 = new MessageEmbed()
          .setDescription(`No Roles Provided`)
          .setColor("RED")
          return message.channel.send(addroleError2)
      }
      const mentionedPosition = member.roles.highest.position
      const selfPosition = message.member.roles.highest.position

      if(selfPosition <= mentionedPosition) {
          const posi = new MessageEmbed()
          .setDescription(`You cannot add role to this member as their role is higher/equal to yours.`)
          .setColor("RED")
          return message.channel.send(posi)
      }
      if(member.roles.cache.get(roleToGive.id)) {
          const addroleError3 = new MessageEmbed()
          .setDescription(`The member already has that role`)
          .setColor("RED")
          return message.channel.send(addroleError3)
      }
      member.roles.add(roleToGive)
      const embed = new MessageEmbed()
      .setDescription(`Role ${roleToGive} has been added to ${member}`)
      .setColor("BLUE")

      message.channel.send(embed)

      
  }
}
//         if (!message.member.hasPermission("MANAGE_ROLES")) {
//             return message.channel.send("**Sorry You Need Permissions To Add A Role!**");
//           }
//           if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
//             return message.channel.send("**I Do Not Have Permission To Manage Roles!**");
//           } 
//         let target = message.mentions.members.first();
    
//         if(!target) return message.reply(`**Please Mention A User!**`)
        
//         let arole = message.mentions.roles.first();
        
//         if(!arole) return message.reply(`**Please Mention Role For Add!**`)
        
//         //let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
//         //let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
        
//           const embed = new Discord.MessageEmbed()
//           .setTitle(`${target.user.username} Has Been Given A Role`)
//           .setTimestamp()
//           .setColor("#c30202")
//           .setDescription(`**XOPBOT Changed Role For ${target.user.username} And Added ${arole}**`)
//           .setFooter('👑HACKERPROᵈᵉᵛ#1498')
//          await message.channel.send(embed)
          
//           target.roles.add(arole)
//     }
// }