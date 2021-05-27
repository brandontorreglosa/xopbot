module.exports = {
  name: 'kick',
  permissions: ["KICK_MEMBERS"],
  description: "This Command Kicks Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.kick();
      message.channel.send(`*** <@${memberTarget.user.id}> Has Been Kicked For Breaking The Rules!***`);
    } else {
      message.channel.send('**You Cant Kick This Member Because It Dont Exist Or He Is A Hacker!**');
    }
  }
}