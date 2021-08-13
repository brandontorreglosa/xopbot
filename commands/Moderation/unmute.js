module.exports = {
  name: 'unmute',
  cooldown: 3,
  permissions: ["MUTE_MEMBERS"],
  description: "This Unmutes A Member",
  execute(client, message, cmd, args, Discord) {
    const target = message.mentions.users.first();
    if (!args[0]) {
      return message.reply({ content: '**You Must Mention A User To Unmute!**', allowedMentions: { repliedUser: true } })
    }
    if (message.mentions.users.first().bot) {
      return message.reply({ content: '**You Can Not Unmute Bot`s!**', allowedMentions: { repliedUser: true } })
    }
    if (message.author.id === user.id) {
      return message.reply({ content: '**Are You Alright? You Can Not Unmute Yourself!**', allowedMentions: { repliedUser: true } });
    }

    if (user.id === message.guild.owner.id) {
      return message.reply({
        content:
          '**You Jerk, How You Can Unmute Server Owner! 👿**', allowedMentions: { repliedUser: true }
      });
    }
    if (target) {
      //let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
      let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      //memberTarget.roles.add(mainRole.id);
      message.channel.send({ content: `*** <@${memberTarget.user.id}> Has Been Unmuted!***` });
    } else {
      message.channel.send({ content: '**Cant Find The User Because It Dont Exist Or He Is Cheating!**' });
    }
  }
}