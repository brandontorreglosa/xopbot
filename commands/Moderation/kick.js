const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'kick',
  permissions: ["KICK_MEMBERS"],
  cooldown: 3,
  description: "This Command Kicks Member",
  async execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)kick <@user> <reason>`**' })//, allowedMentions: { repliedUser: true } })
    }
    const reason = args.slice(1).join(" ")
    if (!reason) return message.lineReplyNoMention({ content: "**Please Specify A Reason!**" })//, allowedMentions: { repliedUser: true } })

    if (message.author.id === member.id) {
      return message.lineReplyNoMention({ content: '**Are You Alright? You Can Not Kick Yourself!**' })//, allowedMentions: { repliedUser: true } });
    }

    if (member.id === message.guild.owner.id) {
      return message.lineReplyNoMention({
        content:
          '**You Jerk, How You Can Kick Server Owner! 👿**' //, allowedMentions: { repliedUser: true }
      });
    }

    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#c30202')
        .setTitle(`You Were Kicked From ${message.guild.name}`)
        .setDescription(`Kicked By: ${message.author.username} \nReason: ${reason} \nTry Not To Break The Rules Next Time!`)
      memberTarger.send(embed)
        .catch(() => message.lineReplyNoMention({ content: `**Could Not Send To <@${memberTarger.user.id}> Reason Of Kick!**` }))
        .then(() => message.lineReplyNoMention({ content: `**<@${memberTarger.user.id}> Has Been Kicked For ${reason}!**` }))
        .then(() => memberTarger.kick());
    } else {
      message.channel.send({ content: '**You Cant Kick This Member Because It Dont Exist!**' });
    }
  }
}