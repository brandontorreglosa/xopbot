const quick = require('quick.db');
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'afkset',
  cooldown: 10,
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ['afk', 'setafk'],
  description: 'Set your afk status',
  async execute(client, message, cmd, args, Discord) {
    //  if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('**Status Change Failed**');
    quick.set(`${message.author.id}_${message.guild.id}_afk`, {
      username: message.member.displayName.replace('[AFK]', ''),
      active: true,
      date: Date.now(),
    });

    message.member
      .setNickname(`[AFK] ${message.member.displayName.replace('[AFK]', '')}`)
      .then(() => {
        const success = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(`${color}`)
          .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(`**Status Successfully Set To \`[AFK]\`!**`)
        return message.lineReplyNoMention(success)
      })

      .catch(_e => {
        quick.delete(`${message.author.id}_${message.guild.id}_afk`);
        return message.lineReplyNoMention({ content: '**Failed To Set Your Status Due To Very High Role Try Demoting.**' });
      });
  },
};