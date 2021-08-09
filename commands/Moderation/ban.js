module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  cooldown: 3,
  description: "This Command Bans Member",
  execute(client, message, cmd, args, Discord) {
    const user = message.mentions.users.first();

    if (!user) {
      return message.reply('**You Must Mention A User To Ban!**')
    }
    if (message.author.id === user.id) {
      return message.reply('**Are You Alright? You Can Not Ban Yourself!**');
    }

    if (user.id === message.guild.owner.id) {
      return message.reply(
        '**You Jerk, How You Can Ban Server Owner! 👿**'
      );
    }

    if (user) {
      const userTarger = message.guild.members.cache.get(member.id);
      userTarger.ban();
      message.channel.send(`**<@${userTarger.user.id}> Has Been Banned For Breaking The Rules!**`);
    } else {
      message.channel.send('**You Cant Ban This Member Because It Dont Exist Or He Is A Hacker!**');
    }
  }
}
