module.exports = {
  name: 'unban',
  cooldown: 3,
  permissions: ["BAN_MEMBERS"],
  description: "This Command Unbans Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.unban();
      message.channel.send("**User Has Been Unbanned!**");
    } else {
      message.channel.send('**You Cant Unban This Member Because It Dont Exist Or He Has Deleted Account!**');
    }
  }
}