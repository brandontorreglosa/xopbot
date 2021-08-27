const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  cooldown: 3,
  description: "This Command Bans Member",
  execute(client, message, cmd, args, Discord) {
    const user = message.mentions.users.first();
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**You Must Mention A User To Ban!**' }) //, allowedMentions: { repliedUser: true } })
    }
    const reason = args.slice(1).join(" ")
    if (!reason) return message.lineReplyNoMention({ content: "***Please Specify A Reason!***" }) //, allowedMentions: { repliedUser: true } })

    if (message.author.id === user.id) {
      return message.lineReplyNoMention({ content: '**Are You Alright? You Can Not Ban Yourself!**' }) //, allowedMentions: { repliedUser: true } });
    }

    if (user.id === message.guild.owner.id) {
      return message.lineReplyNoMention({
        content:
          '**You Jerk, How You Can Ban Server Owner! 👿**' //, allowedMentions: { repliedUser: true }
      });
    }

    if (user) {
      const userTarger = message.guild.members.cache.get(member.id);
      userTarger.ban();

      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle(`You Are Banned From ${message.guild.name} 😢`)
        .setDescription(`Banned By: ${message.author.username} \nReason: ${reason} \nTry Not To Break The Rules Next Time!`)
      userTarger.send(embed)
        .catch(() => message.lineReplyNoMention({ content: `**Could Not Send To <@${userTarger.user.id}> Reason Of Ban!**` }))
        .then(() => message.lineReplyNoMention({ content: `**<@${userTarger.user.id}> Has Been Banned For ${reason}!**` }))
    } else {
      message.lineReplyNoMention({ content: '**You Cant Ban This Member Because It Dont Exist!**' });
    }
  }
}
