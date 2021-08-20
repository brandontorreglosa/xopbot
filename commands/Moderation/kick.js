module.exports = {
  name: 'kick',
  permissions: ["KICK_MEMBERS"],
  cooldown: 3,
  description: "This Command Kicks Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();
    if (!args[0]) {
      return message.reply({ content: '**You Did Not Mention A User To Kick!**', allowedMentions: { repliedUser: true } })
    }
    const reason = args.slice(1).join(" ")
    if (!reason) return message.reply({ content: "***Please Specify A Reason!***", allowedMentions: { repliedUser: true } })

    if (message.author.id === member.id) {
      return message.reply({ content: '**Are You Alright? You Can Not Kick Yourself!**', allowedMentions: { repliedUser: true } });
    }

    if (member.id === message.guild.owner.id) {
      return message.reply({
        content:
          '**You Jerk, How You Can Kick Server Owner! 👿**', allowedMentions: { repliedUser: true }
      });
    }
    
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.kick();
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle(`You Were Kicked From ${message.guild.name}`)
        .setDescription(`Kicked By: ${message.author.username} \nReason: ${reason} \nTry Not To Break The Rules Next Time!`)
      memberTarger.send(embed)
        .catch(() => message.channel.send({ content: `**Could Not Send To <@${memberTarger.user.id}> Reason Of Kick!**` }))
        .then(() => message.channel.send({ content: `**<@${memberTarger.user.id}> Has Been Kicked For ${reason}!**` }));
    } else {
      message.channel.send({ content: '**You Cant Kick This Member Because It Dont Exist!**' });
    }
  }
}