const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: 'unban',
  cooldown: 3,
  permissions: ["BAN_MEMBERS"],
  description: "This Command Unbans Member",
  async execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first()
    if (!args[0]) {
      return message.lineReplyNoMention({ content: '**`(prefix)unban <@user>`**' }) //, allowedMentions: { repliedUser: true } })
    }
    if (message.author.id === member.id) {
      return message.lineReplyNoMention({ content: '**Are You Alright? You Can Not Unban Yourself!**' }) //, allowedMentions: { repliedUser: true } });
    }
    if (member.id === client.user.id) {
      return message.lineReplyNoMention({ content: `**You Can Not Unban Me Through Me Lol!**` })
    }
    if (message.member.roles.highest.position < member.roles.highest.position) {
      return message.lineReplyNoMention({ content: '**That User Has Higher Role Than Me!**' })
    }

    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.unban();
      message.lineReplyNoMention({ content: "**User Has Been Unbanned!**" });
    } else {
      message.lineReplyNoMention({ content: '**You Cant Unban This Member Because It Dont Exist Or He Has Deleted Account!**' });
    }
  }
}