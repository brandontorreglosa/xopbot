const quick = require('quick.db');

module.exports = {
  name: 'afkset',
  cooldown: 5,
  permissions: ["SEND_MESSAGES"],    
  aliases: ['afk'],
  description: 'Set your afk status',
  execute(client, message, cmd, args, Discord) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('**Status Change Failed**');
    quick.set(`${message.author.id}_${message.guild.id}_afk`, {
      username: message.member.displayName.replace('[AFK]', ''), 
      active: true,
      date: Date.now(), 
    });

    message.member
      .setNickname(`[AFK] ${message.member.displayName.replace('[AFK]', '')}`) 
      .then(() => {
        return message.reply(`**Status Succesfully Has Been Set To AFK.**`);
      })

      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_afk`);
        return message.channel.send('**Failed To Set Your Status Due To Very High Role Try Demoting.**');
      });
  },
};