module.exports = {
    name: 'unmute',
    cooldown: 3,
    permissions: ["MUTE_MEMBERS"],
    description: "This Unmutes A Member",
    execute(client, message, cmd, args, Discord) {
        const target = message.mentions.users.first();
        if (!args[0]) {
            return message.reply('**You Must Mention A User To Unmute!**')
          }
          if(message.mentions.users.first().bot) {
            return message.reply('**You Can Not Unmute Bot`s!**')
          }
          if (message.author.id === user.id) {
            return message.reply('**Are You Alright? You Can Not Unmute Yourself!**');
          }
      
          if (user.id === message.guild.owner.id) {
            return message.reply(
              '**You Jerk, How You Can Unmute Server Owner! 👿**'
            );
          }
        if (target) {
            //let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            //memberTarget.roles.add(mainRole.id);
            message.channel.send(`*** <@${memberTarget.user.id}> Has Been Unmuted!***`);
        } else {
            message.channel.send('**Cant Find The User Because It Dont Exist Or He Is Cheating!**');
        }
    }
}