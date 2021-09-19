const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
  name: 'unmute',
  cooldown: 3,
  permissions: ["MUTE_MEMBERS"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MUTE_MEMBERS"],
  description: "This Unmutes A Member",
  async execute(client, message, cmd, args, Discord) {
    const target = message.mentions.users.first()
    const fettag = args[0];
    if (!args[0]) {
      const nopr = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**\`(prefix)unmute <@user>\`**`)
      return message.lineReplyNoMention(nopr)
    }
    if (message.mentions.users.first().bot) {
      const nobots = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Can Not Unmute Bot\`s!**`)
      return message.lineReplyNoMention(nobots)
    }
    if (message.author.id === target.id) {
      const nomuteyourself = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Are You Alright? You Can Not Unmute Yourself!**`)
      return message.lineReplyNoMention(nomuteyourself);
    }
    if (target.id === client.user.id) {
      const nomuteme = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Can Not Unmute Me Through Me, Thats Way Too Evil!**`)
      return message.lineReplyNoMention(nomuteme)
    }
    if (target.id === message.guild.owner.id) {
      const nomuteserverowner = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**You Jerk, How  You Can Unmute Server Owner! 👿**`)
      return message.lineReplyNoMention(nomuteserverowner)
    }
    if (target) {
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      const memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      const successsful = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Unmuted Successfully \`${target.username}\`!**`)
      message.lineReplyNoMention(successsful)
    } else {
      const unsucer = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor(`${color}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Could Not Unmute \`${fettag}\`!**`)
      message.lineReplyNoMention(unsucer)
    }
  }
}