module.exports = {
  name: 'kick',
  permissions: ["KICK_MEMBERS"],
  cooldown: 3,
  description: "This Command Kicks Member",
  execute(client, message, cmd, args, Discord) {
    const member = message.mentions.users.first();

    if (!member) {
      return message.reply('**You Did Not Mention A User To Kick!**')
    }

    if (message.author.id === member.id) {
      return message.reply('**Are You Alright? You Can Not Kick Yourself!**');
    }

    if (member.id === message.guild.owner.id) {
      return message.reply(
        '**You Jerk, How You Can Kick Server Owner! 👿**'
      );
    }
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.kick();
      message.channel.send(`**<@${memberTarger.user.id}> Has Been Kicked For Breaking The Rules!**`);
    } else {
      message.channel.send('**You Cant Kick This Member Because It Dont Exist Or He Is A Hacker!**');
    }
  }
}