module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  description: "This Command Bans Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.ban();
      message.channel.send(`*** <@${memberTarget.user.id}> Has Been Banned For Breaking The Rules!***`);
    } else {
      message.channel.send('**You Cant Ban This Member Because It Dont Exist Or He Is A Hacker!**');
    }
  }
}
