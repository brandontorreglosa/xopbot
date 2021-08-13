module.exports = {
  name: 'unban',
  cooldown: 3,
  permissions: ["BAN_MEMBERS"],
  description: "This Command Unbans Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();
    if (!args[0]) {
      return message.reply({ content: '**You Must Mention A User To Unban!**', allowedMentions: { repliedUser: true } })
    }
    if (message.author.id === member.id) {
      return message.reply({ content: '**Are You Alright? You Can Not Unban Yourself!**', allowedMentions: { repliedUser: true } });
    }
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.unban();
      message.channel.send({ content: "**User Has Been Unbanned!**" });
    } else {
      message.channel.send({ content: '**You Cant Unban This Member Because It Dont Exist Or He Has Deleted Account!**' });
    }
  }
}